<template>
  <div class="home">
    <h1>{{ t('language') }}</h1>
    <div>
      <section>
        <h2><Icon name="language" />Locale</h2>
        <label v-for="_locale in availableLocales" :key="_locale">
          <input v-model="locale" :value="_locale" type="radio" name="locale" />
          <p>{{ _locale }}</p>
        </label>
      </section>
      <section>
        <h2><Icon name="sun" />Theme</h2>
        <label v-for="_theme in availableThemes" :key="_theme">
          <input
            v-model="currentTheme"
            :value="_theme"
            type="radio"
            name="theme"
          />
          <p>{{ _theme }}</p>
        </label>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@/components'

const { availableThemes, currentTheme, theme } = useTheme()
const { availableLocales, locale, t } = useI18n()
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
  padding: 1rem;
  background-color: v-bind('theme.background');
  color: v-bind('theme.text');
  > div {
    display: flex;
    gap: 1rem;
    > section {
      padding: 1rem;
      background-color: v-bind('theme.card.background');
      > h2 {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      > label {
        display: flex;
        padding: 0.25rem;
        > p {
          margin-left: 0.5rem;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
