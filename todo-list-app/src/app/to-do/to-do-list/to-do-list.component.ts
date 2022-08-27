import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() list: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  delete(item: any): void {
    let index = this.list.findIndex(x => x.name == item.name);

    console.log('index', index);

    // delete this.list[index];
    this.list.splice(index,1);

  }

}
