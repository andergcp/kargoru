import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuoteRequestModule } from './quote-request/quote-request.module';
import { QuoteResponseModule } from './quote-response/quote-response.module';
import { NavbarModule } from './navbar/navbar.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,  
    QuoteRequestModule, 
    QuoteResponseModule, 
    NavbarModule, 
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule, 
    MatIconModule, 
    MatButtonModule, 
    LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
