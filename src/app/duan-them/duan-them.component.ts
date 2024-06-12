import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DulieuService } from '../dulieu.service';
import { INhanVien } from '../inhan-vien';
import { IDuan } from '../iduan';
import { Router, RouterLink, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-duan-them',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css'] // sửa 'styleUrl' thành 'styleUrls'
})
export class DuanThemComponent {
  title2 = 'Thêm dự án';

  listNhanVien: INhanVien[] = [];
  constructor(
    private d: DulieuService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.d.layNhanVien().subscribe(data => {
      this.listNhanVien = data as INhanVien[];
    });
  }
  xuly(da: IDuan) {
    this.d.themDuAn(da).subscribe(data => {
      console.log(da, data);
      alert('Thêm thành công.');
      this.router.navigate(['/du_an']); // Chuyển đến danh sách dự án
    });
  }
}
