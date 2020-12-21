import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  click(){
    this.router.navigate(['/login']);
  }

}
