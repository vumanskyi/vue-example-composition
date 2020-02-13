<template>
    <div class="detail">
        <div class="recipe" v-if="recipe">
            <h2>{{ recipe.title }}</h2>
            <a
                    href="#"
                    @click="toggle">
                {{ visible ? 'Hide' : 'Show' }}
            </a>
            <p v-if="visible">{{ recipe.description }}</p>
            <button
                    class="btn remove"
                    @click="$emit('remove', recipe.id)">
                Remove
            </button>
        </div>
    </div>
</template>

<script>
    import {useToggle} from "@/composition/toggle";
    import {watch} from "@vue/composition-api"

    export default {
        name: "RecipeDetail",
        props: {
            recipe: {
                type: Object,
            }
        },
        setup(props) {
            const {visible, toggle} = useToggle()

            watch(() => props.recipe, () => {
                visible.value = false
            })

            return {
                visible, toggle
            }
        }
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