import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      swcOptions: {
        jsc: {
          parser: {
            syntax: 'ecmascript',
            dynamicImport: true,
          },
          transform: {
            commonjs: {
              extensions: ['.js', '.cjs'],
              require: true,
            },
          },
        },
        module: {
          type: 'es6',
        },
      },
    }),
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Ensure mixed ESM and CJS modules are transformed
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '/src/scss/variables' as *;`
      }
    }
  }
})
