<script>
    import ItemDisplay from "$lib/item-display.svelte";

    export let data;
</script>

<ItemDisplay itemArray={data.movieArray} />
