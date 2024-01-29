import { Model, DataTypes } from "sequelize";
import sequelize from "../DB/connection";

const Student = sequelize.define("student",{
  idStudent: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Student;
