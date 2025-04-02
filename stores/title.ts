export const useTitleStore = defineStore('title', () => {
    // STATES
    const title = ref<string>('')

    // SETTERS
    const setTitle = (newTitle: string) => {
        title.value = newTitle
    }

    return {
        title,
        setTitle,
    }
})
