import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;

  patteren = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.pattern(this.patteren)]
    });
  }

  formErrors = {
    'userName': "User name required",
    'email': "Email required",
    'password': "Password must match the creteria,\
  should be one Upper case,\
  should be one lower case,should be one number and one special charecter."
  }

  ngOnInit() {
  }

  register() {
    console.log(this.registerForm.value);


  }

}
