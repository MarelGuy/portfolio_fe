<script lang="ts">
    import { routeIndex } from "../scripts/global";

    export let active: number;
    export let navLinkData: Route;

    const isActive = (activeLocal: number, path: number): [string, string] => {
        if (activeLocal === path)
            return [
                "col-span-1 text-3xl text-navbar_text_active",
                "mx-auto w-52 border-2 border-solid rounded-full bg-navbar_bg_active py-2",
            ];
        else return ["col-span-1 text-3xl text-gray-300", "py-2"];
    };

    const navigateToPath = (index: number) => {
        routeIndex.set(index);
    };
</script>

<button
    class={isActive(active, navLinkData.index)[0]}
    on:click={() => navigateToPath(navLinkData.index)}
>
    <p class={isActive(active, navLinkData.index)[1]}>{navLinkData.title}</p>
</button>
