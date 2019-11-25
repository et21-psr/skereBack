import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../servicios/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private servicio: AuthserviceService) { }

  ngOnInit() {
  }

  logout(){
    this.servicio.logout();
    
  }

}
