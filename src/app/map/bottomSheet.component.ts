import { Component, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'bottom-sheet',
  templateUrl: './bottom-sheet.html',
})
export class BottomSheet {
    poiName:string;
    streetName: string;
    onDirection = new EventEmitter();

    //start navigation
    onStartNavigation = new EventEmitter();

    // route details
    routeLength: string;
    routeTime: string;

    constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheet>,
      @Inject(MAT_BOTTOM_SHEET_DATA) public data:{
        poi:{poiName: string,street: string},
        route: {routeLength: string,routeTime: string},
      }) 
      { }
    ngOnInit() {
      if(this.data.poi !== null){
        this.poiName = this.data.poi.poiName;
        this.streetName = this.data.poi.street;
      }
      if(this.data.route !== null){
        this.routeLength = this.data.route.routeLength;
        this.routeTime = this.data.route.routeTime;
        this._bottomSheetRef.disableClose = true
        
      }
    }
    poiDirection(){
      this.onDirection.emit("direction");
      this._bottomSheetRef.dismiss();
    }
    poiShare(){

    }
    startNavigation(){
      this.onStartNavigation.emit("navigaiton");
      this._bottomSheetRef.dismiss();
    }
    closeSheet(){
      this._bottomSheetRef.dismiss();
    }


}