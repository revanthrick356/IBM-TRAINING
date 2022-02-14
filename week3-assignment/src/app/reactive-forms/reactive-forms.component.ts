import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  signUp!:FormGroup
  // userModal= new User('Revanth', 'Poludas', 'revanth@gmail.com','');

  constructor(
    ) { }

  ngOnInit(): void {

    this.signUp = new FormGroup({
      'fName' : new FormControl(null),
      'lName' : new FormControl(null),
      'email' : new FormControl(null),
      'password' : new FormControl(null),
    })
  }
  get fName():any {
    return this.signUp.get('fName');
  }
  get lName():any {
    return this.signUp.get('lName');
  }
  get email():any {
    return this.signUp.get('email');
  }
  get password():any {
    return this.signUp.get('password');
  }  
  
  onSubmit(){
    console.log(this.signUp);
  }

}
