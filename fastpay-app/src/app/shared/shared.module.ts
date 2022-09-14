import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ContactSelectComponent } from './contact-select/contact-select.component';



@NgModule({
  declarations: [
    NavigationComponent,
    ContactSelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavigationComponent, ContactSelectComponent
  ]
})
export class SharedModule { }
