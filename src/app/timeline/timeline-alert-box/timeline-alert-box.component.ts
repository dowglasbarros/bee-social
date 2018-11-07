import { Component, OnInit } from '@angular/core';

const ALERTS = [
  {
    "from": "Avanade",
    "description": "Dispensados do trabalho hoje." 
  }
];

@Component({
  selector: 'app-timeline-alert-box',
  templateUrl: './timeline-alert-box.component.html',
  styleUrls: ['./timeline-alert-box.component.scss']
})
export class TimelineAlertBoxComponent implements OnInit {

  alerts = ALERTS;

  constructor() { }

  ngOnInit() {
  }

}
