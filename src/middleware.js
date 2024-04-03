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
	const source = context.url.searchParams.get("source");

  if(source == "facebook"){
		return Response.redirect(
				`${pathsToQuery}/${getRandomNumber()}?travel-usa-canada=${getRandomQuery()}`,
			302
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
