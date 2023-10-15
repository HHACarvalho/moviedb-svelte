<div class="item">
    <img class="item-poster" src="indiana3.jpg" alt="indiana3" />
    <div class="item-title-wrapper">
        <p class="item-title margin-zero">Indiana Jones and the Last Crusade</p>
    </div>
</div>

<style>
    .item {
        width: calc(20% - 8px);
    }

    .item-poster {
        border-radius: 10px 10px 0 0;
        vertical-align: middle;
        width: 100%;
    }

    .item-title-wrapper {
        background-color: var(--dark-blue);
        border-bottom: 5px solid var(--darker-blue);
        border-radius: 0 0 10px 10px;
        padding: 8px 0 6px 0;
    }

    .item-title {
        color: var(--text-white);
        padding: 0 12px;
        text-align: center;

        line-height: 1.3em;
        max-height: 2.6em;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>
