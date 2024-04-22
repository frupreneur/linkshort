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

	let redirectURL = false;
	const source = context.url.searchParams.get("utm_source");

	if (source == "facebook") {
		return Response.redirect(
			`https://travel.photoconvertinto20kb.com/usa-canada-visa-requirements-jobs-loans-programs-immigrants`,
			301
		);
	}
	if (source == "canada-travel-guide") {
		return Response.redirect(
			`https://careers.englishcompositions.com/home/`,
			301
		);
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

	/**
	 * You may also redirect using `context.redirect` as shown below:
	 * =========================================
	 * return context.redirect("/redirected", 302);
	 * =========================================
	 * Note that this only works in SSR mode
	 */

	return next();
});
