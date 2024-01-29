"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grade = void 0;
var student_1 = __importDefault(require("./student"));
var grade_1 = __importDefault(require("./grade"));
exports.Grade = grade_1.default;
student_1.default.hasMany(grade_1.default, { foreignKey: 'idStudent' });
grade_1.default.belongsTo(student_1.default, { foreignKey: 'idStudent' });
