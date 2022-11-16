import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import SVGLoader from 'vite-svg-loader'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig(() => ({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles";`,
      },
    },
  },
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/i18n/locales/texts/*.json'),
    }),
    SVGLoader(),
    AutoImport({
      include: [/\.js$/, /\.vue$/],
      imports: [
        'vue',
        'vuex',
        'vue-i18n',
        'vue-router',
        '@vueuse/core',
        {
          '@/plugins/theming': ['useTheme'],
        },
      ],
      dirs: ['./src/composables'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
  },
}))
