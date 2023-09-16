import { writable, type Writable } from "svelte/store";

export const lang: Writable<string> = writable("it");
export const whichPage: Writable<string> = writable("home");


export async function fetchPage(page: number, language: string) {
    const headers = new Headers();
    headers.set("lang", language);
    headers.set("page", "" + page);

    const data = await fetch(import.meta.env.VITE_API_URL + "/page/get_page", {
        method: 'GET',
        headers: headers,
    });

    return data.json();
}
