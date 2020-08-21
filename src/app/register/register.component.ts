import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { DataService } from '../service/data.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

interface Nationality {
  id: string;
  name: string;
}

export class Qrcode {
  qr_code_id: number;
  sub_zone_id: number;
  user_id: number;
  household_detail_id: number;
  lat: number;
  lng: number;
  accuracy: number;
}

export class Household {
  building_id: number;
  mobile_no: string;
  total_female: number;
  total_male: number;
  total_above_60: number;
  total_below_10: number;
  emergency_contact_no: string;
  nationality: string;
  qr_code_id: string;
  user_id: number;
  registration_flag: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  showScanner = false;
  buildingId: number;
  qrId: string;
  houseHoldId: number;
  data: Household;
  qrcode: Qrcode;

  latitude: number;
  longitude: number;
  accuracy: number;

  disableForm = true;
  displayForm = false;
  displayCamera = false;

  nationalities: Nationality[] = [
    {id: 'BHUTANESE', name: 'Bhutanese'},
    {id: 'FOREIGN NATIONAL', name: 'Foreign National'}
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.data = new Household();
    this.qrcode = new Qrcode();
  }

  ngOnInit() {
    this.buildingId = this.route.snapshot.params['id'];
    this.reactiveForms();

    const qrCodeId = sessionStorage.getItem('qrCodeId');
    if (qrCodeId === 'NA') {
      this.displayCamera = true;
    } else {
      this.qrId = qrCodeId;
      this.disableForm = false;
      this.displayForm = true;
    }
  }

  reactiveForms() {
    this.registerForm = this.fb.group({
      mobileNoControl: ['', Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(8)])],
      totalMaleControl: ['', Validators.compose([Validators.required])],
      totalFemaleControl: ['', Validators.compose([Validators.required])],
      ageOverFiftyControl: ['', Validators.compose([Validators.required])],
      ageBelowTenControl: ['', Validators.compose([Validators.required])],
      nationalityControl: ['', Validators.compose([Validators.required])],
      emergencyMobileNoControl: ['', Validators.compose([Validators.required])]
    });
  }

  triggerCamera() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataService.validateQRCode('register', result).subscribe(response => {
        console.log(response);
        if (response.status_code === 'INACTIVE') {
          this.qrId = response.qr_code_id;
          this.snackBar.open('QR code successfully scanned, please continue with registration', '', {
            duration: 5000,
            verticalPosition: 'bottom',
            panelClass: ['success-snackbar']
          });
          sessionStorage.setItem('requestType', 'REGISTRATION');
          this.disableForm = false;
          this.displayForm = true;
        } else if (response.status_code === 'ACTIVE') {
          this.snackBar.open('This QR Code is already used, please verify and try again', '', {
            duration: 5000,
            verticalPosition: 'bottom',
            panelClass: ['error-snackbar']
          });
          this.disableForm = true;
          this.displayForm = false;
        } else {
          this.snackBar.open('Invalid QR Code, please try again with a valid QR', '', {
            duration: 5000,
            verticalPosition: 'bottom',
            panelClass: ['error-snackbar']
          });
          this.disableForm = true;
          this.displayForm = false;
        }
      });
    });
  }

  register() {
    this.data.mobile_no = this.registerForm.get('mobileNoControl').value;
    this.data.total_male = this.registerForm.get('totalMaleControl').value;
    this.data.total_female = this.registerForm.get('totalFemaleControl').value;
    this.data.total_above_60 = this.registerForm.get('ageOverFiftyControl').value;
    this.data.total_below_10 = this.registerForm.get('ageBelowTenControl').value;
    this.data.nationality = this.registerForm.get('nationalityControl').value;
    this.data.emergency_contact_no = this.registerForm.get('emergencyMobileNoControl').value;
    this.data.building_id = this.buildingId;
    this.data.qr_code_id = this.qrId;
    this.data.user_id = Number(sessionStorage.getItem('userId'));
    this.data.registration_flag = sessionStorage.getItem('requestType');

    console.log(this.data);

    this.dataService.postRegistration(this.data).subscribe(response => {
      if (sessionStorage.getItem('requestType') === 'SCAN') {
        this.qrcode.qr_code_id = Number(this.qrId);
        this.qrcode.sub_zone_id = Number(sessionStorage.getItem('subZoneId'));
        this.qrcode.user_id = Number(sessionStorage.getItem('userId'));
        this.qrcode.household_detail_id = this.houseHoldId;
        this.qrcode.lat = this.latitude;
        this.qrcode.lng = this.longitude;
        this.qrcode.accuracy = this.accuracy;

        this.dataService.postQRScan(this.qrcode).subscribe(resp => {
          this.snackBar.open('Household registration has been successfully done', '', {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
          this.registerForm.reset();
        });
      } else {
        const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
          data: {
            title: 'Alert!',
            // tslint:disable-next-line: max-line-length
            message: 'Household registration has been successfully done. Continue registering household in the same building.'
          }
        });
        confirmDialog.afterClosed().subscribe(confirmResult => {
          if (confirmResult) {
            this.snackBar.open('Please continue with the registration of the same building', '', {
              duration: 5000,
              verticalPosition: 'top',
              panelClass: ['info-snackbar']
            });
            this.displayCamera = true;
            this.disableForm = true;
            this.displayForm = false;
          } else {
            this.router.navigate(['map']);
            this.snackBar.open('Please select a new building to start registering', '', {
              duration: 5000,
              verticalPosition: 'top',
              panelClass: ['info-snackbar']
            });

            this.dataService.postCompletion(this.buildingId).subscribe(res => {
              console.log('Building registration completed');
            });
          }
        });
        this.registerForm.reset();
      }

      this.disableForm = true;
      this.displayForm = false;
    }, error => {
      this.snackBar.open('Household registration failed, please try again', '', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['error-snackbar']
      });
      this.disableForm = true;
      this.displayForm = false;
    });
  }

  getLocation(): void {
    if (navigator.geolocation) {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition((position) => {
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          this.accuracy = position.coords.accuracy;
        }, error => {
          console.error('No support for geolocation');
        }, options);
    } else {
       console.error('No support for geolocation');
    }
  }
}
