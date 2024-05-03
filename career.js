//START SETUP

const paths = [
	"/a-comprehensive-guide-to-navigating-canadian-immigration/",
	"/cracking-the-canadian-code-essential-tips-for-successful-migration/",
	"/exploring-fruit-picking-jobs-for-foreigners-in-canada/",
	"/verifying-the-authenticity-of-canadian-visas/",
	"/job-search-in-the-usa-finding-opportunities-with-visa-assistance/",
	"/your-roadmap-to-canada-legal-pathways-for-migration/",
];

function getRandomPath() {
	const filteredPaths = paths.filter((x) => x != location.pathname);

	const randomIndex = Math.floor(Math.random() * filteredPaths.length);
	return filteredPaths[randomIndex];
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
			function generateRandomNumber() {
				return Math.floor(Math.random() * (30001 - 10000)) + 10000;
			}

			// Function to handle user click event
			function handleUserClick() {
				let newPath = getRandomPath();

				// Select the link element by its ID
				var link = document.getElementById("careerBTN");

				// Change its href attribute
				link.href = newPath + "#google_vignette";

				// Simulate a click on the link
				link.click();
			}

			if (localStorage.getItem("firstTime")) {
				setTimeout(handleUserClick, 6000);
				localStorage.removeItem("firstTime");
			} else {
				setTimeout(handleUserClick, generateRandomNumber());
			}
		}
	}
}

//END OF SETUP
