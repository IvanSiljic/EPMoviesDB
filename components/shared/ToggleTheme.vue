<script setup lang="ts">
import Sun from '~/assets/icons/svg/sun.svg'
import Moon from '~/assets/icons/svg/moon.svg'

// STATES
const color = useColorMode()
const isClient = ref(false)
const colorMode = computed({
    get: () => color.value === 'light',
    set: () => (color.preference = color.value === 'dark' ? 'light' : 'dark'),
})

// METHODS
const toggleColorMode = () => {
    colorMode.value = !colorMode.value
}

// HOOKS
onMounted(() => {
    isClient.value = true
})
</script>

<template>
    <div class="checkbox">
        <ElSkeleton :loading="!isClient" animated>
            <template #template>
                <ElSkeletonItem variant="circle" />
            </template>

            <template #default>
                <ClientOnly>
                    <div @click="toggleColorMode">
                        <Sun v-if="colorMode" />
                        <Moon v-else />
                    </div>
                </ClientOnly>
            </template>
        </ElSkeleton>
    </div>
</template>

<style lang="scss" scoped>
.checkbox {
    min-width: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
}
</style>
