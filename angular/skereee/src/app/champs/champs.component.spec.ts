import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampsComponent } from './champs.component';

describe('ChampsComponent', () => {
  let component: ChampsComponent;
  let fixture: ComponentFixture<ChampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
