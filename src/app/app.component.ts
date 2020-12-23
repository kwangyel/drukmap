import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { RouteStore } from './store/RouteStore';

export class MatMenuListItem {
  menuLinkText: string;
  menuIcon: string;
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RouteStore]
})
export class AppComponent implements OnInit {

  isUserLoggedIn: boolean;
  menuList: MatMenuListItem[] = [
    {
      menuLinkText: 'Registration',
      menuIcon: 'contacts',
      routerLink: 'register'
    },
    {
      menuLinkText: 'Scan',
      menuIcon: 'crop_free',
      routerLink: 'scan'
    },
    {
      menuLinkText: 'Change Password',
      menuIcon: 'refresh',
      routerLink: 'changepassword'
    }
  ];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private location: Location
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }

  redirect(menuItem: MatMenuListItem) {
    this.router.navigate([menuItem.routerLink]);
    this.changeDetectorRef.detectChanges();
  }
}
