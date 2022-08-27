import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list-app';

  list: any[] = [];
  newTask: any = {};

  ngOnInit(): void {

    this.list.push({ id: 1, name: 'Limpiar habitación' });
    this.list.push({ id: 2, name: 'Lectura diaria' });

  }

  add(): void {
    if (!this.newTask.name)
      return;
    this.list.push(this.newTask);
    this.newTask = {};
  }
  delete(item: any): void {
    let index = this.list.findIndex(x => x.name == item.name);

    console.log('index', index);

    // delete this.list[index];
    this.list.splice(index,1);

  }

}
