import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { MatButton } from '@angular/material';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('sidenavButton')
  sidenavButton: MatButton;
  openSidenav$: Observable<boolean>;
  ngOnInit(): void {
    this.openSidenav$ = Observable.fromEvent<boolean>(this.sidenavButton._elementRef.nativeElement, 'click').scan(prev => !prev, false);
  }
}
