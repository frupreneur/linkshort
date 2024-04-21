
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

if (location.pathname == "/home/") {
	function seventyFivePercentTrue() {
		return Math.floor(Math.random() * 4) < 3;
	}

	let trueFalse = seventyFivePercentTrue();

	if (trueFalse) {
		localStorage.setItem("show", "1");
	}

	//Post to send traffic to
	const paths = [
	"/nurturing-global-talent-a-comprehensive-guide-to-government-of-canada-scholarships-for-international-students/",
	"/a-comprehensive-guide-to-part-time-jobs-for-international-students-in-canada/",
	"/a-comprehensive-guide-to-jobs-with-visa-sponsorship-for-foreigners-in-the-usa/",
	"/relocating-to-canada-8-safe-ways-you-can-easily-move-to-canada/",
	"/restaurant-host-hostess-needed-in-canada-by-whistle-stop-holdings-ltd/",
	"/garbage-collection-job-available-just-for-you-in-canada-apply-now/",
	"/guides-to-get-your-canada-study-visa/",
	"/migrating-to-canada-as-a-caregiver-steps-to-follow_-apply-now/",
	"/guide-to-mortgage-loans-in-canada-available-just-for-you/",
	"/visa-sponsored-jobs-in-canada-2024-available-now-just-for-you/",
	"/meat-butchering-jobs-in-canada-with-visa-sponsorship-available-just-for-you/",
	"/unlocking-opportunities-hotel-jobs-in-canada-with-visa-sponsorship/",
	"/career-in-canada-with-visa-sponsorship-opportunities-as-a-building-maintenance-worker/",
];

function getRandomPath() {
    const randomIndex = Math.floor(Math.random() * paths.length);
    return paths[randomIndex];
}

let newPath = getRandomPath()
  
	//window.location.href = newPath
	
	let atag = document.createElement("a")
	atag.href= newPath
	atag.click()
} else {
	if (localStorage.getItem("show")) {
		// Function to check if viewport width is less than 600px
		function isViewportWidthLessThan600() {
			return window.innerWidth < 600;
		}

		// Example usage
		if (isViewportWidthLessThan600()) {
		
    		window.addEventListener('scroll', function() {
        // Get the current scroll position
          var scrollPosition = window.scrollY;
      
          // Check if the user has scrolled by 100px
          if (scrollPosition >= 200) {
              // If scrolled by 100px or more, hide the overflow
              document.body.style.overflow = 'hidden';
          } else {
              // If scrolled less than 100px, restore the overflow
              document.body.style.overflow = 'auto';
          }
        });

		
		}
	}
}

function checkReferrer() {
	// Get the referrer of the current page
	var referrer = document.referrer.toLowerCase();

	console.log({
		ref: referrer,
		pathname: location.pathname,
	});
}

// Call the function when the page loads
checkReferrer();
 





	// window.addEventListener("scroll", function () {
	// 	// Get the current scroll position
	// 	var scrollPosition = window.scrollY;

	// 	// Check if the user has scrolled by 100px
	// 	if (scrollPosition >= 200) {
	// 		// If scrolled by 100px or more, hide the overflow
	// 		document.body.style.overflow = "hidden";
	// 	} else {
	// 		// If scrolled less than 100px, restore the overflow
	// 		document.body.style.overflow = "auto";
	// 	}
	// });
