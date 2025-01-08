/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig as defineVitestConfig } from 'vitest/config';

const viteConfig = defineViteConfig({
	plugins: [tsconfigPaths(), react()],
});

const vitestConfig = defineVitestConfig({
	test: {
		environment: 'jsdom', // 'happy-dom' or 'jsdom' or 'node'
		globals: true,
		setupFiles: ['src/setupTests.js'],
	},
});

export default mergeConfig(viteConfig, vitestConfig);
