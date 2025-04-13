import { Component, inject, Input } from '@angular/core';
import { Recipe } from '../../interfaces/recipe.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
  // private readonly router = inject(Router);

  constructor(private router: Router) {}

  goToRecipePage() {
    this.router.navigateByUrl(`recipes/${this.recipe.id}`);
  }
}
