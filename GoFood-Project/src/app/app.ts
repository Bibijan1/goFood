import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './header/header';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, headerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GoFood-Project');
}
