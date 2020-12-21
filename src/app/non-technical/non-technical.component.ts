import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-non-technical',
  templateUrl: './non-technical.component.html',
  styleUrls: ['./non-technical.component.css']
})
export class NonTechnicalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  click(){
    this.router.navigate(['/login']);
  }

}
