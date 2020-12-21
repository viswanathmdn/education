import { Component, OnInit } from '@angular/core';
import{NavigationStart, Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){
    this.router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
        if(event['url']=='/login')
        this.show_footer = false
      }  else{
        this.show_footer = true
      }
    })
  }
  show_footer = false
  ngOnInit(): void {

  
  }
  title = 'Education';
}
