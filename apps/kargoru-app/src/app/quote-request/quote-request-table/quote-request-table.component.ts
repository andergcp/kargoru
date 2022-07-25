import { Component } from '@angular/core';

@Component({
  selector: 'kargoru-quote-request-table',
  templateUrl: './quote-request-table.component.html',
  styleUrls: ['./quote-request-table.component.css']
})
export class QuoteRequestTableComponent {
  /** Based on the screen size, switch from standard to one column per row */
  card = { title: 'Mis cotizaciones', cols: 2, rows: 1 };
  
  constructor() {}
}
