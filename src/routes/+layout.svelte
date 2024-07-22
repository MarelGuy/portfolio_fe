<script lang="ts">
    import { page } from "$app/stores";
    import { whichPage } from "../scripts/global";

    import "../styles/global.scss";

    import Navbar from "../components/Navbar.svelte";

    page.subscribe(async (value) => {
        if (value.route && value.route.id)
            whichPage.set(
                value.route.id === "/" ? "home" : value.route.id.substring(1),
            );
    });
</script>

<body>
    <div class="container mx-auto">
        <Navbar />
        <slot />
    </div>
</body>
