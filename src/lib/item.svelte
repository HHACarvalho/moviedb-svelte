<script>
    export let item;
</script>

<div class="item">
    <a href="/title/{item.id}">
        <img class="item-poster" src={item.poster} alt={item.id} />
        <div class="item-title-wrapper">
            <p class="item-title">{item.title}</p>
        </div>
    </a>
</div>

<style>
    .item {
        width: calc(20% - 8px);
    }

    a {
        display: block;
    }

    .item-poster {
        width: 100%;
        border-radius: 10px 10px 0 0;
        vertical-align: middle;
    }

    .item-title-wrapper {
        height: 2.6em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 0 10px 10px;
        border-bottom: 5px solid var(--darker-blue);
        padding: 8px 0 6px 0;
        background-color: var(--dark-blue);
    }

    .item-title {
        max-height: 2.6em;
        line-height: 1.3em;
        padding: 0 12px;
        text-align: center;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>
