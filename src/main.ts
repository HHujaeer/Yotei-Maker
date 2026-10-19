import "./style.css";
import { sampleSchedule } from "./schedule/sample";
import { renderTimetable } from "./ui/timetable";

const app = document.querySelector<HTMLElement>("#app");

if (!app) {
	throw new Error("App not found");
}

renderTimetable(sampleSchedule, app);
