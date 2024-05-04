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
	let newPath = getRandomPath();

	window.location.assign(newPath);
}

//END OF SETUP
