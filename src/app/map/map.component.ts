import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { MatDrawer} from '@angular/material/sidenav';
import { MatAutocomplete } from "@angular/material/autocomplete";
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';
import { SearchService } from '../service/search.service';
import { RouteStore } from '../store/RouteStore';

import {Router} from "@angular/router"
import 'leaflet-routing-machine';
import 'lrm-graphhopper';
import * as turf from '@turf/turf';
import { Route } from '../model/Route';


declare let OSMBuildings:any;

export class Building {
  lat: number;
  lng: number;
  sub_zone_id: number;
}

interface ll {
  lat: number;
  lng: number;
}

interface searchPoint{
  lat: number;
  lng: number;
  name: string;
}


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  myControl = new FormControl();
  show3d = false;
  show2d = true;
  addresses=[];
  frompoints = [];
  topoints = [];
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
  geojsonpath: any;
  showsearchbox=true;
  showdirbox = false;
  searchform: FormGroup;
  originform: FormGroup;
  destinationform: FormGroup;
  dirform: FormGroup;
  startMarker: L.Marker;
  endMarker: L.Marker;
  sat: any;
  routePath: Route;
  voices: any;

  // search suggestions
  options = [];
  OriginOptions = [];
  DestinationOptions = [];

  //control the instruction given to exaclty once
  isInstructionGiven = false;

  currentRoute = null;
  stPT
  snPT

  //Routing machine object
  routing:any;

  //POI details variable
  poiName:any;
  streetName: any;
  originPoint: searchPoint;
  destinationPoint: searchPoint;

  // Display booleans
  showPoiSearch: any;
  dirDouble = true;
  enableNav = false;

  //Route details
  routeLength: any;
  routeTime: any;


  @ViewChild('drawer',{static: false}) drawer: MatDrawer;
  @ViewChild('itenary',{static: false}) iteDiv: ElementRef;


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

  pinMarker = L.icon({
    iconUrl: 'assets/marker-icon.png',
    iconSize: [20,30]
  })

  constructor(
    private renderer: Renderer2,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private searchService : SearchService,
    private dataservice: DataService,
    private fb : FormBuilder,
    private router: Router,
    private routeStore: RouteStore,
  ) {
    this.building = new Building();
  }



  ngOnInit() {
    this.sat = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      minZoom: 13,
    });
    this.renderMap();
    this.reactiveForm();
  }


  reactiveForm(){
    this.searchform = this.fb.group({})
    this.originform = this.fb.group({
      origin:[]
    });
    this.destinationform = this.fb.group({
      destination:new FormControl()
    });
    this.dirform = this.fb.group({
      frompoint:[],
      topoint:[]
    })
  }

  //goes to xy coordinate on the map and marks with marker and zoom to that place
  gotoplace(value){
    var pos:ll = {
      lat: value.geom.coordinates[0][1],
      lng: value.geom.coordinates[0][0]
    }
    console.log(value)

    let lat = pos.lat
    let lng = pos.lng
    if(this.gotoPlaceMarker !== undefined){
      this.map.removeLayer(this.gotoPlaceMarker);
    }
    this.gotoPlaceMarker=L.marker([lat,lng],{icon: this.myMarker}).addTo(this.map);
    this.map.flyTo([lat,lng],16);

    //TODO show place deatils here
    this.poiName = value.address
    this.streetName = value.street_pry

    //disable direction double form 
    this.dirDouble = false

    //set it up if directions pressed
    this.destinationPoint = {
      lat: pos.lat,
      lng: pos.lng,
      name: value.address
    }

    //Show details in drawer
    this.drawer.toggle();
  }

  //get directions when clicked on poi details
  poiDirection(){
    if(this.destinationPoint !== undefined){
      this.dirDouble = true;

      let obj = {
        address: this.poiName,
        geom:{
          coordinates:[[this.destinationPoint.lng,this.destinationPoint.lat]]
        }
      }
      // this.onDestinationSelected(obj)
      this.destinationform.controls.destination.setValue(obj);
      this.poiName = null
    }
  }

  getDirection(){
    if(this.showdirbox === false){
      this.showsearchbox = false;
      this.showdirbox = true;
    }else{
      this.showsearchbox = true;
      this.showdirbox = false;
    }
  }
  getPath(){
    let topoint = this.dirform.get('topoint').value;
    let frompoint= this.dirform.get('frompoint').value;
    let acoord=[];
    let bcoord = [];
    
    
    this.searchService.searchAddress(frompoint).subscribe(response=>{
        if(response.success === "true"){
          acoord= response.data[0].geom.coordinates;
          this.searchService.searchAddress(topoint).subscribe(response=>{
              if(response.success === "true"){
                bcoord= response.data[0].geom.coordinates;
                let dataobj = {
                  "pointa":acoord[0],
                  "pointb":bcoord[0]
                }
                console.log(dataobj)
                this.dataservice.getDirection(dataobj).subscribe((json:any)=>{
                  if(this.geojson !== undefined){ this.map.removeLayer(this.geojsonpath) }
                  this.geojsonpath = L.geoJSON(json.data).addTo(this.map);
                  this.map.fitBounds(this.geojsonpath.getBounds());

                  if(this.startMarker !== undefined){ this.map.removeLayer(this.startMarker) }
                  this.startMarker = L.marker(acoord[0].reverse(),{icon:this.pinMarker}).addTo(this.map);

                  if(this.endMarker !== undefined){ this.map.removeLayer(this.endMarker) }
                  this.endMarker = L.marker(bcoord[0].reverse(),{icon:this.myMarker}).addTo(this.map);

                });
              }else if (response.success === "false"){
                this.snackBar.open(response.message,"",{
                  verticalPosition: 'top',
                  duration: 3000
                });
              }
          });
        }else if (response.success === "false"){
          this.snackBar.open(response.message,"",{
            verticalPosition: 'top',
            duration: 3000
          });
        }
    });

  }

  //Drawer event
  onDrawerEvent(e: boolean){
    if(e == false){
      if(this.routing !== undefined){
        this.map.removeControl(this.routing)
      }
    }
  }
  //when the search value is selected
  onSearchSelected(value){
    this.gotoplace(value)
  }

  //to display clicked value as text
  getOptionText(option){
    if(option == null){
      return 
    }
    return option.address
  }

  //Everytime text input changers
  onSearchChange(searchValue: string): void {  
    console.log(searchValue);

    this.searchService.searchAddress(searchValue).subscribe(response=>{
        if(response.success === "true"){
          // var data = response.data.map(x => x.address)
          this.options = response.data;
        }else if (response.success === "false"){
        }
    });
  }

  //Search origin
  onOriginSearch(searchValue: string): void{
    if(searchValue === ""){
      this.originPoint= undefined
    }else{
      this.searchService.searchAddress(searchValue).subscribe(response=>{
          if(response.success === "true"){
            // var data = response.data.map(x => x.address)
            this.OriginOptions = response.data;
          }else if (response.success === "false"){
          }
      });
    }
  }

  onOriginSelected(value){
    //TODO set origin
    console.log(value)
    this.originPoint = {
      lat: value.geom.coordinates[0][1],
      lng: value.geom.coordinates[0][0],
      name: value.address
    }
  }

  //Search desitnation 
  onDestinationSearch(searchValue: string): void{
    if(searchValue === ""){

      this.destinationPoint = undefined 
    }else{
      this.searchService.searchAddress(searchValue).subscribe(response=>{
          if(response.success === "true"){
            // var data = response.data.map(x => x.address)
            this.DestinationOptions = response.data;
          }else if (response.success === "false"){
          }
      });
    }
  }
  onDestinationSelected(value){
    console.log(value)
    //TODO set origin
    this.destinationPoint= {
      lat: value.geom.coordinates[0][1],
      lng: value.geom.coordinates[0][0],
      name: value.address
    }
  }

  //Get directions button

  getDirections(){
    //Leaflet routing machine
    if(this.originPoint !== undefined && this.destinationPoint !== undefined){
      let pointa = L.latLng(this.originPoint.lat,this.originPoint.lng);
      let pointb = L.latLng(this.destinationPoint.lat,this.destinationPoint.lng);

      if(this.routing !== undefined){
        this.map.removeControl(this.routing)
      }
      //Graphhopper api with LRM
      this.routing = L.Routing.control({
        router: new L.Routing.GraphHopper(undefined , {
          serviceUrl: 'https://zhichar.myddns.rocks/gh/route'
        }),
        showAlternatives: true,
        // routeWhileDragging: true,
        addWaypoints: false,
        
        plan: L.Routing.plan(
          //set origin destination here
          [ pointa,pointb ],
          {
            createMarker: function (i: number, waypoint: any, n: number) {
              var marker;
              console.log(i)
              if(i == 0){
                marker = L.marker(waypoint.latLng, {
                  icon: L.icon({
                    iconUrl: 'assets/marker-red.png',
                    iconSize: [15, 15]
                  })
                });
              }else{
                marker = L.marker(waypoint.latLng,{
                  icon: L.icon({
                    iconUrl: 'assets/location.svg',
                    iconSize: [20,20]
                  })
                }) 
              }
              return marker;
            }
          },
        ),
        fitSelectedRoutes: true

      }).addTo(this.map);
      this.routing.hide();

      this.routing.on('routesfound',(e)=>{
        //TODO this.currentRoute may be redundant remove after review
        this.currentRoute = e.routes[0];
        console.log(this.currentRoute);
        
        //assigning to new route path class
        this.routePath = new Route(this.currentRoute);
        console.log(this.routePath)
        this.routeLength= Math.round(this.currentRoute.summary.totalDistance)
        this.routeTime = Math.round(this.currentRoute.summary.totalTime/60) + 6

        // show navigate button
        this.enableNav = true;

        // this.updateRoute(position)
      })
    }else{
      if(this.routing !== undefined){
        this.map.removeControl(this.routing)
      }
      console.log("empty")
    }
  }


  openDrawer(){
    this.drawer.toggle();
    // TODO check if desitnation bar is set
    // this.showPoiSearch = this.drawer.opened
  }

  //Zooms to the current location based on data from the device. TODO: need to fix this.
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


  initLeaflet(){
    this.map = L.map('map',{
      center:[27.4712,89.64191],
      zoom: 13,
      maxZoom: 20,
      layers: [this.sat]
    });
  }

  
  renderMap() {
    var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 13,
    });
    // var drukmap= L.tileLayer.wms('https://{s}.drukmap.bt:8080/geoserver/bhutan/wms', {
    //   layers: 'bhutan:thimphu',
    //   maxZoom: 20,
    //   minZoom: 13,
    //   format: 'image/png',
    //   transparent: true
    // });

    this.initLeaflet();
    // this.initOSMB();

    // var zoneJsonUrl = "https://raw.githubusercontent.com/kwangyel/drukmap/master/zones.geojson";
    // fetch(zoneJsonUrl).then(resp=> resp.json())
    // .then((data)=>{
    //   const zones = L.geoJSON(data).addTo(this.map);
    // })

    // fetch(pois).then(resp=> resp.json())
    // .then((data)=>{
    //   const pois = L.geoJSON(data).addTo(this.map);
    // })



    //The routing object
    // initialize the routng and navigation interface from here

    //On route found this is triggered


    this.map.on('click',<LeafletMouseEvent>(e)=>{
    //TODO: show and hide details of place on map click
      // console.log(e.latlng)

      // TODO testing purpose remove later or when you figure out how to mock route locations
      // this.updateRoute(e.latlng)
    })

    // this.map = L.map('map',{
    //   center:[27.4712,89.64191],
    //   zoom: 13,
    //   maxZoom: 20,
    //   layers: [sat]
    // });

    // var streeTile = L.tileLayer.wms('https://{s}.drukmap.bt:8080/geoserver/bhutan/wms', {
    //   layers: 'bhutan:street_11august',
    //   maxZoom: 25,
    //   minZoom: 13,
    //   format: 'image/png',
    //   transparent: true
    // }).addTo(this.map);

    // var bldgTile = L.tileLayer.wms('https://{s}.drukmap.bt:8080/geoserver/bhutan/wms', {
    //   layers: 'bhutan:building_numbers_11august',
    //   maxZoom: 25,
    //   minZoom: 13,
    //   format: 'image/png',
    //   transparent: true
    // }).addTo(this.map);



    // let Search = L.Control.extend({
    //   onAdd : function(map){
    //     return L.DomUtil.get("customsearch")
    //   },
    // });

    // this.search = new Search({position: 'topleft'}).addTo(this.map);
    this.map.zoomControl.setPosition("topright");

    var baseMaps = {
      "Satellite Image": this.sat,
      "OSM base map": osm, 
      // "Drukmap Base": drukmap
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

    // var overlayMaps = {
    //   "Buildings": bldgTile,
    //   "Streets": streeTile,
    // }


    let postbody = {
      "a":[123,12],
      "b":[1,1]
    }
  

    L.control.layers(baseMaps).addTo(this.map);

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


  startNavigation(){

      if(this.routePath !== null){
        this.routeStore.storage = this.routePath;
        this.router.navigate(['/navigate']);
      }
  }

  // TODO Function to update navigation on locatio change
  updateRoute(location){
      if(this.routePath !== undefined){
        let coordinates = this.routePath.route.coordinates.map(x => [x.lng,x.lat]);
        let ls = turf.lineString(coordinates);

        let currentLocation = turf.point([location.lng,location.lat]);

        //snaped point on line
        //TODO maybe this cann be moved outside to the checkvalidLocation function. Review
        let snapped = turf.nearestPointOnLine(ls,currentLocation,{units:'meters'});
        console.log("snapped dist now: "+snapped.properties.dist)

        if(snapped.properties.dist < 30){
          //Updating the current location on the route
          if(this.snPT !== undefined ){
            this.snPT.setLatLng(new L.LatLng(snapped.geometry.coordinates[1],snapped.geometry.coordinates[0]));
          }else{
            this.snPT = L.marker([snapped.geometry.coordinates[1],snapped.geometry.coordinates[0]]).addTo(this.map);
          }

          this.calcualteLegDistanceRemaining(snapped.geometry.coordinates,snapped.properties.index)
          console.log(snapped)

          if(this.routePath.legDistanceRemaining < 100){
            //TODO recite instruction exactly once here
            if(!this.isInstructionGiven){
              var instruction = this.routePath.getCurrentLegInstruction()
              var msg = new SpeechSynthesisUtterance(instruction.text);

              msg.voice = this.voices.filter(function(voice) { return voice.name == 'Google UK English Female'; })[0];
              console.log(this.voices)
              // msg.voice = this.voices[10]
              window.speechSynthesis.speak(msg)
              this.isInstructionGiven = true
            }
          }
          //TODO Update route leg index if maneuver is complete 
          var isManeuverComplete = this.checkManeuverComplete(location)
          var forceIndexIncreate = this.routePath.legDistanceRemaining == 0 && !isManeuverComplete
          if(isManeuverComplete || forceIndexIncreate){
            if(this.routePath.incrementIndex()){
              console.log("moved to next route leg")
              this.isInstructionGiven = false
            }else{
              console.log("I think its end of route")
              //TODO: redirect to map view from here
            }
          }
        }
      }
  }

  calcualteLegDistanceRemaining(location,index){
    // Leg distance remaining calculation
    var currentInstruction = this.routePath.getCurrentLegInstruction()
    var nextInstructionPosition = this.routePath.getNextStartPosition()
    if(currentInstruction.index < index){
      this.routePath.legDistanceRemaining = 0;
      console.log("distance remoaning :"+this.routePath.legDistanceRemaining)
    }else{
      if(nextInstructionPosition !== null){
        var endofLegPoint = turf.point([nextInstructionPosition.lng,nextInstructionPosition.lat])
        var currentPoint = turf.point(location)
        var legDistnaceRemaining = turf.distance(currentPoint,endofLegPoint,{units: 'meters'})
        this.routePath.legDistanceRemaining = legDistnaceRemaining;
        console.log("distance remoaning :"+this.routePath.legDistanceRemaining)
      }else{
        // readched end of journey
        var endIndex = currentInstruction.index;
        var endCoordinate = this.routePath.route.coordinates[endIndex]
        var endofLegPoint = turf.point([endCoordinate.lng,endCoordinate.lat])
        var currentPoint = turf.point(location)
        var legDistnaceRemaining = turf.distance(currentPoint,endofLegPoint,{units: 'meters'})
        this.routePath.legDistanceRemaining = legDistnaceRemaining;
        console.log("distance remoaning :"+this.routePath.legDistanceRemaining)
      }
    }


  }

  checkManeuverComplete(location){
    if(this.routePath.legDistanceRemaining < 30){

      var nextBearing = this.routePath.getNextBearing()
      var currentBearing = this.routePath.getCurrentBearing()
      //TODO think these will both become null when the driver has reached end of route. Check if thats true
      if(nextBearing == null && currentBearing == null){
        console.log("maybe end of line")
        return true
      }
      var turnAngle = this.angleBetween(currentBearing,nextBearing)

      // var userAngleFromTurn = this.angleBetween(location.getBearing(),turnAngle)

      //if the user bearing is less than the offset allowed then chance are it might be complete but wait for distance remaining to go to zero before increasing index
      if(turnAngle <= 30){
        console.log("waiting for leg distance to end now")
        return this.routePath.legDistanceRemaining == 0;
      }else{
        //TODO this comes when the device gets the users bearing
        // return userAngleFromTurn <= 30
        return false;
      }
    }
  }

  //Helper functions
  angleBetween(anglea,angleb){
    var a = Math.abs(anglea - angleb) % 360
    return a > 180 ? 360 - a : a
  }


}
