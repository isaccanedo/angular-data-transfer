import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { MultiformsComponent } from './multiforms/multiforms.component';
import { MychartComponent } from './mychart/mychart.component';

const routes: Routes = [
  {path:"datatransfer",component:HomeComponent},
  {path:"chart",component:MychartComponent},
  {path:"",component:MainComponent},
  {path:"multiform",component:MultiformsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
