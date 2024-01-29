"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
//Debes importar tus keys que estan etiquetadas como keys-example
var keys_1 = __importDefault(require("../keys"));
var sequelize = new sequelize_1.Sequelize(keys_1.default.database, keys_1.default.user, keys_1.default.password, {
    host: keys_1.default.host,
    dialect: "mysql",
});
exports.default = sequelize;
