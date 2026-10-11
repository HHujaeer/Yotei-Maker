import { WEEKDAYS } from "../constants/weekdays";
import type { Weekday } from "../types/schedule";

export function getOrderedWeekdays(startDay: Weekday): Weekday[] {
	const startIndex = WEEKDAYS.indexOf(startDay);

	return [...WEEKDAYS.slice(startIndex), ...WEEKDAYS.slice(0, startIndex)];
}
