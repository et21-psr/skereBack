import { Component, OnInit } from '@angular/core';
import { champ_list } from './champ-list';
import {campeoneslol} from './campeoneslol';

@Component({
  selector: 'app-champs',
  templateUrl: './champs.component.html',
  styleUrls: ['./champs.component.css']
})
export class ChampsComponent implements OnInit {
  champions = campeoneslol;
  constructor() {

  }
  ngOnInit() {
  }

}
