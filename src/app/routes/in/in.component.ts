import { Component, OnInit } from '@angular/core';
import { OGTDStore } from '../../stores/ogtd.store';
import { autorun } from 'mobx';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['./in.component.css']
})
export class InComponent implements OnInit {

  constructor(public ogtd: OGTDStore) {
  }

  ngOnInit() {
  }

}
