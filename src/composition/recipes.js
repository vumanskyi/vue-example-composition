import {ref} from "@vue/composition-api";

export function useRecipes() {
    const recipes = ref([])
    const current = ref(null)

    /**
     * @param {Object} recipe
     */
    const addRecipe = (recipe) => {

        recipes.value.push(recipe)
    }

    /**
     * @param {number} id
     */
    const onSelectRecipes = (id) => {
        current.value = recipes.value.find(r => r.id === id)
    }

    /**
     * @param {number} id
     */
    const onRemoveRecipe = (id) => {
        current.value = null
        recipes.value = recipes.value.filter(r => r.id !== id)
    }

    return {
        current, recipes,
        addRecipe,
        onSelectRecipes,
        onRemoveRecipe
    }
}