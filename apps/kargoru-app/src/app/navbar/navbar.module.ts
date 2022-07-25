import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { QuoteRequestModule } from '../quote-request/quote-request.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule, 
    MatListModule,
    QuoteRequestModule
  ],

  exports: [NavbarComponent],
})
export class NavbarModule {}
