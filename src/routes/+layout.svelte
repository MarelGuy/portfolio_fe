<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    import Navbar from "../components/Navbar.svelte";

    import "../styles/global.scss";

    onMount(() => {
        // Mobile check
        if (
            /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
                navigator.userAgent,
            )
        )
            window.location.href = `https://mobile.${import.meta.env.VITE_CURRENT_HOST}.com`;

        // Redirect
        page.subscribe((value) => {
            if (value.url.pathname != "/") window.location.href = "/";
        });
    });
</script>

<body>
    <Navbar />
    <slot />
</body>
