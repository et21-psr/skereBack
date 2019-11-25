import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteoSearchComponent } from './posteo-search.component';

describe('PosteoSearchComponent', () => {
  let component: PosteoSearchComponent;
  let fixture: ComponentFixture<PosteoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
