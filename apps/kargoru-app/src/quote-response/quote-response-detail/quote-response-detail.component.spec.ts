import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteResponseDetailComponent } from './quote-response-detail.component';

describe('QuoteResponseDetailComponent', () => {
  let component: QuoteResponseDetailComponent;
  let fixture: ComponentFixture<QuoteResponseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteResponseDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteResponseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
