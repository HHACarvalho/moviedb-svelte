<script>
    import Item from "$lib/item.svelte";

    export let itemArray;
</script>

<section>
    <div class="item-list">
        {#if itemArray.error}
            <h1>{itemArray.error}</h1>
        {:else}
            {#each itemArray.data as obj}
                <Item item={obj} />
            {/each}
        {/if}
    </div>
</section>

<style>
    .item-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
    }

    h1 {
        margin: 0 auto;
    }
</style>
