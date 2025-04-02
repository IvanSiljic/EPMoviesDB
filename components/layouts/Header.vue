<script lang="ts" setup>
import ArrowLeft from '~/assets/icons/svg/arrow-left.svg'
import Search from '~/assets/icons/svg/search.svg'
import Plus from '~/assets/icons/svg/plus.svg'

// CONSTANTS
const { t } = useI18n()
const router = useRouter()
const titleStore = useTitleStore()

// STATES
const searchQuery = ref<string>('')
const searchResults = ref<string[]>([])
const isPopoverVisible = ref<boolean>(false)

// API CALLS
const searchPopup = (query: string) => {
    if (query.length > 0) {
        searchResults.value = ['Result 1', 'Result 2', 'Result 3'].filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        )
        isPopoverVisible.value = true
    } else {
        isPopoverVisible.value = false
    }
}

// HELPERS
const search = (_query: string | number) => {
    // Implement actual search functionality here
}

const goBack = () => {
    router.back()
}
</script>

<template>
    <ElHeader>
        <ElPageHeader :icon="ArrowLeft" :title="t('header.back')" @back="goBack">
            <template v-if="titleStore.title !== ''" #content>
                <span class=""> {{ titleStore.title }} </span>
            </template>
            <template #extra>
                <ElPopover
                    :hide-after="0"
                    :visible="isPopoverVisible"
                    placement="bottom"
                    trigger="click"
                >
                    <template #reference>
                        <ElInput
                            v-model="searchQuery"
                            :placeholder="t('header.search')"
                            :prefix-icon="Search"
                            class="search-input"
                            clearable
                            @blur="isPopoverVisible = false"
                            @change="search"
                            @focus="isPopoverVisible = !!searchQuery"
                            @input="searchPopup"
                        />
                    </template>
                    <h3>Display searchResults</h3>
                </ElPopover>

                <ElButton :icon="Plus">{{ t('header.button') }}</ElButton>
            </template>
        </ElPageHeader>
    </ElHeader>
</template>

<style lang="scss" scoped>
.search-input {
    margin-right: var(--spacing-s);
}
</style>
