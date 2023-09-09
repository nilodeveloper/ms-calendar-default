
import { helloWorld } from './helloWorld.route';
import { findRoute } from './find.route';
import { findEventByNameRoute } from './findEventByName.route';
import { findMonthRoute } from './findMonth.route';
import { findNextHolidayRoute } from './findNextHoliday.route';
import { createEventRoute } from './createEvent.route';

export function routes(){
    return [
        helloWorld,
        findRoute,
        findEventByNameRoute,
        findMonthRoute,
        findNextHolidayRoute,
        createEventRoute
    ]
}