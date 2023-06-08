import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBodyLeftComponent } from './section-body.component';

describe('SectionBodyLeftComponent', () => {
  let component: SectionBodyLeftComponent;
  let fixture: ComponentFixture<SectionBodyLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBodyLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBodyLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
