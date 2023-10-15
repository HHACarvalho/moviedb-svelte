<header class="max-width">
    <a href="/"><h1 class="text-cyan">MovieDB</h1></a>
    <!-- <nav>
        <a class="text-cyan" href="/about">About</a>
    </nav> -->
    <input type="text" name="query" id="query" placeholder="Search" />
</header>

<style>
    header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto 20px auto;
    }

    h1 {
        color: var(--cyan);
    }

    input[type="text"] {
        color: var(--cyan);
        background: transparent;
        border: 2px solid var(--cyan);
        border-radius: 20px;
        padding: 10px;
        width: calc(20% - 8px);
    }

    input[type="text"]:focus {
        border: 2px solid var(--purple);
        outline: none;
    }
</style>
