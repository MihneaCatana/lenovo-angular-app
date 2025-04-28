import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../interfaces/recipe.interface';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  binding: any;

  constructor(readonly recipesService: RecipesService) {}

  addRecipeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prepTimeMinutes: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
    image: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.addRecipeForm.valid) {
      const formValue = this.addRecipeForm.value;

      this.recipesService.addDbRecipe(formValue as Omit<Recipe, 'id'>);
    } else console.error('FORM IS NOT VALID');
  }
}
