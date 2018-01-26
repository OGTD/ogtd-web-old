import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import { toStream } from 'mobx-utils';
import { GlobalUIStore } from './stores/globalUI.store';
import { observable, action, isObservable, autorun } from 'mobx';

import { MatButton } from '@angular/material';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(public globalUI: GlobalUIStore) {
  }

  ngOnInit(): void {
  }
}
