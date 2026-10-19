import type { ScheduleSettings } from "../types/schedule";

// this is general to work for both 24h and 12h time 
const TIME_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

// can be used in other parts of the project to validate time
export function isValidTime(time: string): boolean {
	return TIME_PATTERN.test(time);
}

function parseTime(time: string): { hours: number; minutes: number } {
	const match = TIME_PATTERN.exec(time);
	if (!match) {
		throw new Error(`Invalid time: "${time}"`);
	}
	return { hours: Number(match[1]), minutes: Number(match[2]) };
}

export function toMinutes(time: string): number {
	const { hours, minutes } = parseTime(time);
	return hours * 60 + minutes;
}

export function toHHMM(timeInMinutes: number): string {
	const hours = Math.floor(timeInMinutes / 60);
	const minutes = timeInMinutes % 60;
	return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function formatTime(time: string, format: ScheduleSettings["timeFormat"]): string {
	if (format == "24h") return time;

	const { hours, minutes } = parseTime(time);
	const meridian = hours >= 12 ? "PM" : "AM"
	const displayHours = hours % 12 === 0 ? 12 : hours % 12;
	return `${displayHours}:${String(minutes).padStart(2, "0")} ${meridian}`;
}
