import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Todo, TodoService } from 'src/app/services/todo.service'
 
@Component({
  selector: "app-todo-add",
  templateUrl: './todo-add.component.html',
})
export class TodoAddComponent implements OnInit {
  todos$: Observable<Todo[]> | undefined
  todoForm: FormGroup;
 
  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.todoForm = this.formBuilder.group({
      id: [""],
      value: ["", Validators.required]
    });
  }
 
  ngOnInit() {
    this.todos$ = this.todoService.todos$;
  }
 
  onSubmit() {
    console.log(this.todoForm.value);
    
    this.todoService.create(this.todoForm.value);
    this.todoForm.get("value")?.setValue("");
  }
}
 
