<script lang="ts">
    import Item from "$lib/item.svelte";

    export let itemArray;
</script>

<div class="movie-list">
    {#each itemArray as movie}
        <Item />
    {/each}
</div>

<style>
    .movie-list {
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: flex-start;
        width: 100%;
    }
</style>
