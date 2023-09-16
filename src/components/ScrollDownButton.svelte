<script lang="ts">
    export let val: number;

    const ScrollDown = () => {
        window.scrollTo({
            top: val,
            behavior: "smooth",
        });
    };
</script>

<button on:click={() => ScrollDown()}>
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 46 39"
            fill="none"
        >
            <path d="M23 38L1.34937 0.5L44.6506 0.5L23 38Z" stroke="white" />
        </svg>
    </div>
</button>
