import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../servicios/authservice.service';
import { Usuario } from '../Clases/Clases';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthserviceService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form): void{
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/home');
    })
  }

}
