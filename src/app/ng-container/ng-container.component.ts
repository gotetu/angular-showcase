import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  colorArray = ['red', 'blue', 'yellow'];
  constructor() { }

  ngOnInit(): void {
  }

}
