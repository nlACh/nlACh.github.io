// Enable type definitions: https://www.11ty.dev/docs/config/#type-definitions
/** @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig */

import pluginNavigation from "@11ty/eleventy-navigation";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntax from "@11ty/eleventy-plugin-syntaxhighlight";
import lightningcss from "@11tyrocks/eleventy-plugin-lightningcss";

import { markdownParser } from "./lib/markdown.js";
import * as collections from "./etc/collections/index.js";
import * as filters from "./etc/filters/index.js";
import * as transforms from "./etc/transforms/index.js";

export default function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntax);
	eleventyConfig.addPlugin(lightningcss);

	// Libraries
	eleventyConfig.setLibrary("md", markdownParser());

	// Collections
	eleventyConfig.addCollection("posts", collections.posts);
	eleventyConfig.addCollection("feed", collections.feed);
	eleventyConfig.addCollection("conf_id", collections.conf_id);
	eleventyConfig.addCollection("preprint_id", collections.preprint_id);
	eleventyConfig.addCollection("publication_id", collections.publication_id);

	// Filters
	eleventyConfig.addFilter("dateToDMY", filters.dateToDMY);
	eleventyConfig.addFilter("dateToTime", filters.dateToTime);
	eleventyConfig.addFilter("dateToYear", filters.dateToYear);
	eleventyConfig.addFilter("dateToMonth", filters.dateToMonth);
	eleventyConfig.addFilter("dateToUNIX", filters.dateToUNIX);

	// Transforms
	eleventyConfig.addTransform("htmlmin", transforms.htmlmin);

	// Passthrough copies
	eleventyConfig.addPassthroughCopy({ "src/static/fonts": "/fonts" });
	eleventyConfig.addPassthroughCopy({ "src/static/favicons/*": "/" });
	eleventyConfig.addPassthroughCopy({ "src/media_global/*":"/media"});
	eleventyConfig.addPassthroughCopy({ "src/media_conf/*":"/content/pub_type/2-confs"});
	eleventyConfig.addPassthroughCopy({ "src/media_preprint/*":"/content/pub_type/3-preprints"});
	eleventyConfig.addPassthroughCopy({ "src/media_journal/*":"/content/pub_type/1-pubs"});

	// Watch targets
	eleventyConfig.addWatchTarget("./src/_styles/**/*.css");

	return {
		dir: {
			input: "src",
			output: "dist",
			data: "_data",
		},
		templateFormats: ["css", "html", "md", "njk", "11ty.js"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
}
