import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.css').toString()]
})
export class AppComponent implements OnInit {
  title: string;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello from Angular!';
  }
}
