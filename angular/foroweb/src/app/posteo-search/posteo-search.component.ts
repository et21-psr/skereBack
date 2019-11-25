import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { PosteoService } from '../servicios/posteo.service';
import { Posteo } from '../Clases/Clases';

@Component({
  selector: 'app-posteo-search',
  templateUrl: './posteo-search.component.html',
  styleUrls: [ './posteo-search.component.css' ]
})
export class PosteoSearchComponent implements OnInit {
  posteos$: Observable<Posteo[]>;
  private searchTerms = new Subject<string>();

  constructor(private posteoService: PosteoService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.posteos$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.posteoService.searchPosteos(term)),
    );
    
  }
}