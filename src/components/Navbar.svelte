<script lang="ts">
  import { fetchPage, lang, whichPage } from "../scripts/global";
  import { goto } from "$app/navigation";

  // Language checker & API Call
  let localLang: string;

  let data: Promise<any>;

  lang.subscribe((value) => {
    localLang = value;
    data = fetchPage(0, value);
  });

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
    <a class="nav_item col-span-1 active:text-gray-300 text-gray-500" href="/">
      home
    </a>
  {:else}
    <a
      class="nav_item col-span-1 active:text-gray-500 hover:text-gray-400 text-gray-300"
      href="/"
    >
      home
    </a>
  {/if}

  {#if active === "aboutme"}
    <a
      class="nav_item col-span-1 active:text-gray-300 text-gray-500"
      href="/aboutme"
    >
      {#await data}
        <p>. . .</p>
      {:then data}
        {data.nav.n_1}
      {/await}
    </a>
  {:else}
    <a
      class="nav_item col-span-1 active:text-gray-500 hover:text-gray-400 text-gray-300"
      href="/aboutme"
    >
      {#await data}
        <p>. . .</p>
      {:then data}
        {data.nav.n_1}
      {/await}
    </a>
  {/if}

  {#if active === "projects"}
    <a
      class="nav_item col-span-1 active:text-gray-300 text-gray-500"
      href="/projects"
    >
      {#await data}
        <p>. . .</p>
      {:then data}
        {data.nav.n_2}
      {/await}
    </a>
  {:else}
    <a
      class="nav_item col-span-1 active:text-gray-500 hover:text-gray-400 text-gray-300"
      href="/projects"
    >
      {#await data}
        <p>. . .</p>
      {:then data}
        {data.nav.n_2}
      {/await}
    </a>
  {/if}

  {#if localLang === "it"}
    <a
      class="nav_item col-span-1 active:text-gray-500 hover:text-gray-400 text-gray-300"
      href={import.meta.env.VITE_API_URL + "/page/cv"}
      target="_blank"
    >
      cv
    </a>
  {:else}
    <button
      class="nav_item col-span-1 active:text-gray-500 hover:text-gray-400 text-gray-300"
      on:click={() =>
        confirm(
          "Sorry! But an english CV is not ready yet, are you sure you want to see the italian CV?"
        ) == true
          ? goto(import.meta.env.VITE_API_URL + "/page/cv")
          : ""}
    >
      <p>cv</p>
    </button>
  {/if}
</div>
