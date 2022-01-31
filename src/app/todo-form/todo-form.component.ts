import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    email2: new FormControl(''),
    email3: new FormControl(''),
    email4: new FormControl(''),
    email5: new FormControl('')
  })
  form2 = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    email2: new FormControl(''),
    email3: new FormControl(''),
    email4: new FormControl(''),
    email5: new FormControl('')
  })
  form3 = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    email2: new FormControl(''),
    email3: new FormControl(''),
    email4: new FormControl(''),
    email5: new FormControl('')
  })
}
