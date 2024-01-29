import { Model, DataTypes } from "sequelize";
import sequelize from "../DB/connection";

class Student extends Model {}

Student.init({
  idStudent: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'student'
});

// Establecer la relación uno-a-muchos con Grade


export default Student;
