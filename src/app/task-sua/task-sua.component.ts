import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DulieuService } from '../dulieu.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ITask } from '../itask';
import { INhanVien } from '../inhan-vien';
import { IDuan } from '../iduan';

@Component({
  selector: 'app-task-sua',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './task-sua.component.html',
  styleUrl: './task-sua.component.css'
})
export class TaskSuaComponent {
  title2 = 'Sửa task';

  id: number = 0;
  data: ITask = <ITask>{};
  listNhanVien: INhanVien[] = [];
  listDuAn: IDuan[] = [];
  constructor(
    private d: DulieuService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.lay1Task(this.id).subscribe(ta => {
      console.log("ta = ", ta);
      this.data = ta as ITask;
    });
    this.d.layNhanVien().subscribe(data => {
      this.listNhanVien = data as INhanVien[];
    });
    this.d.layDuAn().subscribe(data => {
      this.listDuAn = data as IDuan[];
    });
  }

  xuly() {
    this.d.suaTask(this.data).subscribe(result => {
      console.log(result);
      alert("Sửa Task thành công.");
    })
  }
}
