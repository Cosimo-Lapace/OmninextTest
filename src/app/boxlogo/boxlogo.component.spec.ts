import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxlogoComponent } from './boxlogo.component';

describe('BoxlogoComponent', () => {
  let component: BoxlogoComponent;
  let fixture: ComponentFixture<BoxlogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxlogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
