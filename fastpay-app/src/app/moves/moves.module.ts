import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastMovesComponent } from './last-moves/last-moves.component';



@NgModule({
  declarations: [
    LastMovesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LastMovesComponent]
})
export class MovesModule { }
