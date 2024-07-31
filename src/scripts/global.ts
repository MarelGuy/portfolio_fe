import { writable, type Writable } from "svelte/store";

import home from "../routes/home/+page.svelte";
import aboutme from "../routes/aboutme/+page.svelte";
import projects from "../routes/projects/+page.svelte";

export const possibleRoutes: Route[] = [
    {
        title: "Home",
        page: home,
        index: 0
    },
    {
        title: "About me",
        page: aboutme,
        index: 1
    },
    {
        title: "Projects",
        page: projects,
        index: 2
    }
];

export const routeIndex: Writable<number> = writable(0);