import Grade from "./Interface/grade.interface";
import Student from "./Interface/student.interface";
import Period from "./Interface/period.interface";

class GradeViewModel {
    public promedios: Record<number, number[]>; // Dictionary en C# se convierte en Record en TypeScript
    public grade: Grade;
    public student: Student;
    public period: Period;
    public gradesList: Grade[];
    public studentsList: Student[];
    public periodsList: Period[];
    public start: Date; // DateOnly se convierte en Date en TypeScript
    public end: Date; // DateOnly se convierte en Date en TypeScript

    constructor() {
      this.start = new Date(2023, 8, 27); // Los meses en JavaScript comienzan en 0
      this.end = new Date(2024, 0, 30);
      // Inicializa las demás propiedades según sea necesario
    }
  }

  export default GradeViewModel;