import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Store } from '@ngrx/store';
import { formActions } from '../state/form/form-action';




@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, CommonModule, NgIf, RouterModule],
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  providers: [DataService]
})
export class FormsComponent implements OnInit {
  userForm : FormGroup;


  ngOnInit(): void {
    // const savedInput = this.dataService.getItem('userInfo');
  //   if (savedInput) {
  //   this.userForm.patchValue(savedInput);
  // }
  }

   constructor(private fb: FormBuilder, private dataService: DataService, private store: Store) {
    this.userForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required) 
    });


  }

  saveData(key: string, value: string) {
    // this.dataService.setItem('userInfo', (this.userForm.value));

    console.log(this.userForm.value);
  }


  onSubmit() {
    if (this.userForm.valid) {
      this.store.dispatch(formActions.step1({payLoad: this.userForm.value}));
      console.log(this.userForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}



  

  


