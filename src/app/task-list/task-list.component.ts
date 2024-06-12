import { Component, OnInit } from '@angular/core';
import { ITask } from '../itask';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  title2 = 'Task';

  list_task: ITask[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchTA();
  }

  fetchTA(): void {
    fetch(`http://localhost:3000/task`)
      .then(res => res.json())
      .then(data => {
        this.list_task = data;
      });
  }

  editTA(id: number): void {
    this.router.navigate([`/task/sua/${id}`])
  }

  deleteTA(id: number): void {
    if (confirm(`Bạn có chắc chắn muốn xóa task này không?`)) {
      fetch(`http://localhost:3000/task/${id}`, {
        method: 'DELETE',
      })
      .then(() => {
        this.fetchTA();
      })
      .catch(error => console.error('Lỗi khi xóa task:', error));
    }
  }
}
