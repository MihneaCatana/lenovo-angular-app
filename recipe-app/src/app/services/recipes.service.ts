import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: '1',
      name: 'Classic Margherita Pizza',
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
      tags: ['Pizza', 'Italian'],
      prepTimeMinutes: 20,
    },
    {
      id: '2',
      name: 'Salad',
      image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
      tags: ['Healthy'],
      prepTimeMinutes: 20,
    },
    {
      id: '3',
      name: 'Cookies',
      image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
      tags: ['Sweet', 'Dough'],
      prepTimeMinutes: 20,
    },
  ];

  constructor(readonly http: HttpClient) {}

  getRecipes() {
    return this.http.get<{ recipes: Recipe[] }>(
      'https://dummyjson.com/recipes'
    );
  }

  getSingleRecipe(id: number) {
    return this.http.get<Recipe>('https://dummyjson.com/recipes/' + id);
  }
}
