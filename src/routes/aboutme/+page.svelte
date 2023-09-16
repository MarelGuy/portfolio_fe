<script lang="ts">
    import { fetchPage, lang } from "../../scripts/global";

    // Language checker & API Call
    let data: Promise<any>;

    lang.subscribe((value) => {
        data = fetchPage(2, value);
    });
</script>

<div class="grid grid-cols-2 w-[70vw] mx-auto my-[10vh] mb-[7.2vh] text-center">
    <div class="col-span-1 grid grid-rows-12 mx-auto">
        <div class="row-span-10">
            <img
                class="h-auto max-w-full"
                src="http://placekitten.com/g/400/600"
                alt=""
            />
        </div>
        <div class="row-span-2">
            <p class="text-gray-700 hover:text-gray-400">
                {#await data}
                    <p>. . .</p>
                {:then data}
                    {data.aboutme.p_2}
                {/await}
                <br />
                {#await data then data}
                    {data.aboutme.p_3}
                {/await}
            </p>
        </div>
    </div>
    <div class="col-span-1 grid grid-rows-3">
        <div class="row-span-2">
            {#await data}
                <p>. . .</p>
            {:then data}
                <p class="center-y">{data.aboutme.p_1}</p>
            {/await}
        </div>
        <div class="row-span-1 grid grid-rows-2">
            <div class="row-span-1 grid grid-cols-2">
                <div class="col-span-1">
                    <p class="center-y">discord: marel8077</p>
                </div>
                <div class="col-span-1">
                    <p class="center-y">email: irertnuc.loris@gmail.com</p>
                </div>
            </div>
            <div class="row-span-1 grid grid-cols-2">
                <div class="col-span-1">
                    <a
                        class="center-y active:text-gray-500 hover:text-gray-400"
                        href="https://www.linkedin.com/in/lc0/"
                        target="_blank">linkedin.com/in/lc0/</a
                    >
                </div>
                <div class="col-span-1">
                    <a
                        class="center-y active:text-gray-500 hover:text-gray-400"
                        href="https://www.github.com/MarelGuy"
                        target="_blank">github.com/MarelGuy/</a
                    >
                </div>
            </div>
        </div>
    </div>
</div>
