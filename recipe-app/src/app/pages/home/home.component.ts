import { Component } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { Recipe } from '../../interfaces/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { FormsModule } from '@angular/forms';
import { database as db } from '../../db/db';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  recipes: Recipe[] = [];
  searchValue = '';
  dummyRecipes!: Recipe[];
  filteredRecipes!: Recipe[];
  dbRecipes!: Recipe[];
  errorMessage: any = '';

  constructor(recipesService: RecipesService) {
    this.recipes = recipesService.recipes;
    try {
      recipesService.getAllRecipes().subscribe({
        next: (response) => {
          console.log(response);
          this.filteredRecipes = response.recipes;
          this.dummyRecipes = response.recipes;
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.message;
        },
      });
    } catch (error) {
      this.errorMessage = error;
    }
    db.subscribeQuery({ recipes: {} }, (res) => {
      if (res.data) {
        this.dbRecipes = res.data.recipes;
      }
      if (res.error) {
        this.errorMessage = res.error;
      }
    });
  }

  filterValues() {
    this.filteredRecipes = this.dummyRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
