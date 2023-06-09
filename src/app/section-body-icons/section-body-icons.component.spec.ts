import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBodyIconsComponent } from './section-body-icons.component';

describe('SectionBodyIconsComponent', () => {
  let component: SectionBodyIconsComponent;
  let fixture: ComponentFixture<SectionBodyIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBodyIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBodyIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
