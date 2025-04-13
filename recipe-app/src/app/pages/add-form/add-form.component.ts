import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss',
})
export class AddFormComponent {
  input: any;
  isFormInvalid = false;
  addRecipeGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prepTimeMinutes: new FormControl(0, [
      Validators.min(0),
      Validators.required,
    ]),
    rating: new FormControl(0, [Validators.min(0), Validators.required]),
  });

  onSubmit() {
    if (this.addRecipeGroup.invalid) this.isFormInvalid = true;
    else this.isFormInvalid = false;

    console.log(this.addRecipeGroup.value);
  }
}
