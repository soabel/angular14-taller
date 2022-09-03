import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { UsersDetailsComponent } from './users-details/users-details.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersDetailsComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class UsersModule { }
