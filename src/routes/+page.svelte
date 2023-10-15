<script>
    import MovieList from "$lib/item-display.svelte";

    const movieArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
</script>

<section>
    <MovieList itemArray={movieArray} />
</section>
