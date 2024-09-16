<script setup lang="ts">

</script>

<template>
    <ElContainer>
        <Aside/>
        <ElContainer>
            <ElHeader>Header</ElHeader>
            <ElMain>
                <slot/>
            </ElMain>
            <ElFooter>Footer</ElFooter>
        </ElContainer>
    </ElContainer>
</template>

<style scoped>

</style>