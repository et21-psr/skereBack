import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteosComponent } from './posteos.component';

describe('PosteosComponent', () => {
  let component: PosteosComponent;
  let fixture: ComponentFixture<PosteosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
