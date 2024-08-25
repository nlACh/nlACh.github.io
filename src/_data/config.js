export default {
	projectName: "Nilayan Paul",
	description: "My Site",
	shortName: "nlplSite",
	domain:
		process.env.ELEVENTY_RUN_MODE == "serve" ? "http://localhost:8080" : "https://example.com",
	robots: "index, follow",
	themeColor: "#FFFFFF",
	backgroundColor: "#FFFFFF",
	author: {
		name: "N Paul",
		email: "nlpl931@gmail.com",
	},
	identity: [
		{
			rel: "me",
			url: "nlach.github.io",
		},
	],

};
