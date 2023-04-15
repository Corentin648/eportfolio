import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import * as path from "path";


const useCredentialsPlugin = () => {
    return {
        name: 'html-transform',
        transformIndexHtml(html) {
            return html.replace(
                'crossorigin',
                '',
            );
        },
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
        jsxRuntime: 'classic',
    }), svgrPlugin(), useCredentialsPlugin()],
    build: {
        outDir: 'build',
    },
    server: {
        port: 3000,
    },
});