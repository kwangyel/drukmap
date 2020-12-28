import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';
import { StateService } from '../store/StateService'
import { SearchService } from '../service/search.service'

interface searchPoint{
  lat: number;
  lng: number;
  name: string;
}

@Component({
  selector: 'direction-dialog',
  templateUrl: './direction-dialog.html',
  styleUrls: ['./map.component.scss'],
})
export class DirectionDialog {
    poiName:string;
    streetName: string;
    originform: FormGroup;
    destinationform: FormGroup;
    OriginOptions = [];
    DestinationOptions = [];
    originPoint: searchPoint;
    destinationPoint: searchPoint;

    //Destination point object
    destObject: any;

    //Event emitter to pass value to main view
    onGetDirection = new EventEmitter();

    onOriginLocation = new EventEmitter();

    constructor(private dialogRef: MatDialogRef<DirectionDialog>,
        @Inject(MAT_DIALOG_DATA) public data: {destPoint: any},
        private fb : FormBuilder,
        private stateService : StateService,
        private searchService: SearchService,
        ) { }
    ngOnInit() {
        this.originform = this.fb.group({
          origin:new FormControl()
        });
        this.destinationform = this.fb.group({
            destination:new FormControl()
        });
        if(this.data !== null){
          if(this.data.destPoint !== null){
            this.destObject = this.data.destPoint;
            this.destinationform.controls.destination.setValue(this.destObject);
            this.destinationPoint = {
                lat:this.destObject.geom.coordinates[0][1],
                lng:this.destObject.geom.coordinates[0][0],
                name: this.destObject.address
            }
            console.log(this.destObject)
            console.log("setting destination")

          }
        }
        this.stateService.originPoint.subscribe((res:any)=>{
          let obj={ address: res.name, geom:{ coordinates:[[res.lng,res.lat]] } }
          this.originPoint = {
            lat:res.lat,
            lng: res.lng,
            name: res.name
          }
          console.log(obj)
          this.originform.controls.origin.setValue(obj)
        })
    }



    poiShare(){}
    getDirections(){
        if(this.originPoint !== undefined && this.destinationPoint !== undefined){
            let pointa = {
                lat: this.originPoint.lat,
                lng: this.originPoint.lng
            };
            let pointb= {
                lat: this.destinationPoint.lat,
                lng: this.destinationPoint.lng
            };

            this.onGetDirection.emit({
                pointa: pointa,
                pointb: pointb
            });
            this.dialogRef.close();

        }else{
            console.log("directions not set")
        }

    }

    getOptionText(option){
        if(option == null){
        return 
        }
        return option.address
    }
    onOriginSearch(searchValue: string): void{
        if(searchValue === ""){
          this.originPoint= undefined
        }else{
          this.searchService.searchAddress(searchValue).subscribe(response=>{
              if(response.success === "true"){
                // var data = response.data.map(x => x.address)
                this.OriginOptions = response.data;
              }else if (response.success === "false"){
              }
          });
        }
      }
    
    onOriginSelected(value){
      //TODO set origin
      console.log(value)
      this.originPoint = {
        lat: value.geom.coordinates[0][1],
        lng: value.geom.coordinates[0][0],
        name: value.address
      }
    }
  
    //Search desitnation 
    onDestinationSearch(searchValue: string): void{
      if(searchValue === ""){
  
        this.destinationPoint = undefined 
      }else{
        this.searchService.searchAddress(searchValue).subscribe(response=>{
            if(response.success === "true"){
              // var data = response.data.map(x => x.address)
              this.DestinationOptions = response.data;
            }else if (response.success === "false"){
            }
        });
      }
    }
    onDestinationSelected(value){
      console.log(value)
      //TODO set origin
      this.destinationPoint= {
        lat: value.geom.coordinates[0][1],
        lng: value.geom.coordinates[0][0],
        name: value.address
      }
    }


    // set origin to current location
  originLocation(){
    this.onOriginLocation.emit();
  }
    


}