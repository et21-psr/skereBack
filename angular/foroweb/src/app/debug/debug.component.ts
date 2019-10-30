import { Component, OnInit } from '@angular/core';
import { DebugService } from '../servicios/debug.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  constructor(public DebugService: DebugService) {}


  ngOnInit() {
  }

}
