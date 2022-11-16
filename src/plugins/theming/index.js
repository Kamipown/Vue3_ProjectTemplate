const createTheming = (options) => (app) => {
  const availableThemes = Object.keys(options.themes)
  const currentTheme = ref(options.default)
  const theme = computed(() => options.themes[currentTheme.value])

  watch(currentTheme, (newTheme) => localStorage.setItem('theme', newTheme))

  app.provide('theme', {
    availableThemes,
    currentTheme,
    theme,
  })
}

const useTheme = () => inject('theme')

export { createTheming, useTheme }
