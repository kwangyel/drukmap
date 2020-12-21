import { Component, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../service/data.service';
import { MatDrawer} from '@angular/material/sidenav';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';
import { SearchService } from '../service/search.service';
import 'leaflet-routing-machine';
import 'lrm-graphhopper';
import * as turf from '@turf/turf';
import { lineString } from '@turf/turf';

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

export class Route {
  //Class variables
  route: any;
  currentLegIndex: number;
  legDistanceRemaining: number;
  currentBearing : number;
  bearingAfter = null;
  bearingAfterIndex: number;

  constructor(currentRoute){
    this.route = currentRoute;
    this.currentLegIndex = 0;
    this.initBearing()
  }
  
  // class methods

  //initialize bearing with bearing of starting leg
  initBearing(){
    let pointa = turf.point([this.route.coordinates[0].lng,this.route.coordinates[0].lat])
    let index = this.route.instructions[1].index
    let pointb = turf.point([this.route.coordinates[index].lng,this.route.coordinates[index].lat])
    this.currentBearing = turf.bearing(pointa,pointb,{final: true})
  }

  //increment Index when maneuver is complete
  incrementIndex(){
    if(this.route.instructions.length > this.currentLegIndex + 1){
      this.currentLegIndex++
      return true
    }
    return false
  }
  // Get current leg instruction
  getCurrentLegInstruction(){
    if(this.route.instructions.length > this.currentLegIndex){
      return this.route.instructions[this.currentLegIndex]
    }
    return null;
  }

  //get Starting coordinate of next leg
  getNextStartPosition(){
    if(this.route.instructions.length > (this.currentLegIndex + 1)){
      var index = this.route.instructions[this.currentLegIndex + 1].index
      return this.route.coordinates[index]
    }
    return null;
  }

  //Get next leg instruction
  getNextLegInstruction(){
    if(this.route.instructions.length > (this.currentLegIndex + 1)){
      return this.route.instructions[this.currentLegIndex + 1]
    }
    return null;
  }

  //get end point of current instruction
  getEndIndexCurrentInstruction(){
    if(this.route.instructions.length > (this.currentLegIndex + 1)){
      return this.route.instructions[this.currentLegIndex + 1].index
    }
    return null;
  }

  //get end point of next instruction
  getEndIndexNextInstruction(){
    if(this.route.instructions.length > (this.currentLegIndex + 2)){
      return this.route.instructions[this.currentLegIndex + 2].index
    }
    return null;
  }

  //Get current bearing
  getCurrentBearing(){
    var currInst= this.getCurrentLegInstruction()
    var startIndex = currInst.index
    var currentIndexEnd = this.getEndIndexCurrentInstruction()
    if(startIndex !== null && currentIndexEnd !== null){
      var pointa = turf.point([this.route.coordinates[startIndex].lng,this.route.coordinates[startIndex].lat])
      var pointb = turf.point([this.route.coordinates[currentIndexEnd].lng,this.route.coordinates[currentIndexEnd].lat])
      this.bearingAfter = turf.bearing(pointa,pointb,{final: true})
      return this.bearingAfter
    }
    return null
    return this.currentBearing
  }

  //get bearing after maneuver
  getNextBearing(){
    var nextIndexEnd = this.getEndIndexNextInstruction()
    var currentIndexEnd = this.getEndIndexCurrentInstruction()
    if(nextIndexEnd !== null && currentIndexEnd !== null){
      var pointa = turf.point([this.route.coordinates[currentIndexEnd].lng,this.route.coordinates[currentIndexEnd].lat])
      var pointb = turf.point([this.route.coordinates[nextIndexEnd].lng,this.route.coordinates[nextIndexEnd].lat])
      this.bearingAfter = turf.bearing(pointa,pointb,{final: true})
      return this.bearingAfter
    }
    return null
  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
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
  dirform: FormGroup;
  startMarker: L.Marker;
  endMarker: L.Marker;
  sat: any;
  routePath: Route;
  voices: any;

  //TO control the instruction given to exaclty once
  isInstructionGiven = false;

  currentRoute = null;
  stPT
  snPT


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

  pinMarker = L.icon({
    iconUrl: 'assets/marker-icon.png',
    iconSize: [20,30]
  })

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private searchService : SearchService,
    private dataservice: DataService,
    private fb : FormBuilder,
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
    this.loadVoices();
  }

  //to change voice. Browsers load it async so need to set it on an event
  loadVoices(){
    window.speechSynthesis.onvoiceschanged = ()=> {
      this.voices = window.speechSynthesis.getVoices();
    };
  }

  reactiveForm(){
    this.searchform = this.fb.group({
      address:[]
    })
    this.dirform = this.fb.group({
      frompoint:[],
      topoint:[]
    })
  }

  //convert all to pascal case. Not needed as of now since fuzzy string is taking care of the matching
  convertPascal(ss:String){
    return ss.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    ); 
  }

  //goes to xy coordinate on the map and marks with marker and zoom to that place
  gotoplace(coord){
    let lng = coord[0][0];
    let lat = coord[0][1];
    if(this.gotoPlaceMarker !== undefined){
      this.map.removeLayer(this.gotoPlaceMarker);
    }
    this.gotoPlaceMarker=L.marker([lat,lng],{icon: this.myMarker}).addTo(this.map);
    this.map.setView([lat,lng],16);
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
  onFromChange($event){
    let frompoint = this.dirform.get('frompoint').value;
    this.searchService.searchAddress(frompoint).subscribe(response=>{
        if(response.success === "true"){
          this.frompoints= response.data;
          this.drawer.open();
        }else if (response.success === "false"){
          this.snackBar.open(response.message,"",{
            verticalPosition: 'top',
            duration: 3000
          });
        }
    });
  }
  changefrompoint(address){
    this.dirform.patchValue({
      frompoint:address
    });
    this.frompoints = [];
  }
  changetopoint(address){
    this.dirform.patchValue({
      topoint:address
    });
    this.topoints = [];
  }

  onToChange($event){
    let toPoint= this.dirform.get('topoint').value;
    this.searchService.searchAddress(toPoint).subscribe(response=>{
        if(response.success === "true"){
          this.topoints= response.data;
          this.drawer.open();
        }else if (response.success === "false"){
          this.snackBar.open(response.message,"",{
            verticalPosition: 'top',
            duration: 3000
          });
        }
    });
  }
  //search the given address in the DB. Might need to move the state to the store if possible.
  searchLocation(){
    let address = this.searchform.get('address').value;
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

  initOSMB(){
    var osmbuildings = new OSMBuildings({ container: 'osmb', position: { latitude: 27.4712, longitude: 89.64191}, zoom: 18, minZoom: 10, tilt:40,
    rotation: 300,
    effects: ['shadows'],
    maxZoom: 20 });


    // osmbuildings.addMapTiles('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    osmbuildings.addMapTiles('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}');

    osmbuildings.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');

    osmbuildings.on('loadfeature', function(feature) {
      console.log("feature:",feature);
      var height= parseInt(feature.detail.properties.height);
      var color=null;
      if(height<1){
        color="red";
      }
      else{
        color="green";
      }
      feature.detail.properties.color=color;

      return feature;
    })

    osmbuildings.on('pointerup', e => {
      if (!e.features) {
        osmbuildings.highlight(feature => {});
        return;
      }

      const featureIdList = e.features.map(feature => feature.id);
      osmbuildings.highlight(feature => {
        if (featureIdList.indexOf(feature.id) > -1) {
          return '#0ffc03';
        }
      });
    });
  }

  initLeaflet(){
    this.map = L.map('map',{
      center:[27.4712,89.64191],
      zoom: 13,
      maxZoom: 20,
      layers: [this.sat]
    });
  }
  toggle3d($event){
    if($event.target.checked == true){
      this.show2d = false
      this.show3d = true
    }else{
      this.show3d = false
      this.show2d = true
    }
  }

  renderMap() {
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

    this.initLeaflet();
    this.initOSMB();


    //Leaflet routing machine
    var routing = L.Routing.control({
      router: new L.Routing.GraphHopper(undefined , {
        serviceUrl: 'https://zhichar.myddns.rocks/gh/route'
      }),
      showAlternatives: true,
      // routeWhileDragging: true,
      addWaypoints: false,
      
      plan: L.Routing.plan(
        //set origin destination here
        [ L.latLng(27.476714, 89.637408), L.latLng(27.430412, 89.647060) ],
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
              marker = L.marker(waypoint.latLng) 
            }
            return marker;
          }
        }
      )

    }).addTo(this.map);


    //The routing object
    // initialize the routng and navigation interface from here

    //On route found this is triggered
    routing.on('routesfound',(e)=>{
      //TODO this.currentRoute may be redundant remove after review
      this.currentRoute = e.routes[0];
      console.log(this.currentRoute);

      //testgin updateRouteFunction
      let position:ll = {
        lat:27.476837,
        lng:89.637161
      }
       
      //assigning to new route path class
      this.routePath = new Route(this.currentRoute);

      // this.updateRoute(position)
    })


    this.map.on('click',<LeafletMouseEvent>(e)=>{
    //TODO: show and hide details of place on map click
      // console.log(e.latlng)

      //TODO testing purpose remove later or when you figure out how to mock route locations
      this.updateRoute(e.latlng)
    })

    // this.map = L.map('map',{
    //   center:[27.4712,89.64191],
    //   zoom: 13,
    //   maxZoom: 20,
    //   layers: [sat]
    // });

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
      "Satellite Image": this.sat,
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


    let postbody = {
      "a":[123,12],
      "b":[1,1]
    }
  

    

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


  startNavigation(){

      if(this.currentRoute !== null){
        let coordinates = this.currentRoute.coordinates.map(x => [x.lat,x.lng]);
        let ls = turf.lineString(coordinates);

        //TODO: this will be the location update points
        // var pt = turf.point([e.latlng.lat,e.latlng.lng]);
        // if(this.stPT !== undefined){
        //   this.stPT.setLatLng(new L.LatLng(e.latlng.lat,e.latlng.lng));
        //   // stPT = null;
        // }else{
        //   this.stPT = L.marker([e.latlng.lat,e.latlng.lng],{icon: this.redMarker}).addTo(this.map);
        // }

        //snaped point on line
        // var snapped = turf.nearestPointOnLine(ls,pt,{units:'meters'});
        // if(snapped.properties.dist * 100 < 30){
        //   if(this.snPT !== undefined ){
        //     this.snPT.setLatLng(new L.LatLng(snapped.geometry.coordinates[0],snapped.geometry.coordinates[1]));
        //   }else{
        //     this.snPT = L.marker([snapped.geometry.coordinates[0],snapped.geometry.coordinates[1]]).addTo(this.map);
        //   }
        // }
        // console.log(snapped)

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
