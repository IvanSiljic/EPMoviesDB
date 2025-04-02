<script setup>
// CONSTANTS
const { t } = useI18n()
const localePath = useLocalePath()
const error = useError()

// METHODS
const resetError = () => {
    clearError({
        redirect: localePath('/'),
    })
}
</script>

<template>
    <NuxtLayout>
        <div class="error">
            <h1>
                {{ error.statusCode || error.value?.statusCode }}
            </h1>
            <p>
                {{ error.statusMessage || error.value?.statusMessage }}
            </p>
            <ElButton @click="resetError()">
                {{ t('error.reset') }}
            </ElButton>
        </div>
    </NuxtLayout>
</template>

<style lang="scss">
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
