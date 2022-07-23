import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteResponseListComponent } from './quote-response-list.component';

describe('QuoteResponseListComponent', () => {
  let component: QuoteResponseListComponent;
  let fixture: ComponentFixture<QuoteResponseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteResponseListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteResponseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
