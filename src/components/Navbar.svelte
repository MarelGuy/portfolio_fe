<script lang="ts">
    import { routeIndex, possibleRoutes } from "../scripts/global";
    import Navlink from "./Navlink.svelte";

    import "../styles/Navbar.scss";

    let active: number;

    routeIndex.subscribe((value) => {
        active = value;
    });
</script>

<div class="bg-black min-h-24 h-1/4 pt-[5vh] pb-[6vh] font-bold">
    <section
        class="grid grid-cols-4 text-center pt-4 mx-auto w-[60vw] sticky top-0"
    >
        {#each possibleRoutes as possibleRoute}
            <Navlink {active} navLinkData={possibleRoute} />
        {/each}

        <a
            class="col-span-1 text-3xl text-gray-300"
            href={import.meta.env.VITE_API_URL + "/page/cv"}
            target="_blank"
        >
            CV
        </a>
    </section>
</div>
