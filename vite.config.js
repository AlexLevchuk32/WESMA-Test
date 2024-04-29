import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		open: true,
	},
	build: {
		// sourcemap: true,
		minify: true,
	},
	preview: {
		open: true,
	},
});
