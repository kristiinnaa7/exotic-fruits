import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { HomeComponent } from '../home/home.component';
import { AllFruitComponent } from '../fruit/all-fruit/all-fruit.component';
import { AddFruitComponent } from "../fruit/add-fruit/add-fruit.component";
import { RecipesComponent } from '../recipes/recipes.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, AllFruitComponent, AddFruitComponent, RecipesComponent, AddRecipeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) {}
}
