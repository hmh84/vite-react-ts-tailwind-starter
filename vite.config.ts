import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		svgr({
			exportAsDefault: true,
		}),
		react(),
		tsconfigPaths(),
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	server: {
		host: true,
		port: 5000,
	},
});
