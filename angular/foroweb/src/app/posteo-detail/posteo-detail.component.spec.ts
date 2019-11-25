import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteoDetailComponent } from './posteo-detail.component';

describe('PosteoDetailComponent', () => {
  let component: PosteoDetailComponent;
  let fixture: ComponentFixture<PosteoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
