import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { fileURLToPath, URL } from "url";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@", replacement: "/src" },
			{ find: "@assets", replacement: "/src/assets" },
		],
		/*
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
		},
		*/
		/*
		alias: [
			{
				find: "@",
				replacement: fileURLToPath(new URL("./src", import.meta.url)),
			},
			{
				find: "@assets",
				replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
			},
		],
		*/
	},
});
