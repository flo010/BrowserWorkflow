import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
	srcDir: "src",
	entrypointsDir: "entry",

	manifest: {
		chrome_url_overrides: {
			bookmarks: "bookmark.html",
		},
		permissions: ["tabs"],
	},
	vite: () => ({
		plugins: [react()],
	}),
});
