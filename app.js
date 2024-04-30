//START SETUP
const welcomePaths = [
	"/exploring-fruit-picking-job-opportunities-in-canada/",
	"/visa-validation-ensuring-the-legitimacy-of-your-canadian-immigration-papers/",
	"/exploring-fruit-picker-job-market-insights-in-canada/",
	"/safeguarding-against-fraudulent-canadian-visas-tips-and-precautions/",
	"/exploring-employment-opportunities-in-the-cleaning-industry-a-guide-for-visa-holders-in-the-usa/",
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
		// Function to check if viewport width is less than 600px
		function isViewportWidthLessThan600() {
			return window.innerWidth < 600;
		}

		// Example usage
		if (isViewportWidthLessThan600()) {
			window.addEventListener("scroll", function () {
				// Get the current scroll position
				var scrollPosition = window.scrollY;

				// Check if the user has scrolled by 100px
				if (scrollPosition >= 200) {
					// If scrolled by 100px or more, hide the overflow
					document.body.style.overflow = "hidden";
				} else {
					// If scrolled less than 100px, restore the overflow
					document.body.style.overflow = "auto";
				}
			});

			function generateRandomNumber() {
				return Math.floor(Math.random() * (30001 - 10000)) + 10000;
			}
			setTimeout(function () {
				let newPath = getRandomWelcomePath();

				window.location.assign(newPath);
			}, generateRandomNumber());
		}
	}
}

//END OF SETUP
