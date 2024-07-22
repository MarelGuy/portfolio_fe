<script lang="ts">
    import { page } from "$app/stores";

    import Navbar from "../components/Navbar.svelte";
</script>

<body>
    <div class="container mx-auto">
        <Navbar />
        <slot />
    </div>
</body>
