import sequelize from "../DB/connection";
import { DataTypes } from "sequelize";

const Period = sequelize.define("period", {
    idPeriod: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    start:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    end:{
        type: DataTypes.DATEONLY,
        allowNull:false,
    },
    weigh:{
        type: DataTypes.INTEGER,
        allowNull:false,
    }
});
export default Period;