import { defineConfig } from 'vite';

export default defineConfig(({ mode, ...rest }) => {
    const isDev =  mode === 'dev';
    console.log(mode, rest)
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