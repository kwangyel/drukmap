import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { RouteGuard } from './service/route.guard';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {path: '', component: MapComponent}, 
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
