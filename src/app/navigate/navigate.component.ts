import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Route } from '../model/Route';
import { RouteStore } from '../store/RouteStore';
import * as turf from "@turf/turf";

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  //map variables
  map: L.Map;
  sat: any;

  // current path
  routePath: Route;
  snPT: any;
  isInstructionGiven: any;
  voices: any;


  constructor(
    private routeStore : RouteStore
  ) { }

  ngOnInit() {
    this.sat = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      minZoom: 13,
    });
    this.renderMap();
    this.routePath = this.routeStore.storage;
    console.log(this.routePath);
    this.loadVoices();
    this.renderRoute();

  }

  //to change voice. Browsers load it async so need to set it on an event
  loadVoices(){
    window.speechSynthesis.onvoiceschanged = ()=> {
      this.voices = window.speechSynthesis.getVoices();
    };

  }

  initLeaflet(){
    this.map = L.map('navmap',{
      center:[27.4712,89.64191],
      zoom: 13,
      maxZoom: 20,
      layers: [this.sat]
    });
  }

  renderRoute(){
    let routeGeom = this.routePath.route.coordinates.map(x => [x.lat,x.lng]);
    L.polyline(routeGeom,{
      color:'blue',
      weight:3,
      opacity:0.7,
      smoothFactor:1
    }).addTo(this.map);
    console.log(routeGeom);
  }

  renderMap() {
    this.initLeaflet();
    //Leaflet routing machine
    //TODO: display for now
    // var routing = L.Routing.control({
    //   router: new L.Routing.GraphHopper(undefined , {
    //     serviceUrl: 'https://zhichar.myddns.rocks/gh/route'
    //   }),
    //   showAlternatives: true,
    //   // routeWhileDragging: true,
    //   addWaypoints: false,
      
    //   plan: L.Routing.plan(
    //     //set origin destination here
    //     [ L.latLng(27.476714, 89.637408), L.latLng(27.430412, 89.647060) ],
    //     {
    //       createMarker: function (i: number, waypoint: any, n: number) {
    //         var marker;
    //         console.log(i)
    //         if(i == 0){
    //           marker = L.marker(waypoint.latLng, {
    //             icon: L.icon({
    //               iconUrl: 'assets/marker-red.png',
    //               iconSize: [15, 15]
    //             })
    //           });
    //         }else{
    //           marker = L.marker(waypoint.latLng) 
    //         }
    //         return marker;
    //       }
    //     }
    //   )

    // }).addTo(this.map);




    this.map.on('click',<LeafletMouseEvent>(e)=>{
      //TODO testing purpose remove later or when you figure out how to mock route locations
    })

    this.map.zoomControl.setPosition("topright");

    var baseMaps = {
      "Satellite Image": this.sat,
    };

    L.control.layers(baseMaps).addTo(this.map);
  }




  //Route Processing functions

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
