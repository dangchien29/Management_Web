import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { IDuan } from '../iduan';

@Component({
  selector: 'app-duan-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent {
  title2 = 'Dự án';
  list_du_an: IDuan[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchDA();
  }

  fetchDA(): void {
    fetch(`http://localhost:3000/du_an`)
      .then(res => res.json())
      .then(data => {
        this.list_du_an = data;
      });
  }

  editDA(id: number): void {
    // Điều hướng tới trang sửa với ID
    this.router.navigate([`/du_an/sua/${id}`]);
  }

  deleteDA(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa dự án này không?')) {
      fetch(`http://localhost:3000/du_an/${id}`, {
        method: 'DELETE',
      })
      .then(() => {
        // Sau khi xóa, làm mới danh sách dự án
        this.fetchDA();
      })
      .catch(error => console.error('Lỗi:', error));
    }
  }
}
