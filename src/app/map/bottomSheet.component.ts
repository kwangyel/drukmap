import { Component, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { EventEmitter } from '@angular/core';
import { share } from 'rxjs/operators';

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
        poi:{poiName: string,street: string, lat: number, lng: number},
        route: {routeLength: string,routeTime: string},
      }) 
      { }
    ngOnInit() {
        this._bottomSheetRef.disableClose = true
      if(this.data.poi !== null){
        this.poiName = this.data.poi.poiName;
        this.streetName = this.data.poi.street;
      }
      if(this.data.route !== null){
        this.routeLength = this.data.route.routeLength;
        this.routeTime = this.data.route.routeTime;
        
      }
    }
    poiDirection(){
      this.onDirection.emit("direction");
      this._bottomSheetRef.dismiss();
    }

    poiShare(){
      if(this.data.poi !==null){
        let params = new URLSearchParams();
        let option = {
          lat:this.data.poi.lat,
          lng: this.data.poi.lng,
          name: this.data.poi.poiName
        }
        for(let key in option){
          params.set(key, option[key])
        }
        let shareURl = "https://www.drukmap.bt/home?"+params.toString();
        console.log(shareURl)
        let shareObject ={
          title: "Share this location",
          url: shareURl
        }
        try{
          (navigator as any).share(shareObject)
        }catch(err){
          console.log("seeems sharing is not supported on your device")
        }

      }else{
        console.log("empty poi")
      }
    }

    startNavigation(){
      this.onStartNavigation.emit("navigaiton");
      this._bottomSheetRef.dismiss();
    }
    closeSheet(){
      this._bottomSheetRef.dismiss();
    }


}