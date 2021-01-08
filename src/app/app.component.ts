import {Component} from '@angular/core';
import {Todo, TodosService} from './services/todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoTitle = '';
  todos: Array<Todo> = [];
  loading = false;
  error = '';

  constructor(private todosService: TodosService) {
  }

  addTodo(): void {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {completed: false, title: this.todoTitle};

    this.todosService.addTodo(newTodo)
      .subscribe(todos => {
        this.todos.push(todos);
        this.todoTitle = '';
      });
  }

  fetchTodos(): void {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(response => {
        console.log(response);
        this.todos = response;
        this.loading = false;
        this.error = '';
      });
  }

  removeTodo(id: number): void {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }

  completeTodo(id: number): void {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
          // @ts-ignore
          this.todos.find(t => t.id === todo.id).completed = true;
        },
        error => this.error = error.message
      );
  }
}


