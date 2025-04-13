import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singular-recipe',
  imports: [],
  templateUrl: './singular-recipe.component.html',
  styleUrl: './singular-recipe.component.scss',
})
export class SingularRecipeComponent {
  readonly router = inject(Router);
  readonly activatedRouter = inject(ActivatedRoute);

  constructor() {
    console.log(this.router.url);
    console.log(this.activatedRouter.snapshot.paramMap.get('id'));
  }
}
