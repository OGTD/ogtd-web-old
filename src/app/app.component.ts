import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { toStream } from 'mobx-utils';
import { GlobalUIStore } from './stores/global.store';
import { observable, action, isObservable } from 'mobx';

import { MatButton } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit {
  title = 'app';
  public sidebarOpen$: Observable<boolean>;
  constructor(public globalUI: GlobalUIStore) {
    this.sidebarOpen$ = Observable.from(toStream(() => globalUI.test));
  }

  ngOnInit(): void {
  }
}
