import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleteCaillouxComponent } from './salete-cailloux.component';

describe('SaleteCaillouxComponent', () => {
  let component: SaleteCaillouxComponent;
  let fixture: ComponentFixture<SaleteCaillouxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleteCaillouxComponent]
    });
    fixture = TestBed.createComponent(SaleteCaillouxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
