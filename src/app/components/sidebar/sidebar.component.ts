import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public list = [
    {
      name: 'Next actions',
      id: 'next-actions'
    },
    {
      name: 'In basket',
      id: 'in'
    },
    {
      name: 'Projects',
      id: 'projects'
    },
    {
      name: 'Incubating',
      id: 'incubating'
    },
    {
      name: 'Someday/Maybe',
      id: 'someday-maybe'
    },
    {
      name: 'Waiting for',
      id: 'someday-maybe'
    },
  ];
  constructor() { }
  hello() {
    console.log('hello');
  }

  ngOnInit() {
  }

}
