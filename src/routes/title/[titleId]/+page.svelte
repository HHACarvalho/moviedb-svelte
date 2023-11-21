<script>
    export let data;
</script>

<svelte:head>
    <title>{data.data.title}</title>
</svelte:head>

{#if data.error}
    <h1>{data.error}</h1>
{:else}
    <div class="pad top-pad">
        <h1>{data.data.title}</h1>
        <span>({data.data.year})</span>
    </div>
    <iframe
        width="960"
        height="542"
        src="https://www.youtube.com/embed/_nZdmwHrcnw"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
    />
    <div class="pad bottom-pad">
        <p>{data.data.synopsis}</p>
        <br />
        <p><strong>Director: </strong>{data.data.director}</p>
    </div>
{/if}

<style>
    .pad {
        padding: 15px;
        background-color: var(--dark-blue);
    }

    .top-pad {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px 10px 0 0;
    }

    .bottom-pad {
        margin-top: -4px;
        border-radius: 0 0 10px 10px;
        border-bottom: 5px solid var(--darker-blue);
    }
</style>
