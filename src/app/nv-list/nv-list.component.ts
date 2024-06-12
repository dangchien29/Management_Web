import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { INhanVien } from '../inhan-vien';

@Component({
  selector: 'app-nv-list',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterModule],
  templateUrl: './nv-list.component.html',
  styleUrl: './nv-list.component.css'
})
export class NvListComponent {
  title2 = 'Nhân viên';

  list_nv:INhanVien [] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchNV();
  }

  fetchNV(): void {
    fetch(`http://localhost:3000/nhan_vien`)
    .then(res => res.json())
    .then(data => {
      this.list_nv = data;
    });
  }

  editDA(id: number): void {
    // Điều hướng tới trang sửa với ID
    this.router.navigate([`/nhan_vien/sua/${id}`]);
  }

  deleteDA(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa nhân viên này không?')) {
      fetch(`http://localhost:3000/nhan_vien/${id}`, {
        method: 'DELETE',
      })
      .then(() => {
        // Sau khi xóa, làm mới danh sách nhân viên
        this.fetchNV();
      })
      .catch(error => console.error('Lỗi:', error));
    }
  }
}