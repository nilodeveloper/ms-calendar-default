"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('sqlite::memory:');
const Days = sequelize.define('Days', {
    id: sequelize_1.DataTypes.STRING,
    feriado: sequelize_1.DataTypes.INTEGER,
    dia: sequelize_1.DataTypes.INTEGER,
    diaSemana: sequelize_1.DataTypes.INTEGER,
    mes: sequelize_1.DataTypes.INTEGER,
    ano: sequelize_1.DataTypes.INTEGER,
    curiosidade: sequelize_1.DataTypes.STRING,
    lua: sequelize_1.DataTypes.INTEGER,
});
exports.default = Days;
