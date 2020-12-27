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

    constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheet>,@Inject(MAT_BOTTOM_SHEET_DATA) public data: {poiName: string,street: string}) { }
    ngOnInit() {
        this.poiName = this.data.poiName;
        this.streetName = this.data.street;
    }
    poiDirection(){
      this.onDirection.emit("direction");
      this._bottomSheetRef.dismiss();
    }


}