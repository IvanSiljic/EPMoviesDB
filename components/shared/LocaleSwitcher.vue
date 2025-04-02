<script setup lang="ts">
// CONSTANTS
const { locale, locales, setLocale } = useI18n()
const availableLocales = locales.value as { code: string; name: string }[]

// STATES
const isClient = ref(false)

// METHODS
const changeLocale = async () => {
    await setLocale(locale.value)
    reloadNuxtApp()
}

// HOOKS
onMounted(() => {
    isClient.value = true
})
</script>

<template>
    <div>
        <ElSkeleton :loading="!isClient" animated>
            <template #template>
                <ElSkeletonItem class="loader" variant="button" />
            </template>

            <template #default>
                <ClientOnly>
                    <ElSelect v-model="locale" class="locale-switcher" @change="changeLocale">
                        <ElOption
                            v-for="l in availableLocales"
                            :key="l.code"
                            :label="l.name"
                            :value="l.code"
                        />
                    </ElSelect>
                </ClientOnly>
            </template>
        </ElSkeleton>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    max-height: var(--spacing-l);
    width: 7rem;
}
</style>
