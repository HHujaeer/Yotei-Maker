import { defaultSchedule } from "./defaults";
import type { Schedule } from "../types/schedule";

// this is for testing
export const sampleSchedule: Schedule = {
	...defaultSchedule,
	eventGroups: [
		{
			id: "g1",
			title: "Calculus",
			color: "#4f8cff",
			events: [
				{ id: "e1", days: ["sunday", "tuesday", "thursday"], startTime: "09:00", endTime: "10:30", location: "Room 101" },
				{ id: "e2", title: "Calculus Lab", days: ["monday"], startTime: "13:00", endTime: "15:00" },
			],
		},
		{
			id: "g2",
			title: "Physics",
			color: "#e8743b",
			events: [
				{ id: "e3", days: ["monday", "wednesday"], startTime: "10:30", endTime: "12:00" },
			],
		},
	],
};
