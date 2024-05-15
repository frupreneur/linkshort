
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
				console.log("Vignette Trigger");
				// Remove the scroll event listener after it's triggered once
				window.removeEventListener("scroll", handleUserClick);
				localStorage.removeItem("firstTime");

				let newPath = getRandomPath();
				// Select the link element by its ID
				var link = document.getElementById("careerBTN");

				// Change its href attribute
				link.href = newPath + "#google_vignette";

				// Simulate a click on the link
				link.click();
			}

			setTimeout(() => {
				// Add event listener to the scroll event on the document body
				window.addEventListener("scroll", handleUserClick);
			}, 5000);
		}
	}

	//END OF SETUP
}

// adx setup
{
	window.googletag = window.googletag || { cmd: [] };

	googletag.cmd.push(function () {
		googletag
			.defineSlot(
				"/22476809480/englishcompositions.com/ENGcomp_top",
				[
					[300, 250],
					[240, 400],
					[480, 320],
					[300, 600],
					[336, 280],
					[250, 360],
					[320, 480],
					[580, 400],
				],
				"div-gpt-ad-1712481036906-0"
			)
			.addService(googletag.pubads());

		googletag
			.defineSlot(
				"/22476809480/englishcompositions.com",
				[
					[200, 200],
					[120, 600],
					[336, 280],
					[250, 250],
					[240, 400],
					[300, 600],
					[480, 320],
					[160, 600],
					[300, 250],
					[200, 446],
					[250, 360],
					[320, 480],
				],
				"div-gpt-ad-1708116205873-0"
			)
			.addService(googletag.pubads());

		googletag
			.defineSlot(
				"/22476809480/englishcompositions.com/ENGcomp_Content1",
				[
					[200, 446],
					[240, 400],
					[250, 250],
					[336, 280],
					[200, 200],
					[320, 480],
					[120, 600],
					[250, 360],
					[160, 600],
					[300, 250],
					[480, 320],
					[300, 600],
				],
				"div-gpt-ad-1708216981332-0"
			)
			.addService(googletag.pubads());

		googletag
			.defineSlot(
				"/22476809480/englishcompositions.com/ENGcomp_Content2",
				[
					[320, 480],
					[300, 600],
					[336, 280],
					[250, 250],
					[250, 360],
					[200, 200],
					[200, 446],
					[120, 600],
					[300, 250],
					[240, 400],
					[160, 600],
					[480, 320],
				],
				"div-gpt-ad-1708217083085-0"
			)
			.addService(googletag.pubads());

		googletag.pubads().enableSingleRequest();
		googletag.enableServices();
	});

	const adUnitStrings = [
		"div-gpt-ad-1708116205873-0",
		"div-gpt-ad-1708216981332-0",
		"div-gpt-ad-1708217083085-0",
	];

	setTimeout(function () {
		// (adsbygoogle = window.adsbygoogle || []).push({});

		adUnitStrings.forEach((adUnitString) => {
			googletag.cmd.push(function () {
				googletag.display(adUnitString);
			});
		});
	}, 500);
}

{
	
}
