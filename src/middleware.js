import { defineMiddleware } from "astro/middleware";
import { getRandomNumber, getRandomQuery } from "./utils";

import { pathsToQuery } from "./../db/db.js";

export const onRequest = defineMiddleware((context, next) => {
	/**
	 * The middleware runs every time a page or endpoint is about to be rendered.
	 * Only redirect if this is the home page
	 */

	/**
	 * Construct a full URL by passing `context.url` as the base URL
	 */

	// Return the element at the random index

	const source = context.url.searchParams.get("utm_source");

	if (source == "facebook") {
		return Response.redirect(
			`https://travel.photoconvertinto20kb.com/usa-canada-visa-requirements-jobs-loans-programs-immigrants`,
			301
		);
	}
	if (source == "breast-cancer-guide") {
		return Response.redirect(
			`https://englishcompositions.com/exploring-early-signs-and-indicators-of-breast-cancer/`,
			301
		);
	}
	if (source == "breast-cancer-symptoms") {
		return Response.redirect(`https://lifestyle.jobynet.com/homepage/`, 301);
	}
	if (source == "canada-travel-guide") {
		return Response.redirect(`https://jobynet.com/homepage/`, 301);
	}
	if (source == "canada-pathway") {
		return Response.redirect(
			`https://careers.englishcompositions.com/home/`,
			301
		);
	}
	if (source == "canada-pathway-guide") {
		return Response.redirect(`https://jobynet.com/homepage`, 301);
	}
	if (source == "canada-relocation-guide") {
		return Response.redirect(`https://edu.englishcompositions.com/home/`, 301);
	}
	if (source == "canada-migration-guide") {
		return Response.redirect(`https://edu.englishcompositions.com/home/`, 301);
	}
	if (source == "canada-step-by-step-guide") {
		return Response.redirect(`https://axfest.com/home`, 301);
	}

	if (source == "canada-guide") {
		return Response.redirect(
			`https://careers.englishcompositions.com/home/`,
			301
		);
	}

	if (source == "timebucks") {
		return Response.redirect(
			`https://edu.englishcompositions.com/welcome/`,
			301
		);
	}
	if (source == "timebucks1") {
		return Response.redirect(
			`https://edu.englishcompositions.com/welcome/`,
			301
		);
	}
	if (source == "timebucks2") {
		return Response.redirect(
			`https://edu.englishcompositions.com/welcome/`,
			301
		);
	}
	if (source == "timebucks3") {
		return Response.redirect(
			`https://edu.englishcompositions.com/welcome/`,
			301
		);
	}
	if (source == "mind-care-guide") {
		return Response.redirect(
			`https://mindcareguide.com/thriving-with-depression-practical-approaches-to-mental-health-management/`,
			301
		);
	}
	if (source == "ca-migration-guide") {
		return Response.redirect(`https://jobynet.com/homepage`, 301);
	}
	if (source == "jobynet-google-1") {
		return Response.redirect(
			`https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fjobynet.com%2Fmigrate-to-canada-with-family-visa-sponsorship-school-and-job-offers%2F%0D%0AOR+%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-illinois-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-illinois-complete-guide%2F%0D%0AOR+%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-pennsylvania-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-pennsylvania-complete-guide%2F%0D%0AOR%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-california-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-california-complete-guide%2F%0D%0AOR%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-florida-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-florida-complete-guide%2F%0D%0AOR%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-texas-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-texas-complete-guide%2F&sca_esv=4aa4cadb6d3a9fe9&sxsrf=ADLYWIItFh9fSAIfW3RRDZeVwp9KxCbVzg%3A1719830390816&ei=doeCZu2_MY7oi-gP9-iHsA4&ved=0ahUKEwjt0pK804WHAxUO9AIHHXf0AeYQ4dUDCBA&uact=5&oq=site%3Ahttps%3A%2F%2Fjobynet.com%2Fmigrate-to-canada-with-family-visa-sponsorship-school-and-job-offers%2F%0D%0AOR+%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-illinois-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-illinois-complete-guide%2F%0D%0AOR+%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-pennsylvania-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-pennsylvania-complete-guide%2F%0D%0AOR%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-california-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-california-complete-guide%2F%0D%0AOR%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-florida-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-florida-complete-guide%2F%0D%0AOR%0D%0Asite%3Ahttps%3A%2F%2Fjobynet.com%2Fjobs-in-texas-u-s-a-with-visa-sponsorship-for-foreigners-immigrant-jobs-in-usa-texas-complete-guide%2F`,
			301
		);
	}
	if (source == "1") {
		return Response.redirect(`https://visa.englishcompositions.com/home`, 301);
	}
	if (source == "2") {
		return Response.redirect(`https://www.opayweb.com/`, 301);
	}
	if (source == "3") {
		return Response.redirect(
			`https://visa.englishcompositions.com/get-started/`,
			301
		);
	}
	if (source == "4") {
		return Response.redirect(
			`https://visa.englishcompositions.com/get-started/`,
			301
		);
	}

	// ahachat
	if (source == "aha-1") {
		return Response.redirect(
			`https://visa.englishcompositions.com/home`,
			301
		);
	}


	/**
	 * You may also redirect using `context.redirect` as shown below:
	 * =========================================
	 * return context.redirect("/redirected", 302);
	 * =========================================
	 * Note that this only works in SSR mode
	 */

	return next();
});

// * recovery Email
// * phone Number
// * IP or device
// * Bank Account
