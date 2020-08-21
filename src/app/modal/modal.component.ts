import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  qrResultString: string;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private snackBar: MatSnackBar,
    private dataService: DataService,
    private router: Router
  ) {
    dialogRef.disableClose = true;

    dialogRef.backdropClick().subscribe(() => {
      dialogRef.disableClose = true;
    });
  }

  ngOnInit() {
  }

  onCodeResult(resultString: string) {
    this.dialogRef.close(resultString);
    navigator.vibrate(200);
  }
}
