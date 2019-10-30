import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Clases/Clases';
import { UserlistService } from '../servicios/userlist.service';
import { DebugService } from '../servicios/debug.service'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  usuarios : Usuario[];
  constructor(private servicio: UserlistService, private DebugService : DebugService) { }

  ngOnInit() {
    this.getUsuario();
  }
  
  getUsuario(): void {
    this.servicio.getUsuario()
        .subscribe(usuarios => this.usuarios = usuarios);
    console.log(this.usuarios);
    this.Debug("Servicio Userlist OK!");
    
  }
  Debug(message: string){
    this.DebugService.add(`DebugService: ${message}`);
  }
}
