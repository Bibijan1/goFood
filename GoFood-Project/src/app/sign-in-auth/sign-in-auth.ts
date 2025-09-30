import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in-auth.html',
  styleUrls: ['./sign-in-auth.css']
})
export class SignInAuthComponent {
  email: string = '';
  password: string = '';

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
