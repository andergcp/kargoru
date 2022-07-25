import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteResponseComparatorComponent } from './quote-response-comparator.component';

describe('QuoteResponseComparatorComponent', () => {
  let component: QuoteResponseComparatorComponent;
  let fixture: ComponentFixture<QuoteResponseComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteResponseComparatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteResponseComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
