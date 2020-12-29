import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Route } from '../model/Route';
import { RouteStore } from '../store/RouteStore';
import * as turf from "@turf/turf";
import {Router} from "@angular/router"
import { SearchService } from "../service/search.service"

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


  //Markers
  positionMarker: L.Marker;


  // icons
  blueMarker = L.icon({
    iconUrl: 'assets/mymarker.png',
    iconSize: [20, 20]
  });

  //Mock location variavles
  locationGenerator: any;
  ismocklocation=false;
  timer : any;


  //Display texts
  showInstruction;
  showDistance;


  //Display booleans
  isNavigate = false;


  //Location watcher handler id
  locationId: any;
  mapPosition: any;


  //Speech synthesis object
  speaker: any;

  //Distance stakc for off route detectiong
  distanceStack: DistanceStack;

  //Destination point
  destinationPoint: L.LatLng;


  // route geometry
  routePline: any;

  constructor(
    private routeStore : RouteStore,
    private router: Router,
    private searchService: SearchService 
  ) {
    this.distanceStack = new DistanceStack()
   }

  ngOnInit() {
    this.sat = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      minZoom: 13,
    });
    this.renderMap();
    this.routePath = this.routeStore.storage;
    if(this.routePath == null){
      // this.router.navigate(['/home']);
    }else{
      this.renderRoute();
      if(this.locationId!== undefined){
        this.map.setView(this.mapPosition.latlng,17);
      }
      this.locationId = this.map.locate({watch:true});
      this.destinationPoint = this.routePath.route.inputWaypoints[1]
      console.log("this is the destination point "+ this.destinationPoint)

    }
    this.loadVoices();
  }

  //to change voice. Browsers load it async so need to set it on an event
  loadVoices(){
    // window.speechSynthesis.onvoiceschanged = ()=> {
    //   this.voices = window.speechSynthesis.getVoices();
    // };
    this.speaker = window.speechSynthesis
    const vv = this.speaker.getVoices();
    if(vv.length !== 0){
      this.voices = vv 
      console.log("found voices")
    }else{
      return setTimeout(()=>{ this.loadVoices()},100)
    }
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
    this.routePline = L.polyline(routeGeom,{
      color:'blue',
      weight:4,
      opacity:0.8,
      smoothFactor:1
    }).addTo(this.map);
    this.map.fitBounds(this.routePline.getBounds());
    
    //Initial distance of route
    this.showDistance = Math.round(this.routePath.route.summary.totalDistance);
  }

  renderMap() {
    this.initLeaflet();

    this.map.on('click',<LeafletMouseEvent>(e)=>{
      //TODO testing purpose remove later or when you figure out how to mock route locations
    })

    this.map.zoomControl.setPosition("topright");

    var baseMaps = {
      "Satellite Image": this.sat,
    };

    L.control.layers(baseMaps).addTo(this.map);

    //setUp location call back for navigation
    this.map.on('locationfound',(e)=>{
      var accuracy = e.accuracy
      this.mapPosition = e

      if(this.isNavigate === true){
        this.updateRoute(e.latlng)
      }
    })

    this.map.on('click',<LeafletMouseEvent>(e)=>{
      if(this.isNavigate == true){
        this.updateRoute(e.latlng)

      }
    })
  }

  // Start navigating
  startNavigation(){
    //this is done to allow ios devices to play voice 
    const fakeUtt = new SpeechSynthesisUtterance()
    fakeUtt.voice = this.voices[0]
    fakeUtt.volume = 0
    fakeUtt.text = "is"

    this.speaker.speak(fakeUtt)
    // TODO get current location and process
    if(this.ismocklocation){
      this.startMockLocation()
    }else{
      // TODO get user locaiton here
      this.isNavigate = true
    }
  }

  //Stop location/mock update. Resumable
  stopNavigation(){
    //Stopping the timer object if it was used in mocked location
    if(this.timer !== undefined){
      clearInterval(this.timer);
    }
    this.isNavigate = false;
    //Clear user location update
    //TODO implement this here 
  }


  //Go back to main view
  exitNav(){
    console.log("exit called")
    if(this.timer !== undefined){
      clearInterval(this.timer);
    }
    this.router.navigate(['/'])
  }




  //location route mocker for test
  startMockLocation(){
    let coordinates = this.routePath.route.coordinates;
    this.locationGenerator = this.generateMock(coordinates)
    console.log("called")

    this.timer = window.setInterval(()=>{
      let loc = this.locationGenerator.next()
      if(loc.done == true){
        clearInterval(this.timer);
      }
      console.log(loc.value)
      this.updateRoute(loc.value)
    },1000)
  }

  *generateMock(coords){
    for(let coord of coords){
      yield coord
    }
  }


  //Route Processing functions
  updateUserLocation(location){
    //Updating the current location on the route
    if(this.snPT !== undefined ){
      this.snPT.setLatLng(new L.LatLng(location.geometry.coordinates[1],location.geometry.coordinates[0]));
    }else{
      this.snPT = L.marker([location.geometry.coordinates[1],location.geometry.coordinates[0]],{
        icon: this.blueMarker
      }).addTo(this.map);
    }
    //test to check current bearing
    // console.log("bearing"+this.routePath.getCurrentBearing());
    console.log(location)
    this.map.setView([location.geometry.coordinates[1],location.geometry.coordinates[0]],20);

  }

  updateRoute(location){
      if(this.routePath !== undefined){
        let coordinates = this.routePath.route.coordinates.map(x => [x.lng,x.lat]);
        let ls = turf.lineString(coordinates);

        let currentLocation = turf.point([location.lng,location.lat]);

        //snaped point on line
        //TODO maybe this cann be moved outside to the checkvalidLocation function. Review
        let snapped = turf.nearestPointOnLine(ls,currentLocation,{units:'meters'});
        console.log("snapped dist now: "+snapped.properties.dist)

        if(this.routePath.legDistanceRemaining < 1){
          if(this.chekcOffRoute(location)){
            //Your off route here
            console.log("You are off route. Redirecting")
            let pointa = L.latLng(location.lat,location.lng)
            let pointb = L.latLng(this.destinationPoint.lat,this.destinationPoint.lng)
            if(this.destinationPoint !== null){
              const routing = L.Routing.control({
                router: new L.Routing.GraphHopper(undefined , {
                  serviceUrl: 'https://zhichar.myddns.rocks/gh/route'
                }),
                waypoints:[pointa,pointb],
              }).addTo(this.map);
              routing.on('routesfound',(e)=>{
                var route = e.route[0]
                this.routePath = new Route(route)
                if(this.routePline !== undefined){
                  this.map.removeLayer(this.routePline)
                  console.log("removing pling")
                }
                let routeGeom = this.routePath.route.coordinates.map(x => [x.lat,x.lng]);
                this.routePline = L.polyline(routeGeom,{
                  color:'blue',
                  weight:4,
                  opacity:0.8,
                  smoothFactor:1
                }).addTo(this.map);

                console.log("new route assigned")
              })
            }else{
              console.log("destination point is null")
            }

          }
        }

        if(snapped.properties.dist < 30){
          this.calcualteLegDistanceRemaining(snapped.geometry.coordinates,snapped.properties.index)
          console.log(snapped)

          this.showDistance = Math.round(this.routePath.legDistanceRemaining) 

          //Update the user view and marker according the direction change
          this.updateUserLocation(snapped)

          if(this.routePath.legDistanceRemaining < 100){
            //TODO recite instruction exactly once here
            if(!this.isInstructionGiven){
              var instruction = this.routePath.getCurrentLegInstruction()
              var dist = Math.round(this.routePath.legDistanceRemaining);
              
              var inst = ""
              if(instruction.type == "DestinationReached"){
                inst = "You have arrived. Thank you for using druuk map. Kaa din chay";
              }else if(instruction.type == "Head" || instruction.type == "Straight"){
                if(dist == 0){
                  inst = instruction.text
                }
                inst = instruction.text + " for " + dist + " meters"
              }else{
                if(dist == 0){
                  inst = instruction.text;
                }else{
                  inst = "In " + dist + " meters " + instruction.text
                }
              }
              this.showInstruction = instruction.text;
              var utterance = new SpeechSynthesisUtterance();
              utterance.volume = 5
              utterance.text = inst
              utterance.voice = this.voices.filter(voice => voice.lang == 'en-UK')[0]

              // msg.voice = this.voices.filter(function(voice) { return voice.name == 'Google UK English Female'; })[0];
              // msg.voice = this.voices[10]
              // window.speechSynthesis.speak(msg)
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
              setTimeout(()=>{
                this.router.navigate(['/home']);
              },500)
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

      var userAngleFromTurn = null
      if(location.heading !== null){
        userAngleFromTurn = this.angleBetween(location.heading,turnAngle)
      }else{
        console.log("cant get user heading")
      }

      //if the user bearing is less than the offset allowed then chance are it might be complete but wait for distance remaining to go to zero before increasing index
      if(turnAngle <= 30){
        console.log("waiting for leg distance to end now")
        console.log(turnAngle + " current " + currentBearing + "next " + nextBearing)
        return this.routePath.legDistanceRemaining == 0;
      }else{
        //TODO this comes when the device gets the users bearing
        return userAngleFromTurn <= 30
        // return false;
      }
    }
  }

  //Helper functions
  angleBetween(anglea,angleb){
    var a = Math.abs(anglea - angleb) % 360
    return a > 180 ? 360 - a : a
  }


  //Off route detectiong
  chekcOffRoute(location){
    // location should be a raw location

    var nextInstructionPosition = this.routePath.getNextStartPosition()
    var userPosition = turf.point([location.lng,location.lat])

    if(nextInstructionPosition !== null){
      var endofLegPoint = turf.point([nextInstructionPosition.lng,nextInstructionPosition.lat])
      var distanceFromManeuver = turf.distance(endofLegPoint,userPosition,{units: 'meters'}) 

      // get stack latest point
      var top = this.distanceStack.peek()
      if(top == null){
        this.distanceStack.push(distanceFromManeuver)
      }
      if(top < distanceFromManeuver){
        this.distanceStack.push(distanceFromManeuver)
      }
      if(top > distanceFromManeuver){
        this.distanceStack.clear()
      }
      if(this.distanceStack.length() >= 3){
        return true
      }
    }
    return false
  }
}


//Stack implementation for off route check
class DistanceStack{
  data;
  top: number;
  constructor(){
    this.data = []
    this.top = 0
  }

  push(element){
    this.data[this.top] = element
    this.top = this.top + 1
  }

  pop (){
    if(this.isEmpty() == false){
      this.top = this.top - 1
      return this.data.pop()
    }
  }

  peek(){
    return this.data[this.top - 1]
  }

  length(){
    return this.top
  }

  isEmpty(){
    return this.top == 0
  }

  clear(){
    this.top = 0
    this.data = []
  }
}
