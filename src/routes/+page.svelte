<script lang="ts">
    import { routeIndex, possibleRoutes } from "../scripts/global";

    let currentRoute: Route;

    routeIndex.subscribe((value) => {
        currentRoute = possibleRoutes[value];
    });
</script>

<svelte:head>
    <title>{currentRoute.title}</title>
</svelte:head>

<svelte:component this={currentRoute.page} />
