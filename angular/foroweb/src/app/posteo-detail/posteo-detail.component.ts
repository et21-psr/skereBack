import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PosteoService } from '../servicios/posteo.service';
import { Posteo } from '../Clases/Clases';

@Component({
  selector: 'app-posteo-detail',
  templateUrl: './posteo-detail.component.html',
  styleUrls: ['./posteo-detail.component.css']
})
export class PosteoDetailComponent implements OnInit {
  posteo : Posteo;
  idposteo;
  constructor(
    private route: ActivatedRoute,
    private posteoService: PosteoService) { }

  ngOnInit() {
    this.getPosteo();
    this.idposteo = this.posteo.id_posteo;
  }

  getPosteo(): void {
    this.idposteo = this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    this.posteoService.getPosteoid(id)
      .subscribe(posteo => this.posteo = posteo);
  }
}
