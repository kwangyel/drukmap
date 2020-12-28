import { Injectable } from "@angular/core";
import { Subject } from "rxjs";



interface searchPoint{
  lat: number;
  lng: number;
  name: string;
}
const initialSearchPoint: searchPoint = {
    lat: undefined,
    lng: undefined,
    name: undefined
}


@Injectable({providedIn: 'root'})

export class StateService{
    
    originPoint = new Subject();

}