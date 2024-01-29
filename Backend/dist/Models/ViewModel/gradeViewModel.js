"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GradeViewModel = /** @class */ (function () {
    function GradeViewModel() {
        this.proms = {};
        this.gradesList = [];
        this.studentsList = [];
        this.periodsList = [];
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
    return GradeViewModel;
}());
exports.default = GradeViewModel;
