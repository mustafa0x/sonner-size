import {svelte} from '@sveltejs/vite-plugin-svelte'

export default {
    publicDir: false,
    build: {
        minify: false,
        lib: {
            entry: 'src/main.js',
            formats: ['es'],
            fileName: (format) => `bundle.${format}.js`,
        },
    },
    plugins: [
        svelte(),
    ],
}
