<script setup>
// CONSTANTS
const { t } = useI18n()
const localePath = useLocalePath()

// METHODS
const resetError = async error => {
    await navigateTo(localePath('/'))
    error.value = null
}

// META
useHead({
    titleTemplate: titleChunk => {
        return titleChunk ? `Sunny Movies - ${titleChunk}` : 'Sunny Movies'
    },
})
</script>

<template>
    <div class="page-container">
        <NuxtLayout>
            <NuxtErrorBoundary>
                <NuxtPage />

                <template #error="{ error }">
                    <div class="error">
                        <h1>
                            {{ error.statusCode || error.value?.statusCode }}
                        </h1>
                        <p>
                            {{ error.statusMessage || error.value?.statusMessage }}
                        </p>
                        <ElButton @click="resetError(error)">
                            {{ t('error.reset') }}
                        </ElButton>
                    </div>
                </template>
            </NuxtErrorBoundary>
        </NuxtLayout>
    </div>
</template>

<style lang="scss">
.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.error {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & h1 {
        font-size: var(--font-size-6-xl);
        margin-top: var(--spacing-3-xl);
        margin-bottom: var(--spacing-s);
    }

    & p {
        font-size: var(--font-size-xl);
        color: var(--color-text-light);
        margin-bottom: var(--spacing-s);
    }
}
</style>
