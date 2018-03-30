import { Router, Routes, ActivatedRoute } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  StudentDetail: any = {};
  isEdit: Boolean = false;
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params.id !== undefined) {
        this.isEdit = true;
        this.studentService.getStudent(params.id).subscribe(res => {
          this.StudentDetail = res;
        });
      }
    });

  }

  ngOnInit() {
  }
  studentSave() {
    if (!this.isEdit) {
      this.studentService.StudentService(this.StudentDetail).subscribe(res => {
        console.log('res', res);
        if (res.id !== undefined) {
          this.router.navigate(['student']);
        }
      });
    } else {
      this.studentService.editStudent(this.StudentDetail).subscribe(res => {
        console.log('res', res);
        if (res.id !== undefined) {
          this.router.navigate(['student']);
        }
      });
    }
  }
}
