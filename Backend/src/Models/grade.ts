import { Model, DataTypes } from "sequelize";
import sequelize from "../DB/connection";

const Grade = sequelize.define("grade",{
  idGrade: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  score: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      min: 0,
      max: 10
    }
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  idStudent: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Grade;
