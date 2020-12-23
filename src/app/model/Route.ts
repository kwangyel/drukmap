import * as turf from '@turf/turf';

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