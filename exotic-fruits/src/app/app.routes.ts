import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddFruitComponent } from './fruit/add-fruit/add-fruit.component';
import { AuthGuard } from './guards/auth.guard';
import { AllFruitComponent } from './fruit/all-fruit/all-fruit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
// import { MainComponent } from './main/main.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  //   Start - User routing
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  //   End - User routing

  // Start - Theme routing
//   {
//     path: 'fruits',
//     children: [
//       { path: '', component: MainComponent },
//       {
//         path: ':themeId',
//         component: CurrentThemeComponent,
//         canActivate: [AuthGuard],
//       },
//     ],
//   },
   {path: 'fruits', component: AllFruitComponent},
   { path: 'add-fruit', component: AddFruitComponent, canActivate: [AuthGuard] },
   {path: 'recipes', component: RecipesComponent},
   {path: 'add-recipe', component: AddRecipeComponent , canActivate: [AuthGuard]},
  // End - Theme routing

  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },


 
];
