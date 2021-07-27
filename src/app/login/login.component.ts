import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private authService: AuthenticationService 
    ) { }

  ngOnInit() {
  }
  onLogin(event:any){
    console.log("test");
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    // if(event.target.email.value === "admin" && event.target.password.value === "123"){
    //   this.router.navigate(['/home']);
    // }
    if(this.authService.validateLogin(event.target.email.value,event.target.password.value)){
      this.router.navigate(['/home']);
    }
  }

}
