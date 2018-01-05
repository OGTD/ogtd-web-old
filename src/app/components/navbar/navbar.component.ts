import { Component, OnInit } from '@angular/core';

import { GlobalUIStore } from '../../stores/global.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public globalUI: GlobalUIStore) { }

  ngOnInit() {
  }

}
