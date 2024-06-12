import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDuan } from './iduan';
import { INhanVien } from './inhan-vien';
import { ITask } from './itask';

@Injectable({
  providedIn: 'root'
})
export class DulieuService {

  constructor(private h:HttpClient) { }
  
  // Du an
  layDuAn() {
    return this.h.get('http://localhost:3000/du_an');
  }
  lay1DuAn(id:number = 0) {
    return this.h.get(`http://localhost:3000/du_an/${id}`);
  }
  themDuAn(da: IDuan) {
    return this.h.post('http://localhost:3000/du_an', da);
  }
  suaDuAn(da: IDuan) {
    return this.h.put('http://localhost:3000/du_an/' + da.id, da);
  }
  xoaDuAn(id: number) {
    return this.h.delete(`http://localhost:3000/du_an/${id}`);
  }

  // Nhan vien
  layNhanVien() {
    return this.h.get('http://localhost:3000/nhan_vien');
  }
  lay1NhanVien(id:number = 0) {
    return this.h.get(`http://localhost:3000/nhan_vien/${id}`);
  }
  themNhanVien(nv: INhanVien) {
    return this.h.post('http://localhost:3000/nhan_vien', nv);
  }
  suaNhanVien(nv: INhanVien) {
    return this.h.put('http://localhost:3000/nhan_vien/' + nv.id, nv);
  }
  xoaNhanVien(id: number) {
    return this.h.delete(`http://localhost:3000/nhan_vien/${id}`);
  }

  // Task
  layTask() {
    return this.h.get('http://localhost:3000/task');
  }
  lay1Task(id:number = 0) {
    return this.h.get(`http://localhost:3000/task/${id}`);
  }
  themTask(task: ITask) {
    return this.h.post('http://localhost:3000/task', task);
  }
  suaTask(task: ITask) {
    return this.h.put('http://localhost:3000/task/' + task.id, task);
  }
  xoaTask(id: number) {
    return this.h.delete(`http://localhost:3000/task/${id}`);
  }
}
