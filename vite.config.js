import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import * as path from "path";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
        jsxRuntime: 'classic',
    }), svgrPlugin()],
    build: {
        outDir: 'build',
    },
    base: '/eportfolio/',
    server: {
        port: 3000,
    },
});