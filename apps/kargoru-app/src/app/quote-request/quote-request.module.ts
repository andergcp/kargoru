import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRequestRoutingModule } from './quote-request-routing.module';
import { QuoteRequestListComponent } from './quote-request-list/quote-request-list.component';
import { QuoteRequestDetailComponent } from './quote-request-detail/quote-request-detail.component';
import { QuoteRequestFormComponent } from './quote-request-form/quote-request-form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { QuoteRequestTableComponent } from './quote-request-table/quote-request-table.component';

@NgModule({
  declarations: [
    QuoteRequestListComponent,
    QuoteRequestDetailComponent,
    QuoteRequestFormComponent,
    QuoteRequestTableComponent,
  ],
  imports: [CommonModule, QuoteRequestRoutingModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule],
  exports: [
    QuoteRequestListComponent,
    QuoteRequestDetailComponent,
    QuoteRequestFormComponent,
    QuoteRequestTableComponent,
  ],
})
export class QuoteRequestModule {}
