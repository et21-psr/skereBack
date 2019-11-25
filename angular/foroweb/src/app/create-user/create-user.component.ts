import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService} from '../servicios/authservice.service';
import { Usuario } from '../Clases/Clases';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private authService : AuthserviceService,private router : Router) { }

  ngOnInit() {
  }

  onRegister(form):void{
    this.authService.register(form.value).subscribe((res => {
      this.router.navigateByUrl('/home');}))
  }
}
