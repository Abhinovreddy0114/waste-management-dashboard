import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    MaindashboardComponent,
    HeaderComponent,
    FooterComponent,
    DatepickerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
