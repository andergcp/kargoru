import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteResponseRoutingModule } from './quote-response-routing.module';
import { QuoteResponseListComponent } from './quote-response-list/quote-response-list.component';
import { QuoteResponseDetailComponent } from './quote-response-detail/quote-response-detail.component';
import { QuoteResponseComparatorComponent } from './quote-response-comparator/quote-response-comparator.component';

@NgModule({
  declarations: [
    QuoteResponseListComponent,
    QuoteResponseDetailComponent,
    QuoteResponseComparatorComponent,
  ],
  imports: [CommonModule, QuoteResponseRoutingModule],
  exports: [
    QuoteResponseListComponent,
    QuoteResponseDetailComponent,
    QuoteResponseComparatorComponent,
  ],
})
export class QuoteResponseModule {}
