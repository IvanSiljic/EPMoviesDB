<script setup lang="ts">
import type { Media } from '~/types/media'

// PROPS
defineProps<{
    mediaItems: Media[]
    isLoading: boolean
}>()
</script>

<template>
    <ElCarousel class="hero" trigger="click" height="" arrow="never" :loop="true" :autoplay="false">
        <ElSkeleton :loading="isLoading" animated>
            <template #template>
                <div class="hero">
                    <ElSkeletonItem class="backdrop" variant="image" />
                    <div class="pane">
                        <ElSkeletonItem class="title" variant="h1" />
                        <div class="meta">
                            <ElSkeletonItem variant="text" />
                            <ElSkeletonItem variant="text" />
                            <ElSkeletonItem variant="text" />
                        </div>
                        <ElSkeletonItem class="desc" variant="text" />
                        <ElSkeletonItem class="desc desc2" variant="text" />
                    </div>
                </div>
            </template>

            <template #default>
                <ElCarouselItem v-for="item in mediaItems" :key="item.id">
                    <Hero :media="item" />
                </ElCarouselItem>
            </template>
        </ElSkeleton>
    </ElCarousel>
</template>

<style lang="scss" scoped>
.hero {
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;

    & .pane {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;
        width: 40%;
        height: 100%;
        padding-left: var(--spacing-m);

        & .title {
            margin: 0 0 var(--spacing-s);
            height: var(--font-size-4-xl);
        }

        & .meta {
            height: var(--font-size-m);
            display: flex;
            flex-direction: row;
            align-items: start;
            width: 90%;
            color: var(--color-text-light);

            div {
                margin-right: var(--spacing-s);
            }
        }

        & .desc {
            display: none;
            margin-top: var(--spacing-s);
        }
    }

    & .backdrop {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        &::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: block;
            content: '';
            background-image: linear-gradient(
                to top,
                var(--color-bg-dark) 0,
                var(--color-bg-dark) 15%,
                transparent 100%
            );
        }
    }

    @include viewport-s {
        height: 25rem;

        & .pane {
            & .desc {
                display: block;
            }

            & .desc2 {
                width: 70%;
            }
        }
    }

    @include viewport-m {
        & .pane {
            justify-content: center;
        }

        & .backdrop {
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            width: 71.1%;

            &::after {
                background-image: linear-gradient(
                    to right,
                    var(--color-bg-dark) 0,
                    var(--color-bg-dark) 15%,
                    transparent 100%
                );
            }
        }
    }

    @include viewport-xl {
        height: 50rem;
    }
}
</style>
