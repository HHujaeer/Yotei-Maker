// Used for making events share a title and color scheme
export interface EventGroup {
	id: string;
	title: string;
	color: string;
	events: ScheduleEvent[];
}

export type Weekday = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

export interface ScheduleEvent {
	id: string;
	// uses group title if unnamed
	title?: string;
	days: Weekday[];

	startTime: string;
	endTime: string;

	instructor?: string;
	location?: string;
	description?: string;
}

export interface ScheduleSettings {
	weekStartsOn: Weekday;
	visibleDays: Weekday[];
	weekendDays: Weekday[];

	startTime: string;
	endTime: string;

	timeFormat: "12h" | "24h";
}

export interface Schedule {
	version: number;
	title: string;
	settings: ScheduleSettings;
	eventGroups: EventGroup[];
}

