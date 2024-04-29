

if(location.pathname == "/welcome/"){
window.location.href = "/";

}else if(location.pathname == "/"){
 window.googletag = window.googletag || {cmd: []};
  
  googletag.cmd.push(function() {
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
				"adtop"
			)
			.addService(googletag.pubads());
    
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
  

  
  setTimeout(function(){
    googletag.cmd.push(function() { googletag.display('ad1'); });
    googletag.cmd.push(function() { googletag.display('adtop'); });
  }, 500)
}else{
 window.googletag = window.googletag || {cmd: []};
  
  googletag.cmd.push(function() {
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
				"adtop"
			)
			.addService(googletag.pubads());
    
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
  

  
  setTimeout(function(){
    googletag.cmd.push(function() { googletag.display('ad1'); });
    googletag.cmd.push(function() { googletag.display('ad2'); });
    googletag.cmd.push(function() { googletag.display('ad3'); });
    googletag.cmd.push(function() { googletag.display('ad4'); });
   googletag.cmd.push(function() { googletag.display('adtop'); });
  }, 500)}




 
  
  
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