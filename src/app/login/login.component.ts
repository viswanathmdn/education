import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _routerService: Router) { }

  ngOnInit() {
  }

  userName = "viswanath"
  password = "viswa@123"
  errMsg = ""
  login(event: NgForm) {
    console.log(event.value)

    if (event.value.userName === this.userName) {
      if (event.value.password === this.password) {
        this._routerService.navigate(['/home']);
      } else {
        this.errMsg = "Invalid credentials"
      }
    } else {
      this.errMsg = "Invalid credentials"
    }

    //   if(this.userName == null || this.userName == ""){
    //     console.log("user name is required");
    //   }
    //   else { 
    //   this._routerService.navigate(['/home']);
    // }

  }
}