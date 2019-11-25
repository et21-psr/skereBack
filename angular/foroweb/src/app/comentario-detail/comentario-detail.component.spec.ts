import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioDetailComponent } from './comentario-detail.component';

describe('ComentarioDetailComponent', () => {
  let component: ComentarioDetailComponent;
  let fixture: ComponentFixture<ComentarioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
