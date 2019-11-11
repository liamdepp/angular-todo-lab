import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  toDoArray: Todo[] = [{task: "Walk dog", completed: false}, {task: "Hack Google", completed: false}, {task: "Get money", completed: true}, {task: "Go for run", completed: false}];








  constructor() { }

  ngOnInit() {
  }

}
