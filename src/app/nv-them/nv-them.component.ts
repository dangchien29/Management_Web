import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DulieuService } from '../dulieu.service';
import { INhanVien } from '../inhan-vien';
import { Router, RouterLink, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-nv-them',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css'] // sửa 'styleUrl' thành 'styleUrls'
})
export class NvThemComponent {
  title2 = 'Thêm nhân viên';
  constructor(
    private d: DulieuService,
    private router: Router 
  ) {}
  xuly(nv: INhanVien) {
    this.d.themNhanVien(nv).subscribe(data => {
      console.log(nv, data);
      alert("Thêm nhân viên thành công.");
      this.router.navigate(['/nhan_vien']); // Chuyển đến danh sách nhân viên
    });
  }
}
