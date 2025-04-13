import { Component } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  recipes: Recipe[];
  dummyRecipes!: Recipe[];
  errorMessage: any;
  isMobile = false;

  constructor(recipesService: RecipesService) {
    this.recipes = recipesService.recipes;
    recipesService.getRecipes().subscribe({
      next: (response) => {
        this.dummyRecipes = response.recipes;
      },
      error: (err) => {
        console.log('test');
        this.errorMessage = err;
      },
    });
  }
}
