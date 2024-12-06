import { Component, OnInit } from '@angular/core';
import { Recipe } from '../types/recipes';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = []; 
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    
    this.apiService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
      this.isLoading = false;
    });
  }
}
