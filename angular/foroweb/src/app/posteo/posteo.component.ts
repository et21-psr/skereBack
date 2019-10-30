import { Component, OnInit } from '@angular/core';
import { Posteo } from '../Clases/Clases';
import { DebugService } from '../servicios/debug.service'
import { PosteoService } from '../servicios/posteo.service';

@Component({
  selector: 'app-posteo',
  templateUrl: './posteo.component.html',
  styleUrls: ['./posteo.component.css']
})
export class PosteoComponent implements OnInit {
  posteos : Posteo[];
  constructor(private servicio : PosteoService, private DebugService : DebugService) { }

  ngOnInit() {
    this.getPosteo();
  }

  getPosteo(): void {
    this.servicio.getPosteo()
        .subscribe(posteos => this.posteos = posteos);
    console.log(this.posteos);
    this.Debug("Servicio Posteos OK!");
    
  }
  Debug(message: string){
    this.DebugService.add(`DebugService: ${message}`);
  }
}
