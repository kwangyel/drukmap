import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from '../service/data.service';
import { ModalComponent } from '../modal/modal.component';
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
  id: number;
  building_id: number;
  mobile_no: string;
  total_female: string;
  total_male: string;
  total_above_60: string;
  total_below_10: string;
  emergency_contact_no: string;
  nationality: string;
  qr_code_id: string;
  user_id: number;
  _method: string;
}

@Component({
  selector: 'app-update-household',
  templateUrl: './update-household.component.html',
  styleUrls: ['./update-household.component.scss']
})
export class UpdateHouseholdComponent implements OnInit {

  updateForm: FormGroup;
  buildingId: number;
  qrId: string;
  houseHoldId: number;

  household: Household;
  disableForm = true;

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
    this.household = new Household();
  }

  ngOnInit() {
    this.buildingId = this.route.snapshot.params['id'];
    this.reactiveForms();
    this.getQRDetails();
  }

  reactiveForms() {
    this.updateForm = this.fb.group({
      mobileNoControl: ['', Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(8)])],
      totalMaleControl: ['', Validators.compose([Validators.required])],
      totalFemaleControl: ['', Validators.compose([Validators.required])],
      ageOverFiftyControl: ['', Validators.compose([Validators.required])],
      ageBelowTenControl: ['', Validators.compose([Validators.required])],
      nationalityControl: ['', Validators.compose([Validators.required])],
      emergencyMobileNoControl: ['', Validators.compose([Validators.required])]
    });
  }

  getQRDetails() {
      const qrUUID = sessionStorage.getItem('qrUUID');
      this.dataService.validateQRCode('scan', qrUUID).subscribe(response => {
        console.log(response);
        if (response.status_code === 'ACTIVE') {
          this.updateForm.controls.mobileNoControl.setValue(response.data.mobile_no);
          this.updateForm.controls.totalMaleControl.setValue(response.data.total_male);
          this.updateForm.controls.totalFemaleControl.setValue(response.data.total_female);
          this.updateForm.controls.ageOverFiftyControl.setValue(response.data.total_above_60);
          this.updateForm.controls.ageBelowTenControl.setValue(response.data.total_below_10);
          this.updateForm.controls.nationalityControl.setValue(response.data.nationality);
          this.updateForm.controls.emergencyMobileNoControl.setValue(response.data.emergency_contact_no);
          this.qrId = response.data.qr_code_id;
          this.houseHoldId = response.data.id;
          this.disableForm = false;
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
            }
          });
        } else {
          // tslint:disable-next-line: max-line-length
          this.snackBar.open('Scan failed, this QR Code has not been registered with any household. Please register it and then scan.', '', {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
        }
      }, err => {
        this.snackBar.open('QR Code scan failed, please try again.', '', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        });
      });
  }

  update() {
    this.household.mobile_no = this.updateForm.get('mobileNoControl').value;
    this.household.total_male = this.updateForm.get('totalMaleControl').value;
    this.household.total_female = this.updateForm.get('totalFemaleControl').value;
    this.household.total_above_60 = this.updateForm.get('ageOverFiftyControl').value;
    this.household.total_below_10 = this.updateForm.get('ageBelowTenControl').value;
    this.household.nationality = this.updateForm.get('nationalityControl').value;
    this.household.emergency_contact_no = this.updateForm.get('emergencyMobileNoControl').value;
    this.household.id = this.houseHoldId;
    this.household.building_id = this.buildingId;
    this.household.qr_code_id = this.qrId;
    this.household.user_id = Number(sessionStorage.getItem('userId'));
    this.household._method = 'PUT';

    console.log(JSON.stringify(this.household));
    this.dataService.postUpdateHouseHold(this.household, this.houseHoldId).subscribe(response => {
      this.snackBar.open('Household detail update has been successfully done', '', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['success-snackbar']
      });
      this.updateForm.reset();
      this.router.navigate(['dashboard']);
    }, error => {
      this.snackBar.open('Household detail update failed, please try again', '', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['error-snackbar']
      });
      this.disableForm = true;
    });
  }
}
