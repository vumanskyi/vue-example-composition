<template>
    <form class="form" @submit="onSubmit" >
        <h1>Add recipe</h1>
        <div v-if="visible">
            <div class="input">
                <input type="text" placeholder="Name recipe" v-model="form.title">
            </div>
            <div class="input">
                <input type="text" placeholder="Description" v-model="form.description">
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
    import {useToggle} from "@/composition/toggle";
    import {useForm} from "@/composition/form";

    export default {
        name: "AddRecipe",
        setup(props) {
            return {
                ...useForm(props),
                ...useToggle()
            }
        },
        props: {
            onAdd: {
                type: Function,
                required: true
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