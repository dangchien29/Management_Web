import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router'; // Import Router
import { DulieuService } from '../dulieu.service';
import { INhanVien } from '../inhan-vien';

@Component({
  selector: 'app-nv-sua',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css'] // sửa 'styleUrl' thành 'styleUrls'
})
export class NvSuaComponent {
  title2 = 'Sửa nhân viên';
  
  id: number = 0;
  data: INhanVien = <INhanVien>{};
  constructor(
    private d: DulieuService,
    private route: ActivatedRoute,
    private router: Router // Thêm Router vào constructor
  ) {}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.lay1NhanVien(this.id).subscribe(nv => {
      console.log("nv = ", nv);
      this.data = nv as INhanVien;
    });
  }
  xuly() {
    this.d.suaNhanVien(this.data).subscribe(result => {
      console.log("result = ", result);
      alert("Sửa nhân viên thành công.");
      this.router.navigate(['/nhan_vien']); // Chuyển đến danh sách nhân viên
    });
  }
}
