import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Çınar';
  items = [
    { description: "Breakfast", action: "No"},
    { description: "Cinema", action: "No"},
    { description: "Sport", action: "No"},
    { description: "Studying", action: "No"},
  ];
}
