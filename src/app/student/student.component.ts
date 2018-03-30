import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any[];
  constructor(private studentService: StudentService, private router: Router) {
    this.studentService.allStudent().subscribe(res => {
      this.students = res;
      console.log(this.students);
    });
  }
  ngOnInit() {
  }


  doDeleteStudent(id) {
    console.log(id);
    this.studentService.deleteStudent(id).subscribe(res => {
      console.log(res);
      if (res.status === 'success') {
        this.studentService.allStudent().subscribe(result => {
          this.students = result;
          console.log(this.students);
        });
      }
    });
  }

  doEditStudent(id) {
   this.router.navigate(['editstudent', id]);
  }
}
