<script setup lang="ts">
import type { Media } from '~/types'

// CONSTANTS
const { t } = useI18n()
const localePath = useLocalePath()
const titleStore = useTitleStore()
const { trendingMedia, trendingMovies } = useMovieStore()
const { trendingTv } = useTvStore()
const { trendingPeople } = usePersonStore()

// COMPUTED
const topFiveTrending = computed<Media[]>(() => trendingMedia?.results.slice(0, 5) ?? [])

// META
useHead({
    title: titleStore.title,
    meta: [
        {
            name: 'description',
            content: t('home.description'),
        },
    ],
})

titleStore.setTitle(t('home.title'))
</script>

<template>
    <div>
        <section class="hero-carousel">
            <HeroCarousel :media-items="topFiveTrending" :is-loading="!trendingMedia" />
        </section>
        <section class="card-carousel">
            <NuxtLink :to="localePath('/movie/trending')" class="carousel-title el-link">
                {{ t('home.trendingMovies') }}
            </NuxtLink>
            <CardCarousel
                :media-items="trendingMovies?.results ?? []"
                :is-loading="!trendingMovies"
            />
        </section>
        <section class="card-carousel">
            <NuxtLink :to="localePath('/tv/trending')" class="carousel-title el-link">
                {{ t('home.trendingTv') }}
            </NuxtLink>
            <CardCarousel :media-items="trendingTv?.results ?? []" :is-loading="!trendingTv" />
        </section>
        <section class="card-carousel">
            <NuxtLink :to="localePath('/person/trending')" class="carousel-title el-link">
                {{ t('home.trendingPeople') }}
            </NuxtLink>
            <CardCarousel
                :media-items="trendingPeople?.results ?? []"
                :is-loading="!trendingPeople"
            />
        </section>
    </div>
</template>

<style scoped lang="scss">
.card-carousel {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    padding: var(--spacing-m);
    padding-top: var(--spacing-2-xl);
    background: var(--color-bg-light);

    & .carousel-title {
        font-size: var(--font-size-2-xl);
        margin-bottom: var(--spacing-m);
    }
}
</style>
