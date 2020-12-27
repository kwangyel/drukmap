import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'direction-dialog',
  templateUrl: './direction-dialog.html',
  styleUrls: ['./map.component.scss']
})
export class DirectionDialog {
    poiName:string;
    streetName: string;

    constructor(private dialogRef: MatDialogRef<DirectionDialog>,
        @Inject(MAT_DIALOG_DATA) public data: {poiName: string,street: string}) { }
    ngOnInit() {
        this.poiName = this.data.poiName;
        this.streetName = this.data.street;
    }


}