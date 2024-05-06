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

// 2

{
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
		"/sweeping-success-achieving-employment-as-a-cleaner-in-the-usa-with-visa-support/",
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
						Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) +
						lowerLimit
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
					setTimeout(handleUserClick, generateRandomNumber(10000, 20000));
				}
			}
		}
	}

	//END OF SETUP
}

// 3

{
	//START SETUP
	const PATHS = [
		"/exploring-fruit-picker-job-market-insights-in-canada/",
		"/sweeping-success-achieving-employment-as-a-cleaner-in-the-usa-with-visa-support/",
	];

	function getRandomPath() {
		const filteredHomePaths = PATHS.filter((x) => x != location.pathname);
		const randomIndex = Math.floor(Math.random() * filteredHomePaths.length);
		return filteredHomePaths[randomIndex];
	}

	if (location.pathname == "/home/" || location.pathname == "/home") {
		localStorage.setItem("scroll", "1");
		localStorage.setItem("firstTime", "1");

		let newPath = getRandomPath();

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

			function handleUserClick() {
				let newPath = getRandomPath();

				// Select the link element by its ID
				var link = document.getElementById("careerBTN");

				// Change its href attribute
				link.href = newPath + "#google_vignette";

				// Simulate a click on the link
				link.click();
			}

			function generateRandomNumber(lowerLimit = 10000, upperLimit = 20000) {
				return (
					Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit
				);
			}

			if (localStorage.getItem("firstTime")) {
				setTimeout(handleUserClick, generateRandomNumber(5000, 6000));

				localStorage.removeItem("firstTime");
			} else {
				setTimeout(handleUserClick, generateRandomNumber());
			}
		}
	}

	//END OF SETUP
}

// when user tries to scroll show vignette and navigate

{
	//START SETUP
	const PATHS = [
		"/exploring-fruit-picker-job-market-insights-in-canada/",
		"/sweeping-success-achieving-employment-as-a-cleaner-in-the-usa-with-visa-support/",
	];

	function getRandomPath() {
		const filteredHomePaths = PATHS.filter((x) => x != location.pathname);
		const randomIndex = Math.floor(Math.random() * filteredHomePaths.length);
		return filteredHomePaths[randomIndex];
	}

	if (location.pathname == "/home/" || location.pathname == "/home") {
		localStorage.setItem("firstTime", "yes");

		let newPath = getRandomPath();

		window.location.assign(newPath);
	} else {
		if (localStorage.getItem("firstTime") && window.innerWidth < 600) {
			function handleUserClick() {
				let newPath = getRandomPath();
				// Select the link element by its ID
				var link = document.getElementById("careerBTN");

				// Change its href attribute
				link.href = newPath + "#google_vignette";

				// Simulate a click on the link
				link.click();

				// Remove the scroll event listener after it's triggered once
				document.body.removeEventListener("scroll", handleUserClick);
				localStorage.removeItem("firstTime");
			}

			// Add event listener to the scroll event on the document body
			document.body.addEventListener("scroll", handleUserClick);
		}
	}

	//END OF SETUP
}
