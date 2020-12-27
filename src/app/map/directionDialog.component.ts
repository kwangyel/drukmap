import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'direction-dialog',
  templateUrl: './direction-dialog.html',
  styleUrls: ['./map.component.scss']
})
export class DirectionDialog {
    poiName:string;
    streetName: string;
    originform: FormGroup;
    destinationform: FormGroup;
    OriginOptions = [];
    DestinationOptions = [];

    constructor(private dialogRef: MatDialogRef<DirectionDialog>,
        @Inject(MAT_DIALOG_DATA) public data: {poiName: string,street: string},
        private fb : FormBuilder,
        ) { }
    ngOnInit() {
        this.poiName = this.data.poiName;
        this.streetName = this.data.street;
        this.originform = this.fb.group({
        origin:[]
        });
        this.destinationform = this.fb.group({
        destination:new FormControl()
        });
    }
    poiShare(){}
    onOriginSelected(){}
    onDestinationSelected(){}
    getOptionText(){}
    onOriginSearch(){}
    onDestinationSearch(){}
    getDirections(){}

    


}