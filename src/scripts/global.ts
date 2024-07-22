import { writable, type Writable } from "svelte/store";

export const whichPage: Writable<string> = writable("home");