<script setup lang="ts">
import Sun from '~/assets/icons/svg/sun.svg'
import Moon from '~/assets/icons/svg/moon.svg'

const color = useColorMode();
const colorMode = computed({
    get: () => color.value === 'light',
    set: () => (color.preference = (color.value === 'dark' ? 'light' : 'dark')),
});

const toggleColorMode = () => {
    colorMode.value = !colorMode.value;
};
</script>

<template>
    <ClientOnly>
        <div @click="toggleColorMode" class="checkbox">
            <div>
                <Sun v-if="colorMode" />
                <Moon v-else />
            </div>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>
.checkbox {
    cursor: pointer;
    display: flex;
    align-items: center;
}
</style>
