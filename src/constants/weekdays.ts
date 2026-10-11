import type { Weekday } from "../types/schedule";

export const WEEKDAYS: Weekday[] = [
	"sunday",
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
];

export const WEEKDAY_LABELS: Record<Weekday, string> = {
	sunday: "Sun",
	monday: "Mon",
	tuesday: "Tue",
	wednesday: "Wed",
	thursday: "Thu",
	friday: "Fri",
	saturday: "Sat",
};
