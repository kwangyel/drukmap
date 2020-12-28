import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from '../service/data.service';
import { MatDrawer} from '@angular/material/sidenav';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';
import { SearchService } from '../service/search.service';
import { RouteStore } from '../store/RouteStore';
import { SearchStore } from '../store/SearchStore';
import { MatBottomSheet, MatDialog} from '@angular/material/';
import { BottomSheet } from "./bottomSheet.component"

import {Router} from "@angular/router"
import 'leaflet-routing-machine';
import 'lrm-graphhopper';
import { Route } from '../model/Route';
import { DirectionDialog } from './directionDialog.component';
import { PermissionDialog } from './permissionDialog.component';
import { StateService } from '../store/StateService';



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

  //Location enabled
  canPrompt = false;


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
    iconUrl: 'assets/blue_dot.svg',
    iconSize: [20, 20]
  });

  pinMarker = L.icon({
    iconUrl: 'assets/marker-icon.png',
    iconSize: [20,30]
  })

  shopMarker = L.icon({
    iconUrl: 'assets/shops.svg',
    iconSize: [20,30]
  })

  pharmMarker = L.icon({
    iconUrl: 'assets/pharm.svg',
    iconSize: [30,40]
  })
  layercontrol: L.Control.Layers;

  constructor(
    public searchStore : SearchStore,
    public directionDialog: MatDialog,
    public permissionDialog: MatDialog,
    private snackBar: MatSnackBar,
    private searchService : SearchService,
    private dataservice: DataService,
    private fb : FormBuilder,
    private router: Router,
    private routeStore: RouteStore,
    private bottomsheet: MatBottomSheet,
    private stateService : StateService,
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
    this.checkPermission();
    this.checkPermission()
  }

  // open bottomsheet poi details
  openBottomSheet(details:any): void {
    const bottomsheetref = this.bottomsheet.open(BottomSheet,{
      data: details 
    });
    const onDirSub = bottomsheetref.instance.onDirection.subscribe((val)=>{
      console.log(val)
      this.poiDirection();
    })
    const onNavSub = bottomsheetref.instance.onStartNavigation.subscribe((val)=>{
      console.log(val)
      this.startNavigation()
    })
    bottomsheetref.afterDismissed().subscribe(()=>{
      onDirSub.unsubscribe();
      onNavSub.unsubscribe();
    })
  }

  // open dialog for directions form
  openDialog(obj){
    const dialogRef = this.directionDialog.open(DirectionDialog,{
      data:obj ,
      width:"100vw"
    });
    const sub = dialogRef.componentInstance.onGetDirection.subscribe((val: {pointa: object,pointb: object})=>{
      this.getDirections(val.pointa,val.pointb)
    })
    const gpsFixed = dialogRef.componentInstance.onOriginLocation.subscribe((val)=>{
      this.getMyLocation();
    })
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
    // this.dirDouble = false

    //set it up if directions pressed
    this.destinationPoint = {
      lat: pos.lat,
      lng: pos.lng,
      name: value.address
    }

    let botObj = {
      poi: { poiName: this.poiName, street: this.streetName },
      route:null
    }

    //Show details in drawer
    // this.drawer.toggle();
    
    //sho details in bottomsheet
    this.openBottomSheet(botObj);
  }

  //get directions when clicked on poi details
  poiDirection(){
    if(this.destinationPoint !== undefined){
      this.dirDouble = true;

      let obj = 
      {
        destPoint: { address: this.destinationPoint.name, geom:{ coordinates:[[this.destinationPoint.lng,this.destinationPoint.lat]] } }
      }
      // this.onDestinationSelected(obj)
      // this.destinationform.controls.destination.setValue(obj);
      // this.poiName = null
      // this.openDrawer()
      this.openDialog(obj)
    }else{
      console.log('no dest')
    }
  }

  // getDirection(){
  //   if(this.showdirbox === false){
  //     this.showsearchbox = false;
  //     this.showdirbox = true;
  //   }else{
  //     this.showsearchbox = true;
  //     this.showdirbox = false;
  //   }
  // }

  // TODO delete if not used
  // getPath(){
  //   let topoint = this.dirform.get('topoint').value;
  //   let frompoint= this.dirform.get('frompoint').value;
  //   let acoord=[];
  //   let bcoord = [];
    
    
  //   this.searchService.searchAddress(frompoint).subscribe(response=>{
  //       if(response.success === "true"){
  //         acoord= response.data[0].geom.coordinates;
  //         this.searchService.searchAddress(topoint).subscribe(response=>{
  //             if(response.success === "true"){
  //               bcoord= response.data[0].geom.coordinates;
  //               let dataobj = {
  //                 "pointa":acoord[0],
  //                 "pointb":bcoord[0]
  //               }
  //               console.log(dataobj)
  //               this.dataservice.getDirection(dataobj).subscribe((json:any)=>{
  //                 if(this.geojson !== undefined){ this.map.removeLayer(this.geojsonpath) }
  //                 this.geojsonpath = L.geoJSON(json.data).addTo(this.map);
  //                 this.map.fitBounds(this.geojsonpath.getBounds());

  //                 if(this.startMarker !== undefined){ this.map.removeLayer(this.startMarker) }
  //                 this.startMarker = L.marker(acoord[0].reverse(),{icon:this.pinMarker}).addTo(this.map);

  //                 if(this.endMarker !== undefined){ this.map.removeLayer(this.endMarker) }
  //                 this.endMarker = L.marker(bcoord[0].reverse(),{icon:this.myMarker}).addTo(this.map);

  //               });
  //             }else if (response.success === "false"){
  //               this.snackBar.open(response.message,"",{
  //                 verticalPosition: 'top',
  //                 duration: 3000
  //               });
  //             }
  //         });
  //       }else if (response.success === "false"){
  //         this.snackBar.open(response.message,"",{
  //           verticalPosition: 'top',
  //           duration: 3000
  //         });
  //       }
  //   });

  // }

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
    let details: searchPoint = {
      lat: value.geom.coordinates[0][1],
      lng: value.geom.coordinates[0][0],
      name: value.address
    }
    // this.openBottomSheet(details)
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
  // onOriginSearch(searchValue: string): void{
  //   if(searchValue === ""){
  //     this.originPoint= undefined
  //   }else{
  //     this.searchService.searchAddress(searchValue).subscribe(response=>{
  //         if(response.success === "true"){
  //           // var data = response.data.map(x => x.address)
  //           this.OriginOptions = response.data;
  //         }else if (response.success === "false"){
  //         }
  //     });
  //   }
  // }

  // onOriginSelected(value){
  //   //TODO set origin
  //   console.log(value)
  //   this.originPoint = {
  //     lat: value.geom.coordinates[0][1],
  //     lng: value.geom.coordinates[0][0],
  //     name: value.address
  //   }
  // }

  //Search desitnation 
  // onDestinationSearch(searchValue: string): void{
  //   if(searchValue === ""){

  //     this.destinationPoint = undefined 
  //   }else{
  //     this.searchService.searchAddress(searchValue).subscribe(response=>{
  //         if(response.success === "true"){
  //           // var data = response.data.map(x => x.address)
  //           this.DestinationOptions = response.data;
  //         }else if (response.success === "false"){
  //         }
  //     });
  //   }
  // }
  // onDestinationSelected(value){
  //   console.log(value)
  //   //TODO set origin
  //   this.destinationPoint= {
  //     lat: value.geom.coordinates[0][1],
  //     lng: value.geom.coordinates[0][0],
  //     name: value.address
  //   }
  // }

  //Get directions button

  getDirections(pointa,pointb){
    //Leaflet routing machine
    if(pointa !== undefined && pointb !== undefined){
      // let pointa = L.latLng(this.originPoint.lat,this.originPoint.lng);
      // let pointb = L.latLng(this.destinationPoint.lat,this.destinationPoint.lng);
      let org = L.latLng(pointa.lat,pointa.lng);
      let dest = L.latLng(pointb.lat,pointb.lng)
      
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
          [ org,dest],
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
        
        let routeDetails = {
          poi: null,
          route: {routeLength: this.routeLength, routeTime: this.routeTime}
        }
        this.openBottomSheet(routeDetails)

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

  poiShare(){}

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
    }else{
      this.locateId = this.map.locate({watch:true});
    }
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
    var osm = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 13,
    });

    this.initLeaflet();
    // this.initOSMB();

    var zoneJsonUrl = "https://raw.githubusercontent.com/kwangyel/drukmap/master/zones.geojson";
    fetch(zoneJsonUrl).then(resp=> resp.json())
      .then((data)=>{
        const zones = L.geoJSON(data);
        this.layercontrol.addOverlay(zones,"Zones")
      })

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


    var shopsUrl = "https://raw.githubusercontent.com/kwangyel/drukmap/master/Shop.geojson"
    var shop;
    fetch(shopsUrl) .then(res=>res.json()) .then((data)=>{
        shop= L.geoJSON(data,{
          onEachFeature: (feature, layer) => {
              // layer.bindPopup('<h1>'+feature.properties.Unitname+'</h1><p>Contact Number: '+feature.properties.contact+'</p><button (click)="shopDirection>')
              layer.on('click',<LeafletEvent>(e)=>{
                this.destinationPoint = {
                  lat: e.latlng.lat,
                  lng: e.latlng.lng,
                  name: feature.properties.Unitname || "unknown"
                }
                let botObj = {
                  poi: { poiName: feature.properties.Unitname || "unknown", street: ""},
                  route:null
                }
                this.openBottomSheet(botObj)
                console.log(this.destinationPoint)
              });
          },
          pointToLayer: (feature, latLng) => {
            return L.marker(latLng,{icon: this.shopMarker});
          }
        });
        var assetOverlya = {
          "Shop":shop
        }
        this.layercontrol.addOverlay(shop,"Shops");
      });

    var pharmacies = "https://raw.githubusercontent.com/kwangyel/drukmap/master/pharmacy.geojson"
    var pharm;
    fetch(pharmacies) .then(res=>res.json()) .then((data)=>{
        pharm= L.geoJSON(data,{
          onEachFeature: (feature, layer) => {
              // layer.bindPopup('<h1>'+feature.properties.Unitname+'</h1><p>Contact Number: '+feature.properties.contact+'</p><button (click)="shopDirection>')
              layer.on('click',<LeafletEvent>(e)=>{
                this.destinationPoint = {
                  lat: e.latlng.lat,
                  lng: e.latlng.lng,
                  name: feature.properties.Unitname || "unknown"
                }
                let botObj = {
                  poi: { poiName: feature.properties.Unitname || "unknown", street: ""},
                  route:null
                }
                this.openBottomSheet(botObj)
                console.log(this.destinationPoint)
              });
          },
          pointToLayer: (feature, latLng) => {
            return L.marker(latLng,{icon: this.pharmMarker});
          }
        });
        this.layercontrol.addOverlay(pharm,"Pharmacies");
      });

    
    var streeTile = L.tileLayer.wms('https://zhichar.myddns.rocks/geoserver/cite/wms', {
      layers: 'cite:street_11august',
      maxZoom: 25,
      minZoom: 13,
      format: 'image/png',
      transparent: true
    }).addTo(this.map);

    var bldgTile = L.tileLayer.wms('https://zhichar.myddns.rocks/geoserver/cite/wms', {
      layers: 'cite:building_numbers_11august',
      maxZoom: 25,
      minZoom: 13,
      format: 'image/png',
      transparent: true
    }).addTo(this.map);

    // this.search = new Search({position: 'topleft'}).addTo(this.map);
    this.map.zoomControl.setPosition("topright");

    var baseMaps = {
      "Satellite Image": this.sat,
      "OSM base map": osm, 
    };

    var overlayMaps = {
      "Buildings": bldgTile,
      "Streets": streeTile,
    }

    this.layercontrol = L.control.layers(baseMaps,overlayMaps).addTo(this.map);


    //location call backs
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

    //location found 
    this.map.on('locationfound',(e)=>{
      var radius = e.accuracy;
      this.latlng = e
      if(this.myPosition !== undefined){
        // this.map.removeLayer(this.myPosition);
        this.myPosition.setLatLng(e.latlng)
      }else{
        this.myPosition = L.marker(e.latlng,{icon: this.myMarker}).addTo(this.map);
      }
      //set origin point to current location by default
      this.stateService.originPoint.next(
        {
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          name: "Current Location"
        }
      );
      if(radius<500){
        if(this.myCircle!== undefined){
          this.map.removeLayer(this.myCircle);
        }
        this.myCircle = L.circle(e.latlng,radius).addTo(this.map);

        console.log(this.searchStore.originPoint)
      }
    });
  }


  shopDirection(loc){
    if(loc == undefined){
      return
    }
    this.destinationPoint = {
      lat: loc.lat,
      lng: loc.lng,
      name: loc.name
    }
    this.poiDirection()



  }

  startNavigation(){
      if(this.routePath !== null){
        if(this.canPrompt !== true){
          this.snackBar.open("Cannot navigate as location is not enabled.","",{
            verticalPosition: 'top',
            duration: 3000
          });
          return
        }
        this.routeStore.storage = this.routePath;
        this.router.navigate(['/navigate']);
      }else{
        this.snackBar.open("Route is not set. Error","",{
          verticalPosition: 'top',
          duration: 3000
        });
      }
  }

  // Check permission using the web api
  checkPermission(){
    (navigator as any).permissions.query({name: 'geolocation'}).then((status)=>{
      if(status.state == "denied"){
        this.permissionDialog.open(PermissionDialog)
      }else{
        this.canPrompt = true;
      }
      status.onchange = ()=>{
        if(status.state !== "denied"){
          this.canPrompt= true;
        }
      }
    })
 }
}