import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CodeBackgroundComponent } from './components/code-background/code-background.component';



@NgModule({
  declarations: [
    HomeComponent,
    CodeBackgroundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
