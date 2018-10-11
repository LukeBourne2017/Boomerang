import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-bar',
  templateUrl: './console-bar.component.html',
  styleUrls: ['./console-bar.component.scss']
})
export class ConsoleBarComponent implements OnInit {

  public links: string[] = [
    'Rent',
    'Buy',
    'PS4',
    'Xbox One',
    'Switch',
    'Xbox 360',
    'PS3',
    'WII U',
    'WII',
    'DS',
    '3DS',
    'PS Vita'
  ];

  constructor() { }

  ngOnInit() {
  }

}
