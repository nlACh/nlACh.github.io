export default {
	projectName: "Nilayan Paul",
	description: "Nilayan Paul - Senior Research Fellow specializing in quantum transport in nanoscale electronic devices, NEGF techniques, quantum computing, and semiconductor device fabrication at the University of Calcutta.",
	shortName: "nlplSite",
	domain:
		process.env.ELEVENTY_RUN_MODE == "serve" ? "http://localhost:8080" : "https://nlach.github.io",
	robots: "index, follow",
	themeColor: "#707070ff",
	backgroundColor: "#dadadaff",
	author: {
		name: "Nilayan Paul",
		email: "",
	},
	keywords: "quantum transport, nanoscale devices, NEGF, Non-Equilibrium Green's Function, quantum computing, semiconductor physics, quantum dots, nanowire FETs, finFETs, electron beam lithography, voltage-tunable quantum dots, charge qubit, resonant tunneling",
	identity: [
		{
			rel: "me",
			url: "https://nlach.github.io",
		},
	],
	og: {
		type: "website",
		locale: "en_US",
		image: {
			rel: "/media/chobi.png",
			alt: "Nilayan Paul"
		}
	},
	social: {
		googleScholar: "https://scholar.google.com/citations?user=dvUpRO4AAAAJ&hl=en",
		researchGate: "https://researchgate.net/profile/Nilayan-Paul"
	}
};
