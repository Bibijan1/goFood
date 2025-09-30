import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class headerComponent {
  partnerWithUs() {
    // This function could navigate to a "Partner With Us" page or open a modal.
    // For now, it simply logs to the console.
    console.log("Partner with us clicked");
    // Example: If using Angular Router, you could navigate like this:
    // this.router.navigate(['/partner-with-us']);
  }

  signIn() {
    console.log("Sign In clicked");
    // Example: You could trigger a sign-in modal or redirect to a login page.
    // this.router.navigate(['/login']);
  }
}
function partnerwithus() {
  throw new Error('Function not implemented.');
}

