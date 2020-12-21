import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  click(){
    console.log('dfghj')
    this.router.navigate(['/login']);
  }
  clickT(){
    this.router.navigate(['/technical']);
  }
  clickN(){
    this.router.navigate(['/non-technical']);
  }

}
