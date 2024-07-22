<script lang="ts">
    import { whichPage } from "../scripts/global";

    // Page checking
    let active: string;

    whichPage.subscribe((value) => {
        active = value;
    });
</script>

<svelte:head>
    <title>{active}</title>
</svelte:head>
<div class="grid grid-cols-4 text-center pt-4 mx-auto w-[60vw] sticky top-0">
    {#if active === "home"}
        <a
            class="nav_item col-span-1 active:text-gray-300 text-gray-500"
            href="/"
        >
            Home
        </a>
    {:else}
        <a
            class="nav_item col-span-1 active:text-gray-500 hover:text-gray-400 text-gray-300"
            href="/"
        >
            Home
        </a>
    {/if}

    {#if active === "aboutme"}
        <a
            class="nav_item col-span-1 active:text-gray-300 text-gray-500"
            href="/aboutme"
        >
            About me
        </a>
    {:else}
        <a
            class="nav_item col-span-1 active:text-gray-500 hover:text-gray-400 text-gray-300"
            href="/aboutme"
        >
            About me
        </a>
    {/if}

    {#if active === "projects"}
        <a
            class="nav_item col-span-1 active:text-gray-300 text-gray-500"
            href="/projects"
        >
            Projects
        </a>
    {:else}
        <a
            class="nav_item col-span-1 active:text-gray-500 hover:text-gray-400 text-gray-300"
            href="/projects"
        >
            Projects
        </a>
    {/if}

    <a
        class="nav_item col-span-1 active:text-gray-500 hover:text-gray-400 text-gray-300"
        href={import.meta.env.VITE_API_URL + "/page/cv"}
        target="_blank"
    >
        CV
    </a>
</div>
