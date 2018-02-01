import { Component, OnInit } from '@angular/core';
import { sidebarRouteNames, RouterStore } from '../../stores/router.store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public list = Object.keys(sidebarRouteNames).reduce((list, key) => {
    list.push({
      name: sidebarRouteNames[key],
      url: key,
    });
    return list;
  }, []);
  public liist = [
    {
      name: 'Next actions',
    },
    {
      name: 'In basket',
    },
    {
      name: 'Projects',
    },
    {
      name: 'Incubating',
    },
    {
      name: 'Someday/Maybe',
    },
    {
      name: 'Waiting for',
    },
  ];
  constructor(public router: RouterStore) { }
  hello() {
    console.log('hello');
  }

  ngOnInit() {
  }

}
