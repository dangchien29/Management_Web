import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DulieuService } from '../dulieu.service';
import { INhanVien } from '../inhan-vien';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dang-nhap',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  title2 = 'Đăng nhập';
  list_nv: INhanVien[] = [];
  gmail: string = '';
  password: string = '';

  constructor(
    private d: DulieuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchDA();
  }

  fetchDA(): void {
    fetch(`http://localhost:3000/nhan_vien`)
      .then(res => res.json())
      .then(data => {
        this.list_nv = data;
      });
  }

  login(): void {
    const user = this.list_nv.find(nv => nv.gmail === this.gmail && nv.password === this.password);

    if (user) {
      alert('Đăng nhập thành công');
      this.router.navigate(['/home']);  // Điều hướng đến trang sau khi đăng nhập thành công
    } else {
      alert('Thông tin đăng nhập không đúng');
    }
  }
}
