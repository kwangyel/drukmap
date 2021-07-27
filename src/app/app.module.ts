import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatBottomSheetModule,
  MatGridListModule,
  MatDialogModule,
  MatChipsModule,
  MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
  MatSnackBarModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MapComponent } from './map/map.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NavigateComponent } from './navigate/navigate.component';
import { BottomSheet } from './map/bottomSheet.component';
import { DirectionDialog } from './map/directionDialog.component';
import { PermissionDialog } from './map/permissionDialog.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserRoleDirective } from './user-role.directive';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BottomSheet,
    DirectionDialog,
    PermissionDialog,
    SplashScreenComponent,
    NavigateComponent,
    LoginComponent,
    AdminComponent,
    UserRoleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatListModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[BottomSheet,DirectionDialog,PermissionDialog]
})
export class AppModule { }
