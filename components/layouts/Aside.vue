<script setup>
import { useLocalePath } from '#i18n'
import Home from '~/assets/icons/svg/home.svg'
import Movie from '~/assets/icons/svg/movie.svg'
import Tv from '~/assets/icons/svg/tv.svg'

// CONSTANTS
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
    <ElAside>
        <ElMenu class="el-menu-vertical-demo" router>
            <ElMenuItem :index="localePath('/')" class="slide-up" :aria-label="t('aside.home')">
                <ElIcon><Home /></ElIcon>
            </ElMenuItem>

            <ElMenuItem
                :index="localePath('/movie')"
                class="slide-up"
                :aria-label="t('aside.movies')"
            >
                <ElIcon><Movie /></ElIcon>
            </ElMenuItem>

            <ElMenuItem :index="localePath('/tv')" class="slide-up" :aria-label="t('aside.tv')">
                <ElIcon><Tv /></ElIcon>
            </ElMenuItem>

            <ElMenuItem :aria-label="t('aside.themeSwitch')">
                <ToggleTheme />
            </ElMenuItem>
        </ElMenu>
    </ElAside>
</template>

<style scoped>
.el-menu-vertical-demo {
    border-right: none;
}
</style>
