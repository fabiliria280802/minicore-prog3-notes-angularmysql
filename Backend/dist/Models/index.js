"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Period = exports.Student = exports.Grade = void 0;
//se importan los models
var student_1 = __importDefault(require("./student"));
exports.Student = student_1.default;
var grade_1 = __importDefault(require("./grade"));
exports.Grade = grade_1.default;
var period_1 = __importDefault(require("./period"));
exports.Period = period_1.default;
//enlace de relaciones
student_1.default.hasMany(grade_1.default, { foreignKey: 'idStudent' });
grade_1.default.belongsTo(student_1.default, { foreignKey: 'idStudent' });
