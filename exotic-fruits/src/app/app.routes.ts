import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddFruitComponent } from './fruit/add-fruit/add-fruit.component';
import { AuthGuard } from './guards/auth.guard';
import { AllFruitComponent } from './fruit/all-fruit/all-fruit.component';
import { RecipesComponent } from './recipes/recipes.component'


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

   {path: 'fruits', component: AllFruitComponent},
   { path: 'add-fruit', component: AddFruitComponent, canActivate: [AuthGuard] },
   {path: 'recipes', component: RecipesComponent},
  

  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },


 
];
