import { Component } from '@angular/core';
import { bodyComponent } from '../body/body';

@Component({
  selector: 'app-home',
  imports: [bodyComponent],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class homeComponent {

}
