<script>
    import Item from "$lib/item.svelte";

    export let itemArray;
</script>

<section>
    <div class="item-list">
        {#each itemArray as obj}
            <Item item={obj} />
        {/each}
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
</style>
