import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { trigger, transition, style, animate, state } from '@angular/animations';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { toStream } from 'mobx-utils';
import { GlobalUIStore } from './stores/globalUI.store';
import { observable, action, isObservable, autorun } from 'mobx';

import { MatButton, MatDialog } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { CaptureDialogComponent } from './components/capture-dialog/capture-dialog.component';
import { OGTDStore } from './stores/ogtd.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'captureButtonAnimation',
      [
        transition(
          ':enter', [
            style({ transform: 'translateY(100%)', opacity: 0 }),
            animate('200ms', style({ transform: 'translateY(0)', 'opacity': 1 }))
          ]
        ),
        transition(
          ':leave', [
            style({ transform: 'translateY(0)', 'opacity': 1 }),
            animate('200ms', style({ transform: 'translateY(100%)', 'opacity': 0 })),
          ]
        )
      ],
    )
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(public globalUI: GlobalUIStore, public ogtd: OGTDStore, public dialog: MatDialog) {
  }
  openCaptureDialog() {
    this.dialog.open(CaptureDialogComponent, { disableClose: true }); // the component handles closing on it's own
  }

  ngOnInit(): void {
  }
}
