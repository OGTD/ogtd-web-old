import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { OGTDStore } from '../../stores/ogtd.store';

@Component({
  selector: 'app-capture-dialog',
  templateUrl: './capture-dialog.component.html',
  styleUrls: ['./capture-dialog.component.css']
})
export class CaptureDialogComponent implements OnInit, OnDestroy {
  hasChanges = false;
  backdropClickSubscription: Subscription;
  constructor(public dialogRef: MatDialogRef<CaptureDialogComponent>, public ogtdStore: OGTDStore) {
  }

  ngOnInit() {
    this.backdropClickSubscription = this.dialogRef.backdropClick().subscribe(this.close);
  }
  ngOnDestroy() {
    this.backdropClickSubscription.unsubscribe();
  }

  close = () => {
    if (!this.hasChanges || confirm('Are sure you want to close? Your changes will be lost')) {
      this.dialogRef.close();
    }
  }
  save(content) {
    this.ogtdStore.addToBasket(content);
  }
}
