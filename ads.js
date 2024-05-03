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

const homePaths = [
	"/exploring-fruit-picker-job-market-insights-in-canada/",
	"/exploring-the-caretaker-job-market-in-canada/",
	"/sweeping-success-achieving-employment-as-a-cleaner-in-the-usa-with-visa-support/",
	"/charting-your-course-essential-steps-for-legal-migration-to-canada/",
];

function getRandomWelcomePath() {
	const randomIndex = Math.floor(Math.random() * welcomePaths.length);
	return welcomePaths[randomIndex];
}
function getRandomHomePath() {
	const filteredHomePaths = homePaths.filter((x) => x != location.pathname);

	const randomIndex = Math.floor(Math.random() * filteredHomePaths.length);
	return filteredHomePaths[randomIndex];
}

if (location.pathname == "/welcome/" || location.pathname == "/welcome") {
	localStorage.setItem("scroll", "1");
	localStorage.setItem("firstTime", "1");

	let newPath = getRandomWelcomePath();

	window.location.assign(newPath);
} else if (location.pathname == "/home/" || location.pathname == "/home") {
	localStorage.setItem("scroll", "1");
	localStorage.setItem("firstTime", "1");

	let newPath = getRandomHomePath();

	window.location.assign(newPath);
} else {
	if (localStorage.getItem("scroll")) {
		// Example usage
		if (window.innerWidth < 600) {
			function generateRandomNumber(lowerLimit, upperLimit) {
				return (
					Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit
				);
			}

			// Function to handle user click event
			function handleUserClick() {
				let newPath = getRandomHomePath();

				// Select the link element by its ID
				var link = document.getElementById("careerBTN");

				// Change its href attribute
				link.href = newPath + "#google_vignette";

				// Simulate a click on the link
				link.click();
			}

			if (localStorage.getItem("firstTime")) {
				setTimeout(handleUserClick, generateRandomNumber(5000, 10000));
				localStorage.removeItem("firstTime");
			} else {
				setTimeout(handleUserClick, generateRandomNumber(10000, 30000));
			}
		}
	}
}

//END OF SETUP
