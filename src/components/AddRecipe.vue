<template>
    <form class="form" @submit="onSubmit">
        <h1>Add recipe</h1>
        <div>
            <div class="input">
                <input type="text" placeholder="Name recipe" v-model="title">
            </div>
            <div class="input">
                <input type="text" placeholder="Description" v-model="description">
            </div>
        </div>

        <div class="buttons">
            <button class="btn" type="submit" :disabled="!isValid">Create</button>
            <button class="btn secondary" type="button" @click="toggle">
                {{ visible ? 'Remove' : 'Show'}} form
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        name: "AddRecipe",
        data() {
            return {
                title: '',
                description: '',
                visible: true
            }
        },
        props: {
            onAdd: {
                type: Function,
                required: true
            }
        },
        computed: {
            isValid() {
                return this.title.trim() && this.description.trim()
            }
        },
        methods: {
            toggle() {
                this.visible = !this.visible;
            },
            onSubmit(e) {
                e.preventDefault();

                const recipe = {
                    id: Date.now().toString(),
                    title: this.title.trim(),
                    description: this.description.trim(),
                }

                this.title = this.description = ''

                this.onAdd(recipe)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border: 1px solid #eee;
        margin-bottom: 1rem;
        h1 {
            margin: 0;
            margin-bottom: 1rem;
        }
    }
    .input {
        margin-bottom: 1rem;

        input {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 5px 8px;
            width: 400px;
        }
    }

    .buttons {
        width: 400px;
        display: flex;
        justify-content: space-around;
    }
</style>