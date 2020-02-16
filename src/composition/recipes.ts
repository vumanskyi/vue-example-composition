import {ref} from "@vue/composition-api";

export function useRecipes(): Object {
    const recipes = ref([])
    const current = ref(null)

    /**
     * @param {Object} recipe
     */
    const addRecipe = (recipe: Object): void => {
        recipes.value.push(recipe)
    }

    /**
     * @param {number} id
     */
    const onSelectRecipes = (id: number): void => {
        current.value = recipes.value.find(r => r.id === id)
    }

    /**
     * @param {number} id
     */
    const onRemoveRecipe = (id: number): void => {
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