import { Component, OnInit } from '@angular/core';

// Import input for button input
// Import output for the output when button is clicked
import {Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core'; 


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter(); // Create reference notify for output

  constructor() { }

  ngOnInit() {
  }

}