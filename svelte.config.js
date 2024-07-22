import { sveltekit } from "@sveltejs/kit/vite";
import adapter from '@sveltejs/adapter-netlify';
import { sveltePreprocess } from 'svelte-preprocess';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, process.cwd());

/** @type {import('@sveltejs/kit').Config} */
const config = {
  plugins: [sveltekit()],
  preprocess: [sveltePreprocess({})],
  define: {
    'process.env': process.env,
  },
  kit: {
    adapter: adapter({
      edge: false,
      split: false
    })
  }
};

export default config;
