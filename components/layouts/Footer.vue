<script setup lang="ts">
import Github from 'assets/icons/svg/github.svg'

// CONSTANTS
const { t } = useI18n()
</script>

<template>
    <ElFooter class="footer">
        <div>
            <p>&copy; {{ new Date().getFullYear() }} {{ t('footer.paragraph1') }}</p>
            <p>
                {{ t('footer.paragraph2') }}
                <a target="_blank" href="https://www.themoviedb.org/" rel="noopener">TMDb</a>.
            </p>
            <p>
                {{ t('footer.paragraph3') }}
                <a
                    href="https://github.com/IvanSiljic/EPMoviesDB"
                    target="_blank"
                    :aria-label="t('footer.github')"
                    rel="noopener"
                >
                    <ElIcon><Github /></ElIcon>
                </a>
            </p>
        </div>
        <LocaleSwitcher class="locale-switcher" />
    </ElFooter>
</template>

<style scoped>
.locale-switcher {
    padding-top: var(--spacing-xs);
}
</style>
