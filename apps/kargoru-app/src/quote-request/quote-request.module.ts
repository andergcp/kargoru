import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRequestRoutingModule } from './quote-request-routing.module';
import { QuoteRequestListComponent } from './quote-request-list/quote-request-list.component';
import { QuoteRequestDetailComponent } from './quote-request-detail/quote-request-detail.component';
import { QuoteRequestFormComponent } from './quote-request-form/quote-request-form.component';

@NgModule({
  declarations: [
    QuoteRequestListComponent,
    QuoteRequestDetailComponent,
    QuoteRequestFormComponent,
  ],
  imports: [CommonModule, QuoteRequestRoutingModule],
  exports: [
    QuoteRequestListComponent,
    QuoteRequestDetailComponent,
    QuoteRequestFormComponent,
  ],
})
export class QuoteRequestModule {}
