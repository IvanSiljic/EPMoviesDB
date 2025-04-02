<script setup lang="ts">
import Image from '~/assets/icons/svg/image.svg'
import type { Media } from '~/types/index.ts'

// CONSTANTS
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const imageBaseUrl = (config.public.tmdbImageBaseUrl || 'https://image.tmdb.org/t/p') + '/original'

// PROPS
const props = defineProps<{
    media: Media
}>()

// COMPUTED
const mediaTitle = computed(() => getMediaTitle(props.media))
const normalizedRating = computed(() =>
    props.media?.vote_average ? props.media.vote_average / 2 : 0
)
const mediaReleaseYear = computed(() => {
    const releaseDate = getMediaReleaseDate(props.media)
    if (!releaseDate) return ''
    return getYear(releaseDate)
})
</script>

<template>
    <div class="hero">
        <!-- Backdrop Image -->
        <div class="backdrop">
            <ElImage class="backdrop-image" :src="imageBaseUrl + media.backdrop_path" fit="cover">
                <!-- Loading placeholder for the image -->
                <template #placeholder>
                    <div class="image-slot el-skeleton is-animated">
                        <div class="el-skeleton__item el-skeleton__image image-slot-loading"></div>
                    </div>
                </template>

                <template #error>
                    <div class="image-slot el-skeleton">
                        <div class="el-skeleton__item el-skeleton__image image-slot-loading">
                            <Image />
                        </div>
                    </div>
                </template>
            </ElImage>
        </div>

        <!-- Content Pane -->
        <div class="pane slide-up">
            <h1 class="title">
                <NuxtLink
                    :to="localePath(`/${media.media_type}/${media.id}`)"
                    class="el-link"
                    :underline="false"
                >
                    {{ mediaTitle }}
                </NuxtLink>
            </h1>

            <div class="meta">
                <div class="rating">
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

                <div class="info">
                    <span v-if="mediaReleaseYear">{{ mediaReleaseYear }}</span>
                </div>
            </div>

            <div class="desc">
                {{ truncate(media.overview, 125) }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    display: flex;
    flex-direction: column;
    color: var(--color-text);
    background-color: var(--color-bg-dark);

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
            font-size: var(--font-size-4-xl);
            color: var(--color-text);

            & a {
                font-size: var(--font-size-4-xl);
            }
        }

        & .meta {
            font-size: var(--font-size-m);
            display: flex;
            flex-direction: column;
            align-items: start;
            width: 100%;
            color: var(--color-text-light);

            & .rating {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding-right: var(--spacing-s);

                & .stars {
                    padding-right: var(--spacing-s);
                }
            }

            & .info {
                span {
                    margin-right: var(--spacing-s);
                }
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
        display: block;
        width: 100%;
        height: 100%;

        & .image-slot {
            height: 100%;
            width: 100%;
            font-size: var(--font-size-4-xl);
        }

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
        & .pane {
            & .meta {
                flex-direction: row;
                align-items: center;
            }

            & .desc {
                display: block;
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
            display: block;
            width: 71.1%;
            height: 100%;

            &-image {
                height: 100%;
                width: 100%;
            }

            &::after {
                background-image: linear-gradient(
                    to right,
                    var(--color-bg-dark) 0,
                    transparent 50%,
                    transparent 100%
                );
            }
        }
    }
}
</style>
