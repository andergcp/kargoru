import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuoteRequestModule } from '../quote-request/quote-request.module';
import { QuoteResponseModule } from '../quote-response/quote-response.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSliderModule, QuoteRequestModule, QuoteResponseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
