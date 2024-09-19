<script lang="ts" setup>

</script>

<template>
    <ElContainer class="grid wrapper">
        <Aside class="aside"/>
        <ElContainer class="grid container">
            <Header class="header"/>
            <ElScrollbar class="page">
                <ElMain class="main">
                    <slot/>
                </ElMain>
                <ElFooter class="footer">Footer</ElFooter>
            </ElScrollbar>
        </ElContainer>
    </ElContainer>
</template>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;
    width: 100vw;
    gap: 0;

    & .aside {
        align-self: end;
        grid-column: 1/-1;
        grid-row: 2;
    }

    & .container {
        grid-column: 1/-1;
        grid-row: 1;
        overflow: hidden;
        gap: 0;

        & .header {
            grid-column: 1/-1;
            grid-row: 1;
        }

        & .page {
            grid-column: 1/-1;
            grid-row: 2;
            height: 100%;
            gap: 0;

            & .main {
                min-height: 100vh;
            }

            & .footer {
                align-self: end;
            }
        }
    }

    @include viewport-m {
        & .aside {
            grid-column: 1;
            grid-row: 1/-1;
        }

        & .container {
            grid-column: 2/-1;
            grid-row: 1/-1;
        }
    }
}
</style>