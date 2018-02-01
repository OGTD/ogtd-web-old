import { Component, OnInit } from '@angular/core';

import { GlobalUIStore } from '../../stores/globalUI.store';
import { RouterStore } from '../../stores/router.store';
import { OGTDDatabaseService } from '../../services/ogtdDatabase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public globalUI: GlobalUIStore, public router: RouterStore, public db: OGTDDatabaseService) { }

  ngOnInit() {
  }

}
