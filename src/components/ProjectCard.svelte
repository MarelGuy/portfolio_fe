<script lang="ts">
    export let data: any;
</script>

<div class="grid grid-cols-7 w-[80vw] h-[55vh] my-[20vh] mx-auto">
    <div class="col-span-3 grid grid-rows-5">
        <div class="row-span-1">
            <h1 class="text-center center-y">
                <!-- h_1 -->
                {data.h_1}
            </h1>
        </div>
        <div
            class="row-span-4 grid grid-rows-3 border-t-2 border-r-2 border-gray-600"
        >
            <div class="row-span-1">
                <h2 class="text-center center-y">
                    <!-- h_2 -->
                    {data.h_2}
                </h2>
            </div>
            <div class="row-span-2 grid grid-cols-3">
                <div class="col-span-1">
                    <il>
                        <!-- li_1 -->
                        {#each data.li_1 as li_item}
                            <li>{li_item}</li>
                        {/each}
                    </il>
                </div>
                <div class="col-span-2">
                    <p>
                        <il>
                            <!-- links -->
                            {#each data.links as li_item}
                                <a
                                    href={li_item}
                                    class="active:text-gray-500 hover:text-gray-400"
                                    target="_blank"
                                >
                                    <li>{li_item.slice(12)}</li>
                                </a>
                            {/each}
                        </il>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-span-4">
        <p class="text-center my-auto center-y">
            <!-- p_1 -->
            {data.p_1}
        </p>
    </div>
</div>
