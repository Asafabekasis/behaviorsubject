import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Todo, TodoService } from 'src/app/services/todo.service'
 
@Component({
  selector: "app-todo",
  templateUrl: './todo-list.component.html',

  
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]> | undefined
 
  constructor(private todoService: TodoService) {this.todos$ = this.todoService.todos$;}
 
  ngOnInit() {
    
  }
 
  deleteTodo(todoId: number) {
    this.todoService.remove(todoId);
  }
}