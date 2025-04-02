<script setup lang="ts">
import Image from '~/assets/icons/svg/image.svg'
import type { Media } from '~/types/index.ts'

// CONSTANTS
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const imageBaseUrl =
    (config.public.tmdbImageBaseUrl || 'https://image.tmdb.org/t/p') + '/w370_and_h556_bestv2'

// PROPS
const props = defineProps<{
    media: Media
    isLoading: boolean
}>()

// COMPUTEDS
const mediaTitle = computed(() => truncate(getMediaTitle(props.media), 25))
const normalizedRating = computed(() =>
    props.media?.vote_average ? props.media.vote_average / 2 : 0
)
</script>

<template>
    <ElSkeleton :loading="isLoading" animated>
        <template #template>
            <ElSkeletonItem class="card__img" variant="image" />
            <ElSkeletonItem
                class="card_name"
                variant="text"
                style="width: 55%; margin-top: var(--spacing-m)"
            />
            <div class="card__rating" style="margin-top: var(--spacing-m)">
                <ElSkeletonItem class="stars" variant="text" style="width: 35%" />
                <ElSkeletonItem class="stars" variant="text" style="width: 40%" />
            </div>
        </template>

        <template #default>
            <NuxtLink :to="localePath(`/${media.media_type}/${media.id}`)" class="el-link card">
                <div class="card__img">
                    <ElImage :src="imageBaseUrl + getMediaPosterPath(media)" fit="cover">
                        <!-- Loading placeholder for the image -->
                        <template #placeholder>
                            <div class="image-slot el-skeleton is-animated">
                                <div
                                    class="el-skeleton__item el-skeleton__image image-slot-loading"
                                ></div>
                            </div>
                        </template>

                        <template #error>
                            <div class="image-slot el-skeleton">
                                <Image />
                            </div>
                        </template>
                    </ElImage>
                </div>

                <h5 class="card__name">
                    {{ mediaTitle }}
                </h5>

                <div v-if="media.media_type !== 'person'" class="card__rating">
                    <ClientOnly>
                        <ElRate
                            v-model="normalizedRating"
                            class="stars"
                            :max="5"
                            size="large"
                            disabled
                            allow-half
                        />
                    </ClientOnly>

                    <div v-if="media.vote_count! > 0">
                        {{ numberWithCommas(media.vote_count) }} {{ t('hero.review') }}
                    </div>
                </div>
            </NuxtLink>
        </template>
    </ElSkeleton>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: var(--spacing-xs);

    &__img {
        width: 15rem;
        height: 22.6rem;
    }

    &__name {
        font-size: var(--font-size-m);
        margin-top: var(--spacing-m);
    }

    &__rating {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        font-size: var(--font-size-m);
        color: var(--color-text-light);

        & .stars {
            margin-right: var(--spacing-xs);
        }
    }

    &:hover {
        transform: scale(1.05);
        transition: all var(--animation-duration-short);
    }
}

.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-4-xl);
    background: var(--color-text-light);
    width: 15rem;
    height: 22.6rem;
}
</style>
