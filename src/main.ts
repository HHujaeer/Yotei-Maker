import "./style.css";

const app = document.querySelector<HTMLElement>("#app");

if (!app) {
	throw new Error("App not found");
}

console.log("cool");
