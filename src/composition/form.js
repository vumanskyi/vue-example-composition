import {computed, reactive} from "@vue/composition-api";

export function useForm(props) {
    const form = reactive({
        title: '',
        description: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        const recipe = {
            id: Date.now().toString(),
            title: form.title.trim(),
            description: form.description.trim(),
        }
        form.title = form.description = ''
        props.onAdd(recipe)
    }


    const isValid = computed(() => {
        return form.title.trim() && form.description.trim()
    })

    return {form, onSubmit, isValid}
}