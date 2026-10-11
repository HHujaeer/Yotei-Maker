// used to make events that occur
// at separate times share a theme
export interface EventGroup {
	id: string;
	title: string;
	color: string;
	events: ScheduleEvent[];
}

export interface ScheduleEvent {
	id: string;
	title: string;
	days: number[];

	startTime: string;
	endTime: string;

	instructor?: string;
	location?: string;
	description?: string;
}

export interface ScheduleSettings {
	// 0 = Sunday -> 6 = Saturday
	weekStartsOn: number;

	// what days are shown in the schedule
	visibleDays: number[];

	// what days are weekends
	weekendDays: number[];

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
