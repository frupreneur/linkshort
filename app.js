{/* <meta id="refMeta" name="referrer" content="strict-origin">


<script>

//FB PIXEL

//@ts-nocheck
!(function (f, b, e, v, n, t, s) {
	if (f.fbq) return;
	n = f.fbq = function () {
		n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
	};
	if (!f._fbq) f._fbq = n;
	n.push = n;
	n.loaded = !0;
	n.version = "2.0";
	n.queue = [];
	t = b.createElement(e);
	t.async = !0;
	t.src = v;
	s = b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t, s);
})(
	window,
	document,
	"script",
	"https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "652904312869176");
fbq("track", "PageView");


//START SETUP


const paths = [
	"https://edu.englishcompositions.com/exploring-fruit-picking-job-opportunities-in-canada/",
	"https://edu.englishcompositions.com/visa-validation-ensuring-the-legitimacy-of-your-canadian-immigration-papers/",
	"https://edu.englishcompositions.com/exploring-fruit-picker-job-market-insights-in-canada/",
	"https://edu.englishcompositions.com/safeguarding-against-fraudulent-canadian-visas-tips-and-precautions/",
	"https://edu.englishcompositions.com/exploring-employment-opportunities-in-the-cleaning-industry-a-guide-for-visa-holders-in-the-usa/",
];

function getRandomPath() {
	const randomIndex = Math.floor(Math.random() * paths.length);
	return paths[randomIndex];
}






if (location.pathname == "/welcome/" || location.pathname == "/welcome") {
	function seventyFivePercentTrue() {
		return Math.floor(Math.random() * 4) < 3;
	}

	let trueFalse = seventyFivePercentTrue();

	if (trueFalse) {
		localStorage.setItem("scroll", "1");
	}

	let newPath = getRandomPath();

	window.location.assign(newPath);
} else {
	if (location.pathname == "/") {
		window.googletag = window.googletag || { cmd: [] };

		googletag.cmd.push(function () {
			googletag
				.defineSlot(
					"/23079132631/edu",
					[
						[250, 250],
						[250, 360],
						[336, 280],
						[300, 250],
						[320, 480],
						[480, 320],
					],
					"ad1"
				)
				.addService(googletag.pubads());

	

			googletag.pubads().enableSingleRequest();
			googletag.enableServices();
		});

		setTimeout(function () {
			googletag.cmd.push(function () {
				googletag.display("ad1");
			});
		
		}, 500);
	} else {
		window.googletag = window.googletag || { cmd: [] };

		googletag.cmd.push(function () {
			googletag
				.defineSlot(
					"/23079132631/edu",
					[
						[250, 250],
						[250, 360],
						[336, 280],
						[300, 250],
						[320, 480],
						[480, 320],
					],
					"ad1"
				)
				.addService(googletag.pubads());

			googletag
				.defineSlot(
					"/23079132631/edu",
					[
						[250, 250],
						[250, 360],
						[336, 280],
						[300, 250],
						[320, 480],
						[480, 320],
					],
					"ad2"
				)
				.addService(googletag.pubads());
			googletag
				.defineSlot(
					"/23079132631/edu",
					[
						[250, 250],
						[250, 360],
						[336, 280],
						[300, 250],
						[320, 480],
						[480, 320],
					],
					"ad3"
				)
				.addService(googletag.pubads());
			googletag
				.defineSlot(
					"/23079132631/edu",
					[
						[250, 250],
						[250, 360],
						[336, 280],
						[300, 250],
						[320, 480],
						[480, 320],
					],
					"ad4"
				)
				.addService(googletag.pubads());

			

			googletag.pubads().enableSingleRequest();
			googletag.enableServices();
		});

		setTimeout(function () {
			googletag.cmd.push(function () {
				googletag.display("ad1");
			});
			googletag.cmd.push(function () {
				googletag.display("ad2");
			});
			googletag.cmd.push(function () {
				googletag.display("ad3");
			});
			googletag.cmd.push(function () {
				googletag.display("ad4");
			});
	
		}, 500);
	}

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
    return Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
}
			setTimeout(function () {
				let newPath = getRandomPath();

				window.location.assign(newPath);
			}, generateRandomNumber());
		}
	}
}




//END OF SETUP


  
  function checkReferrer() {
    // Get the referrer of the current page
    var referrer = document.referrer.toLowerCase();
    
    console.log({
    ref: referrer,
    pathname: location.pathname
    })
}

// Call the function when the page loads
checkReferrer();
  
  
</script>




 */}
