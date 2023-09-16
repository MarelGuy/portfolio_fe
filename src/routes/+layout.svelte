<script lang="ts">
  import { page } from "$app/stores";
  import { whichPage } from "../scripts/global";

  import "../app.scss";

  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import LanguageChanger from "../components/LanguageChanger.svelte";
  import { onDestroy } from "svelte";

  page.subscribe(async (value) => {
    if (value.route && value.route.id)
      whichPage.set(
        value.route.id === "/" ? "home" : value.route.id.substring(1)
      );
  });
</script>

<body>
  <!-- <div class="h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
    <div class="h-64" />
  </div> -->
  <div class="container mx-auto">
    <Navbar />
    <slot />
  </div>
  <LanguageChanger />
  <div class="container mx-auto">
    <Footer />
  </div>
</body>
