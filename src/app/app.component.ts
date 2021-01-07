import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo{
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  todoTitle = '';
  todos: Array<Todo> = [];
  loading = false;

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {

  }

  addTodo(): void {
    if (!this.todoTitle.trim()){
      return;
    }

    const newTodo: Todo = { completed: false, title: this.todoTitle};

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todos => {
        this.todos.push(todos);
        this.todoTitle = '';
      });
  }

  fetchTodos(): void{
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(response => {
      console.log(response);
      this.todos = response;
      this.loading = false;
    });
  }
  removeTodo(id: number): void {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }
}

//https://www.youtube.com/watch?v=pt_cwna0r0s
//https://www.youtube.com/watch?v=gB-OmN1egV8

