import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DummyDailogComponent } from '../dummy-dailog/dummy-dailog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(public _matDialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this._matDialog.open(DummyDailogComponent, {
      width: '500px',
      height: '280px',
      disableClose: true,
      data: { name: 'abc', phone: '12354654' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
