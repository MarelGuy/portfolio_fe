<script lang="ts">
    import { lang } from "../scripts/global";

    const changeToEn = () => lang.set("en");
    const changeToIt = () => lang.set("it");

    let localLang: String;

    lang.subscribe((value) => (localLang = value));
</script>

<div class="sticky bottom-6 ml-[94.5vw]">
    {#if localLang === "it"}
        <button on:click={() => changeToEn()}>
            <img src="/images/it.webp" width="40" alt="IT" />
        </button>
    {:else}
        <button on:click={() => changeToIt()}>
            <img src="/images/en.webp" width="40" alt="EN" />
        </button>
    {/if}
</div>
