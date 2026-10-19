import { WEEKDAY_LABELS } from "../constants/weekdays";
import { type Weekday, type Schedule } from "../types/schedule";
import { formatTime, toHHMM, toMinutes } from "../utils/time";
import { getOrderedWeekdays } from "../utils/weekdays";

// shorthand function for creating an element
function el(tag: string, className: string, text?: string): HTMLElement {
	const node = document.createElement(tag);
	node.className = className;
	if (text !== undefined) node.textContent = text;
	return node;
}

export function renderTimetable(schedule: Schedule, container: HTMLElement): void {
	const { settings } = schedule;
	const days = getOrderedWeekdays(settings.weekStartsOn).filter((d) => settings.visibleDays.includes(d));

	const startMin = toMinutes(settings.startTime);
	const endMin = toMinutes(settings.endTime);
	const total = endMin - startMin;

	const root = el("div", "timetable");
	root.style.setProperty("--day-count", String(days.length));
	root.style.setProperty("--hour-count", String(total / 60));

	// Header row
	root.append(el("div", "corner"));
	for (const day of days) {
		root.append(el("div", "day-header", WEEKDAY_LABELS[day]));
	}

	// time labels (one body per day)
	const timeCol = el("div", "time-col");
	const firstHour = Math.ceil(startMin / 60) * 60;
	for (let m = firstHour; m <= endMin; m += 60) {
		const label = el("div", "time-label", formatTime(toHHMM(m), settings.timeFormat))
		label.style.top = `${((m - startMin) / total) * 100}%`;
		timeCol.append(label);
	}
	root.append(timeCol);

	const bodies = new Map<Weekday, HTMLElement>();
	for (const day of days) {
		const body = el("div", "day-body");
		bodies.set(day, body);
		root.append(body);
	}

	for (const group of schedule.eventGroups) {
		for (const event of group.events) {
			const eventStart = toMinutes(event.startTime);
			const eventEnd = toMinutes(event.endTime);

			for (const day of event.days) {
				const body = bodies.get(day);
				if (!body) continue; // day not visible

				const eventNode = el("div", "event");
				eventNode.style.top = `${((eventEnd - eventStart) / total) * 100}%`;
				eventNode.style.height = `${((eventEnd - eventStart) / total) * 100}%`;
				eventNode.style.background = group.color;

				// fallback to group title if an event does not have a title
				eventNode.append(el("div", "event-title"), event.title ?? group.title);
				eventNode.append(el("div", "event-time", `${formatTime(event.startTime, settings.timeFormat)}–${formatTime(event.endTime, settings.timeFormat)}`))

				body.append(eventNode)
			}
		}
	}

	container.replaceChildren(root);
}
