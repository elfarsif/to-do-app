import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content?: string;
  todoForm = new FormGroup({
    todo: new FormControl(''),
  });
  todoList: any = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        console.log(err);
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = 'Error with status: ' + err.status;
        }
      },
    });
  }

  addToDoItem() {
    this.todoList = [
      ...this.todoList,
      {
        id: this.todoList.length,
        todo: this.todoForm.value.todo,
        isCompleted: false,
      },
    ];
    this.todoForm.patchValue({
      todo: '',
    });
    console.log(this.todoList);
  }

  removeItem(task: any) {
    console.log('remove by id ' + task.id);
    this.todoList = this.todoList.filter(
      (item: { id: any }) => item.id != task.id
    );
  }
}
