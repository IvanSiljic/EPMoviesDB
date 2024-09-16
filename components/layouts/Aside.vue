<script setup>
import Home from '~/assets/icons/svg/home.svg'
import Movie from '~/assets/icons/svg/movie.svg'
import Tv from '~/assets/icons/svg/tv.svg'
import Search from '~/assets/icons/svg/search.svg'

</script>

<template>
    <ElAside width="150px">
        <ElMenu
            class="el-menu-vertical-demo"
            router
        >
            <ElMenuItem index="1">
                <NuxtLink to="/" aria-label="Home">
                    <Home/>
                </NuxtLink>
            </ElMenuItem>

            <ElMenuItem index="2">
                <NuxtLink to="/movies" aria-label="Home">
                    <Movie/>
                </NuxtLink>
            </ElMenuItem>

            <ElMenuItem index="3">
                <NuxtLink to="/tv" aria-label="Home">
                    <Tv/>
                </NuxtLink>
            </ElMenuItem>

            <ElMenuItem index="3">
                <NuxtLink aria-label="Home">
                    <Search/>
                </NuxtLink>
            </ElMenuItem>
        </ElMenu>
    </ElAside>
</template>

<style scoped>
.el-menu-vertical-demo {
    border-right: none;
}

.search-toggle {
    background: none;
    border: none;
    cursor: pointer;
}
</style>
