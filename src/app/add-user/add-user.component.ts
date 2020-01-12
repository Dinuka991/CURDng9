import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({

        hideRequired: false,
        floatLabel: 'auto',
        firstName: [''],
        lastName: [''],
        address: ({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
        }),
    
    });
  }
}