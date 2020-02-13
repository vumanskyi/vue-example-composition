<template>
    <div class="list">
        <div>
            <div class="card">
                <h2 class="card-title">Recipe Name</h2>
            </div>
        </div>

        <p class="center">You don't have recipes. Add them please!</p>
    </div>
</template>

<script>
    export default {
        name: "RecipeList"
    }
</script>

<style lang="scss" scoped>
    .card {
        border-bottom: 1px solid #eee;
        padding: 1rem;
        transition: 300ms all ease;
        cursor: pointer;
        background: #fff;
    }
    .empty {
        padding: 1rem;
        background: #fff!important;
    }
    .card-title {
        padding: 1rem;
        text-align: center;
    }
    .card:hover {
        background: #eee;
    }
    .list {
        background: #fffeee;
    }
</style>