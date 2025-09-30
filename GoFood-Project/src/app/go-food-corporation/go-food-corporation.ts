import { Component } from '@angular/core';

@Component({
  selector: 'app-go-food-corporation',
  imports: [],
  standalone: true,
  templateUrl: './go-food-corporation.html',
  styleUrl: './go-food-corporation.css'
})
export class goFoodCorporationComponent {
  constructor() {
    console.log("GoFood Corporation works!");
  }

}
