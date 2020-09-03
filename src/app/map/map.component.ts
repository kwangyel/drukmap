import { Component, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { MatSnackBar, MatDrawer} from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from '../service/search.service';

export class Building {
  lat: number;
  lng: number;
  sub_zone_id: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  addresses=[];
  geojson: any;
  building: Building;
  locateId:any;
  myPosition:L.Marker;
  myCircle:L.Circle;
  latlng: any;
  isLocationOn:boolean;
  map: L.Map;
  search: L.Control;
  gotoPlaceMarker: L.Marker;
  @ViewChild('drawer',{static: false}) drawer: MatDrawer;

  greenMarker = L.icon({
    iconUrl: 'assets/marker-green.png',
    iconSize: [15, 15]
  });

  redMarker = L.icon({
    iconUrl: 'assets/marker-red.png',
    iconSize: [15, 15]
  });

  myMarker = L.icon({
    iconUrl: 'assets/mymarker.png',
    iconSize: [20, 20]
  });

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private searchService : SearchService,
  ) {
    this.building = new Building();
  }


  public form : FormGroup = new FormGroup({
    address: new FormControl(''),
  });
  ngOnInit() {
    this.renderMap();
  }
  convertPascal(ss:String){
    return ss.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    ); 
  }
  gotoplace(coord){
    let lng = coord[0][0];
    let lat = coord[0][1];
    if(this.gotoPlaceMarker !== undefined){
      this.map.removeLayer(this.gotoPlaceMarker);
    }
    this.gotoPlaceMarker=L.marker([lat,lng],{icon: this.myMarker}).addTo(this.map);
    this.map.setView([lat,lng],16);
  }
  searchLocation(){
    let address = this.form.get('address').value;
    if(address !== ""){
      console.log(address);
      let obj=this.searchService.searchAddress(address).subscribe(response=>{
        if(response.success === "true"){
          this.addresses= response.data;
          this.drawer.toggle();
        }else if (response.success === "false"){
          this.snackBar.open(response.message,"",{
            verticalPosition: 'top',
            duration: 3000
          });
        }
      },error=>{
        console.log(error);
      });
    }
  }

  getMyLocation(){
    this.isLocationOn = true;
    if(this.locateId !== undefined){
      this.map.setView(this.latlng.latlng,17);
    }
    this.locateId = this.map.locate({watch:true});
  }
  zoomToLocation(){
    alert("you double clicked");
  }


  renderMap() {
    var sat = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      minZoom: 13,
    });
    var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 13,
    });
    var drukmap= L.tileLayer.wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
      layers: 'bhutan:thimphu',
      maxZoom: 20,
      minZoom: 13,
      format: 'image/png',
      transparent: true
    });

    this.map = L.map('map',{
      center:[27.4712,89.64191],
      zoom: 13,
      maxZoom: 20,
      layers: [sat]
    });

    var streeTile = L.tileLayer.wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
      layers: 'bhutan:street_11august',
      maxZoom: 25,
      minZoom: 13,
      format: 'image/png',
      transparent: true
    }).addTo(this.map);

    var bldgTile = L.tileLayer.wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
      layers: 'bhutan:building_numbers_11august',
      maxZoom: 25,
      minZoom: 13,
      format: 'image/png',
      transparent: true
    }).addTo(this.map);

    // let Search = L.Control.extend({
    //   onAdd : function(map){
    //     return L.DomUtil.get("customsearch")
    //   },
    // });

    // this.search = new Search({position: 'topleft'}).addTo(this.map);
    this.map.zoomControl.setPosition("topright");

    var baseMaps = {
      "Satellite Image": sat,
      "OSM base map": osm, 
      "Drukmap Base": drukmap
    };

    // this.http.get(`http://localhost:4200/assets/geojson/conv_T239.geojson`).subscribe((json: any) => {
    //   console.log(json);
    //   this.geojson= L.geoJSON(json, {
    //     style: (feature)=>{
    //       return {
    //         color:"red",
    //         fillOpacity:0
    //       }
    //     }
    //   }).addTo(this.map);
    //   this.map.fitBounds(this.geojson.getBounds());
    // });

    var overlayMaps = {
      "Buildings": bldgTile,
      "Streets": streeTile,
    }

    
    this.http.get(`https://outpassdashboard.desuung.org.bt/api/buildings?sub_zone_id=123`).subscribe((json: any) => {
      console.log(json);
      const geoJson = L.geoJSON(json, {
        onEachFeature: (feature, layer) => {
            layer.on('click', (e) => {
              alert("this is the building id " +feature.properties.id)
            });
          }, pointToLayer: (feature, latLng) => {
            if (feature.properties.status === 'INCOMPLETE') {
              return L.marker(latLng, {icon: this.redMarker});
            } else {
              return L.marker(latLng, {icon: this.greenMarker});
            }
          }
        }).addTo(this.map);
    });
    

    L.control.layers(baseMaps,overlayMaps).addTo(this.map);

    this.map.on('locationerror',(err)=>{
          if (err.code === 0) {
            this.snackBar.open('Couldnot pull your location, please try again later', '', {
              verticalPosition: 'top',
              duration: 3000
            });
          }
          if (err.code === 1) {
            this.snackBar.open('Location service is disabled, please enable it and try again', '', {
              verticalPosition: 'top',
              duration: 3000
            });
          }
          if (err.code === 2) {
            this.snackBar.open('Your location couldnot be determined', '', {
              verticalPosition: 'top',
              duration: 3000
            });
          }
          if (err.code === 3) {
              this.snackBar.open('Couldnot get your location', '', {
                verticalPosition: 'top',
                duration: 3000
              });
            }
    });

    this.map.on('locationfound',(e)=>{
      var radius = e.accuracy;
      this.latlng = e
      if(this.myPosition !== undefined){
        this.map.removeLayer(this.myPosition);
      }
      this.myPosition = L.marker(e.latlng,{icon: this.myMarker}).addTo(this.map);

      if(this.myCircle!== undefined){
        this.map.removeLayer(this.myCircle);
      }
      if(radius<100){
        this.myCircle = L.circle(e.latlng,radius).addTo(this.map);
      }
    });
  }

  onMapReady(map: L.Map) {
    const zoneId = Number(sessionStorage.getItem('subZoneId'));
  }
  
}
