<script setup lang="ts">
import type { Media } from '~/types/media'

// CONSTANTS
const placeholderCards = Array.from({ length: 20 })

// PROPS
defineProps<{
    mediaItems: Media[]
    isLoading: boolean
}>()
</script>

<template>
    <ElScrollbar>
        <div class="card-container">
            <Card
                v-for="(media, index) in isLoading ? placeholderCards : mediaItems"
                :key="index"
                class="card"
                :media="media as Media"
                :is-loading="isLoading"
            />
        </div>
    </ElScrollbar>
</template>

<style lang="scss" scoped>
.card-container {
    display: flex;
    width: fit-content;
}
</style>
