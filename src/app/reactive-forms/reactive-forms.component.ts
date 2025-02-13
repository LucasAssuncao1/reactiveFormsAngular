import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent implements OnInit{

  // private formBuilder = inject(FormBuilder);
  constructor(private formBuilder: FormBuilder) {}


  public cadastroForm: FormGroup = this.formBuilder.group({
    firsName: ['', Validators.required],
    lastName: [''],
  })

  public submitForm(){
    console.log(this.cadastroForm.value);
    console.log(this.cadastroForm.value.firsName);
    console.log(this.cadastroForm.value.lastName);
  }

  ngOnInit(): void {
  }
}
