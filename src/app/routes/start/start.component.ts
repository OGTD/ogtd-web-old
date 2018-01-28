import { Component, OnInit } from '@angular/core';
import { OGTDStore } from '../../stores/ogtd.store';
import { RouterStore } from '../../stores/router.store';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(public ogtd: OGTDStore, public router: RouterStore) { }
  start() {
    this.ogtd.start();
    this.router.navigate('');
  }

  ngOnInit() {
  }

}
