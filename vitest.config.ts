import { fileURLToPath, URL } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import baseViteConfig from './vite.config'

export default defineConfig(async () => {
  const viteConfig =
    typeof baseViteConfig === 'function'
      ? baseViteConfig({ mode: 'test', command: 'serve' })
      : baseViteConfig

  return mergeConfig(
    viteConfig,
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/**'],
        root: fileURLToPath(new URL('./', import.meta.url)),
      },
    }),
  )
})
