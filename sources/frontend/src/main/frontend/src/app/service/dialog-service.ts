import { MatConfirmDialogComponent } from './../mat-confirm-dialog/mat-confirm-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg){
   return this.dialog.open(MatConfirmDialogComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: "100px" },
      data :{
        message : msg
      }
    });
  }
}