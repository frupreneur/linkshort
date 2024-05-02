//START SETUP
const welcomePaths = [
	"/exploring-fruit-picking-job-opportunities-in-canada/",
	"/visa-validation-ensuring-the-legitimacy-of-your-canadian-immigration-papers/",
	"/safeguarding-against-fraudulent-canadian-visas-tips-and-precautions/",
	"/exploring-employment-opportunities-in-the-cleaning-industry-a-guide-for-visa-holders-in-the-usa/",
	"/charting-your-course-essential-steps-for-legal-migration-to-canada/",
	"/exploring-the-caretaker-job-market-in-canada/",
	"/sweeping-success-achieving-employment-as-a-cleaner-in-the-usa-with-visa-support/",
];

const homePaths = ["/exploring-fruit-picker-job-market-insights-in-canada/"];

function getRandomWelcomePath() {
	const randomIndex = Math.floor(Math.random() * welcomePaths.length);
	return welcomePaths[randomIndex];
}
function getRandomHomePath() {
	const randomIndex = Math.floor(Math.random() * homePaths.length);
	return homePaths[randomIndex];
}

if (location.pathname == "/welcome/" || location.pathname == "/welcome") {
	localStorage.setItem("scroll", "1");

	let newPath = getRandomWelcomePath();

	window.location.assign(newPath);
} else if (location.pathname == "/home/" || location.pathname == "/home") {
	localStorage.setItem("scroll", "1");

	let newPath = getRandomHomePath();

	window.location.assign(newPath);
} else {
	if (localStorage.getItem("scroll")) {
		function isViewportWidthLessThan600() {
			return window.innerWidth < 600;
		}

		// Example usage
		if (isViewportWidthLessThan600()) {
			setTimeout(() => {
				window.scrollTo(0, 250); // Scrolls to 500px from the top of the page
				document.body.style.overflow = "hidden";
			}, 100);
		}

		function generateRandomNumber() {
			return Math.floor(Math.random() * (30001 - 10000)) + 10000;
		}
		setTimeout(function () {
			let newPath = getRandomWelcomePath();

			window.location.assign(newPath);
		}, generateRandomNumber());
	}
}

//END OF SETUP
