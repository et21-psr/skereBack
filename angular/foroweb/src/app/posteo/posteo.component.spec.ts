import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteoComponent } from './posteo.component';

describe('PosteoComponent', () => {
  let component: PosteoComponent;
  let fixture: ComponentFixture<PosteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
