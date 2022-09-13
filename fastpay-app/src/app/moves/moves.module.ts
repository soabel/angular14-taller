import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastMovesComponent } from './last-moves/last-moves.component';
import { MoveDetailsComponent } from './move-details/move-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':id/details', component: MoveDetailsComponent }
];


@NgModule({
  declarations: [
    LastMovesComponent,
    MoveDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[LastMovesComponent]
})
export class MovesModule { }
