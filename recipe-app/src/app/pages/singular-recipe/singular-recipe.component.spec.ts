import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularRecipeComponent } from './singular-recipe.component';

describe('SingularRecipeComponent', () => {
  let component: SingularRecipeComponent;
  let fixture: ComponentFixture<SingularRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingularRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingularRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
