"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const helloWorld_route_1 = require("./helloWorld.route");
const find_route_1 = require("./find.route");
const findEventByName_route_1 = require("./findEventByName.route");
const findMonth_route_1 = require("./findMonth.route");
const findNextHoliday_route_1 = require("./findNextHoliday.route");
const createEvent_route_1 = require("./createEvent.route");
function routes() {
    return [
        helloWorld_route_1.helloWorld,
        find_route_1.findRoute,
        findEventByName_route_1.findEventByNameRoute,
        findMonth_route_1.findMonthRoute,
        findNextHoliday_route_1.findNextHolidayRoute,
        createEvent_route_1.createEventRoute
    ];
}
exports.routes = routes;
