import * as turf from '@turf/turf';

export class RouteProgress {
  //Class variables
  // need to be set as path[0] since the path returned by graphhopper is an array
  path: any;
  currentLegIndex: number;
  legDistanceRemaining: number;

  currentBearing : number;
  nextBeargin= null;

  constructor(routePath){
    this.path = routePath;
    this.currentLegIndex = 0;
  }


  //increment Index when maneuver is complete
  incrementIndex(){
    if(this.path.instructions.length > (this.currentLegIndex + 1)){
      this.currentLegIndex++
      return true
    }
    return false
  }

  // Get current leg instruction
  getCurrentLegInstruction(){
    if(this.path.instructions.length > this.currentLegIndex){
      return this.path.instructions[this.currentLegIndex]
    }
    return null;
  }

  // Get path geom of the current leg
  getCurrentLegGeom(){
    if(this.path.instructions.length > this.currentLegIndex){
      let a = this.path.instructions[this.currentLegIndex].interval[0]
      let b = this.path.instructions[this.currentLegIndex].interval[1] + 1
      return this.path.points.coordinates.slice(a,b)
    }
    return null;
  }

  //Get next leg instruction
  getUpcomingLegInstruction(){
    if(this.path.instructions.length > (this.currentLegIndex + 1)){
      return this.path.instructions[this.currentLegIndex + 1]
    }
    return null;
  }

  // get upcoming maneuver point
  getUpcomingManeuverPoint(){
    if(this.path.instructions.length > this.currentLegIndex){
      let b = this.path.instructions[this.currentLegIndex].interval[1]
      return this.path.points.coordinates[b]
    }
    return null;
  }

  //Get current bearing
  getCurrentBearing(){
    if(this.path.instructions.length > this.currentLegIndex){
      let a = turf.point(this.path.points.coordinates[this.path.instructions[this.currentLegIndex].interval[0]])
      let b = turf.point(this.path.points.coordinates[this.path.instructions[this.currentLegIndex].interval[1]])
      return turf.bearing(a,b,{final:true})
    }
    return null;
  }

  //get bearing after maneuver
  getUpcomingBearing(){
    if(this.path.instructions.length > (this.currentLegIndex + 1)){
      let a = turf.point(this.path.points.coordinates[this.path.instructions[this.currentLegIndex + 1].interval[0]])
      let b = turf.point(this.path.points.coordinates[this.path.instructions[this.currentLegIndex + 1].interval[1]])
      return turf.bearing(a,b,{final:true})
    }
    return null;
  }
}