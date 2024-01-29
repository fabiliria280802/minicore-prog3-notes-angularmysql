import { Grade } from "../../Interfaces/grade.interface";
import { Student } from "../../Interfaces/student.interface";
import { Period } from "../../Interfaces/period.interface";

class GradeViewModel {
    public proms: Record<number, number[]> ={};
    public grade: Grade;
    public student: Student;
    public period: Period;
    public gradesList: Grade[] =[];
    public studentsList: Student[] =[];
    public periodsList: Period[] = [];
    public start: Date;
    public end: Date;

    constructor() {
      this.start = new Date(2023, 8, 27);
      this.end = new Date(2024, 0, 30);
      this.grade = {
        idGrade: 0,
        name: '',
        score: 0,
        date: new Date(),
        idStudent: 0
      };
      this.student = {
        idStudent: 0,
        name: '',
      };
      this.period = {
        idPeriod: 0,
        start: new Date(),
        end: new Date(),
        weigh: 0,
      };
    }
  }

  export default GradeViewModel;