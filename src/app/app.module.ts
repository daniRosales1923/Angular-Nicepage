import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { FooterModule } from './components/footer/footer.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core' ;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NavbarModule,
    FooterModule,
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyDFTKbcSXEN22pUx3zfaabEOGyy7oOZtmI',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
