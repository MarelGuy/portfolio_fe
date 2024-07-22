import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess()],
  define: {
    'process.env': process.env,
  },
  compilerOptions: {
    enableSourcemap: true
  },
  kit: {
    adapter: adapter({
      edge: false,
      split: false
    })
  }
};

export default config;
