<script>
    import "$lib/global.css";
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<Header />

<main class="max-width">
    <slot />
</main>

<Footer />

<style>
    main {
        margin: 0 auto 50px auto;
    }
</style>
