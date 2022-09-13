import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Move } from 'src/app/models/move';

@Component({
  selector: 'app-last-moves',
  templateUrl: './last-moves.component.html',
  styleUrls: ['./last-moves.component.scss']
})
export class LastMovesComponent implements OnInit {

  showBalance = false;
  moves: Move[] = [];
  balance: number = 150.0;
  constructor(private router : Router) {
    this.moves.push({ id: 1, accountName: 'Cristina Torres', date: new Date(), amount: 10, type: 'credit' });
    this.moves.push({ id: 2, accountName: 'Carlos Ponce', date: new Date(), amount: 100, type: 'credit' });
    this.moves.push({ id: 3, accountName: 'Juan Ramos', date: new Date(), amount: 10, type: 'debit' });
    this.moves.push({ id: 4, accountName: 'Alvaro Reyes', date: new Date(), amount: 90.5, type: 'credit' });
  }

  ngOnInit(): void {
  }

  showDetails(move: Move):void{
    this.router.navigateByUrl(`moves/${move.id}/details`);
  }

}
