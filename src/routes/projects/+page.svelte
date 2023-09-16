<script lang="ts">
    import ProjectCard from "../../components/ProjectCard.svelte";
    import { fetchPage, lang } from "../../scripts/global";

    // Language checker & API Call
    let idk = [
        {
            h_1: "",
            h_2: "",
            li_1: [],
            links: [],
            p_1: "",
        },
        {
            h_1: "",
            h_2: "",
            li_1: [],
            links: [],
            p_1: "",
        },
    ];

    let data: any;

    lang.subscribe((value) => {
        data = fetchPage(3, value);
    });
</script>

{#await data}
    {#each idk as project}
        <ProjectCard data={project} />
    {/each}
{:then data}
    {#each data.projects.arr as project}
        <ProjectCard data={project} />
    {/each}
{/await}
