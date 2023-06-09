import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTapeComponent } from './section-tape.component';

describe('SectionTapeComponent', () => {
  let component: SectionTapeComponent;
  let fixture: ComponentFixture<SectionTapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
