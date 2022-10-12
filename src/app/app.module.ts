import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { TokeninterceptorService } from './services/tokeninterceptor.service';
import { HomeComponent } from './home/home.component';
import { MychartComponent } from './mychart/mychart.component';
import { MainComponent } from './main/main.component';
import { MultiformsComponent } from './multiforms/multiforms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployeeComponent,
    HomeComponent,
    MychartComponent,
    MainComponent,
    MultiformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
