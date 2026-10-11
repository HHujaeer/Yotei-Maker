import type { Schedule } from "../types/schedule";

export const defaultSchedule: Schedule = {
	version: 1,
	title: "My Schedule",
	settings: {
		weekStartsOn: "sunday",
		visibleDays: [
			"sunday",
			"monday",
			"tuesday",
			"wednesday",
			"thursday",
		],
		weekendDays: ["friday", "saturday"],
		startTime: "08:00",
		endTime: "20:00",
		timeFormat: "12h",
	},
	eventGroups: [],
};
