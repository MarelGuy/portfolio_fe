<script lang="ts">
    import { browser } from "$app/environment";

    import { fetchPage, lang } from "../scripts/global";

    import ScrollDownButton from "../components/ScrollDownButton.svelte";

    // Language checker & API Call

    let data: Promise<any>;

    lang.subscribe((value) => {
        data = fetchPage(1, value);
    });

    // Window Hegith Calc
    let expVal: number;

    if (browser) {
        expVal = window.innerHeight;
    }
</script>

<div class="grid grid-cols-2 mt-44">
    <div class="col-span-1">
        <h1>
            {#await data}
                <p>. . .</p>
            {:then data}
                {data.home.h_1}
            {/await}
        </h1>
    </div>

    <div class="col-span-1 mt-5">
        <ScrollDownButton val={expVal} />
    </div>
</div>

<p class="mt-[100vh] mb-[40vh] text-center text-lg w-[50vw] mx-auto">
    {#await data}
        <p>. . .</p>
    {:then data}
        {data.home.p_1}
    {/await}
</p>
