import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from '../service/data.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { SoundService } from '../service/sound.service';

export class Qrcode {
  qr_code_id: number;
  sub_zone_id: number;
  user_id: number;
  household_detail_id: number;
  lat: number;
  lng: number;
  accuracy: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  qrcode: Qrcode;
  longitude: number;
  latitude: number;
  accuracy: number;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private soundService: SoundService
  ) {
    this.qrcode = new Qrcode();
  }

  ngOnInit() {}

  redirect(path) {
    sessionStorage.setItem('transactionType', 'registration');
    this.router.navigate([path]);
  }

  update() {
    sessionStorage.setItem('transactionType', 'update');
    this.router.navigate(['map']);
  }

  scan() {
    this.getLocation();
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataService.validateQRCode('scan', result).subscribe(response => {
        this.soundService.successBeep();
        if (response.status_code === 'ACTIVE') {
          if (response.data.building_id === 0) {
            const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
              data: {
                title: 'Alert!',
                message: 'This QR Code is not associated with a building, please select a building.'
              }
            });
            confirmDialog.afterClosed().subscribe(confirmResult => {
              if (confirmResult) {
                sessionStorage.setItem('transactionType', 'update');
                sessionStorage.setItem('qrUUID', result);
                this.router.navigate(['map']);
              }
            });

            this.qrcode.qr_code_id = response.qr_code_id;
            this.qrcode.sub_zone_id = Number(sessionStorage.getItem('zoneId'));
            this.qrcode.user_id = Number(sessionStorage.getItem('userId'));
            this.qrcode.household_detail_id = response.data.id;
            this.qrcode.lat = this.latitude;
            this.qrcode.lng = this.longitude;
            this.qrcode.accuracy = this.accuracy;
            this.dataService.postQRScan(this.qrcode).subscribe(resp => {
              console.log('QR Scan successful');
            });
          } else {
            this.qrcode.qr_code_id = response.qr_code_id;
            this.qrcode.sub_zone_id = Number(sessionStorage.getItem('zoneId'));
            this.qrcode.user_id = Number(sessionStorage.getItem('userId'));
            this.qrcode.household_detail_id = response.data.id;
            this.qrcode.lat = this.latitude;
            this.qrcode.lng = this.longitude;
            this.qrcode.accuracy = this.accuracy;
            this.dataService.postQRScan(this.qrcode).subscribe(resp => {
              this.snackBar.open('QR code successfully scanned with the current location', '', {
                duration: 5000,
                verticalPosition: 'top',
                panelClass: ['success-snackbar']
              });
            });
          }
        } else if (response.status_code === 'INVALID') {
          const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
            data: {
              title: 'Alert!',
              message: 'The QR code is invalid. Please reissue a new QR code?'
            }
          });
          confirmDialog.afterClosed().subscribe(confirmResult => {
            if (confirmResult) {
              this.router.navigate(['map']);
              sessionStorage.setItem('requestType', 'SCAN');
              sessionStorage.setItem('qrCodeId', 'NA');
              sessionStorage.setItem('transactionType', 'registration');
            }
          });
        } else if (response.status_code === 'INACTIVE') {
          const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
            data: {
              title: 'Alert!',
              message: 'Scan failed, this QR Code has not been registered with any household. Please register a new household?'
            }
          });
          confirmDialog.afterClosed().subscribe(confirmResult => {
            if (confirmResult) {
              this.router.navigate(['map']);
              sessionStorage.setItem('requestType', 'REGISTER');
              sessionStorage.setItem('qrCodeId', response.qr_code_id);
              sessionStorage.setItem('transactionType', 'registration');
            }
          });
        } else {
          this.snackBar.open('QR Code scan failed, please try again.', '', {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      }, err => {
        this.soundService.failureBeep();
        this.snackBar.open('QR Code scan failed, please try again.', '', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      });
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
