<template>
    <div class="detail">
        <div class="recipe">
            <h2>Name recipe</h2>
            <a href="#">Show</a>
            <p>Description</p>
            <button class="btn remove">Remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecipeDetail"
    }
</script>

<style lang="scss" scoped>
    .recipe {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        p {
            font-size: .8rem;
            margin-bottom: .5rem;
        }
        a, h2 {
            margin-bottom: .5rem;
        }
    }
</style>