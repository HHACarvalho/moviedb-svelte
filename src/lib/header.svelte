<header class="max-width">
    <a href="/"><h1>MovieDB</h1></a>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/search">Browse</a></li>
        <li><a href="/about">About</a></li>
    </ul>
    <input type="text" name="query" id="query" placeholder="Search" />
</header>

<style>
    header {
        margin: 0 auto 30px auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    h1 {
        margin-top: 34px;
        font-size: 50px;
        color: var(--cyan);
    }

    ul {
        margin-bottom: 20px;
        display: flex;
        gap: 10px;
    }

    li {
        padding: 0 10px;
    }

    a {
        font-size: 20px;
    }

    input {
        width: calc(30%);
        border: 2px solid var(--cyan);
        border-radius: 20px;
        padding: 10px 20px;
        font-size: 14px;
        background: transparent;
    }

    input:focus {
        outline: none;
    }
</style>
