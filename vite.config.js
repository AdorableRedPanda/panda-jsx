import { defineConfig } from 'vite';

export default defineConfig(({ mode, ...rest }) => {
    const isDev =  mode === 'dev';
    return ({
        base: '',
        root: './src',
        build: {
            outDir: '../dist',
            lib: {
                name: 'panda-jsx',
                entry: 'index.ts',
                formats: ['es'],
            },
            minify: !isDev,
            sourcemap: isDev && 'inline'
        },
    })
});