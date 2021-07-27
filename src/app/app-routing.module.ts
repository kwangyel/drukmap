import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuard } from './service/route.guard';
import { MapComponent } from './map/map.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NavigateComponent } from './navigate/navigate.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "home", component: MapComponent}, 
  {path:"",redirectTo:"/splash", pathMatch:"full"},
  {path: "splash",component: SplashScreenComponent},
  {path: "navigate", component: NavigateComponent},
  {path: "login", component: LoginComponent},
  // {path: 'splash',component: SplashScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
