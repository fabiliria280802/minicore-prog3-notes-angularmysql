"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../DB/connection"));
var sequelize_1 = require("sequelize");
var Period = connection_1.default.define("period", {
    idPeriod: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    start: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    end: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    weigh: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    }
});
exports.default = Period;
