import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router'; // Import Router
import { DulieuService } from '../dulieu.service';
import { IDuan } from '../iduan';
import { INhanVien } from '../inhan-vien';

@Component({
  selector: 'app-duan-sua',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css'] // sửa 'styleUrl' thành 'styleUrls'
})
export class DuanSuaComponent {
  title2 = 'Sửa dự án';

  id: number = 0;
  data: IDuan = <IDuan>{};
  listNhanVien: INhanVien[] = [];
  constructor(
    private d: DulieuService,
    private route: ActivatedRoute,
    private router: Router // Thêm Router vào constructor
  ) {}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.layNhanVien().subscribe (data => {
      this.listNhanVien = data as INhanVien[];
    });
    this.d.lay1DuAn(this.id).subscribe(da => {
      console.log("da=", da);
      this.data = da as IDuan;
    })
  }
  xuly() {
    this.d.suaDuAn(this.data).subscribe(result => {
      console.log("result=", result);
      alert("Sửa thành công.");
      this.router.navigate(['/du_an']); // Chuyển đến danh sách dự án
    })
  }
}
