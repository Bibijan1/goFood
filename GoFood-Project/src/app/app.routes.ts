import { Routes } from '@angular/router';
import { homeComponent } from './home/home';
import { goFoodCorporationComponent } from './go-food-corporation/go-food-corporation';
import { SignInAuthComponent } from './sign-in-auth/sign-in-auth';

export const routes: Routes = [
    { path: '', component: homeComponent },
    { path: 'goFood-corporation', component: goFoodCorporationComponent },
    { path: 'signIn', component: SignInAuthComponent }
];
