import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		preact({
			prerender: { enabled: true },
		}),
	],
	base: "104-Eksamen-Prototype",
});
