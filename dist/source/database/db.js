"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require('knex');
const knexfile = require('../../knexfile');
const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];
exports.default = knex(configOptions);
