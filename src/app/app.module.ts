import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDataService } from './contact-data.service'
import { HttpClientModule } from '@angular/common/http';
import { RoutingMainModule } from "./routing-main/routing-main.module";
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    //RoutingMainModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingMainModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [ContactDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
