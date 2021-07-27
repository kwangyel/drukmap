import { Directive,Input,OnInit } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Role } from './model/Role';

@Directive({
  selector: '[appUserRole]'
})
export class UserRoleDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthenticationService,
    private viewContainer: ViewContainerRef
  ) { }

  userRoles: Role[];

  @Input() 
  set appUserRole(roles: Role[]) {
      if (!roles || !roles.length) {
          throw new Error('Roles value is empty or missed');
      }
      this.userRoles = roles;
  }
  ngOnInit() {
      let hasAccess = false;
      if (this.authService.isUserLoggedIn() && this.userRoles) {
          hasAccess = this.userRoles.some(r => this.authService.hasRole(r));
      }
      if (hasAccess) {
          this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
          this.viewContainer.clear();
      }
  }

}
