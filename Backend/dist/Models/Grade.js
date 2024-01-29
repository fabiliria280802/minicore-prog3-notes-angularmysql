"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../DB/connection"));
var Grade = /** @class */ (function (_super) {
    __extends(Grade, _super);
    function Grade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Grade;
}(sequelize_1.Model));
Grade.init({
    idGrade: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            min: 0,
            max: 10
        }
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    idStudent: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: connection_1.default,
    modelName: 'grade'
});
exports.default = Grade;
