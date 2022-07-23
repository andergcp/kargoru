import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRequestDetailComponent } from './quote-request-detail.component';

describe('QuoteRequestDetailComponent', () => {
  let component: QuoteRequestDetailComponent;
  let fixture: ComponentFixture<QuoteRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteRequestDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
