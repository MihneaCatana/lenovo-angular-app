import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingularRecipeComponent } from './pages/singular-recipe/singular-recipe.component';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
  { path: 'recipes', component: HomeComponent },
  { path: 'recipes/:id', component: SingularRecipeComponent },
  { path: 'add-recipe', component: AddFormComponent },
  { path: '**', component: Page404Component },
];
