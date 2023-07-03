import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  schema: process.env.VITE_APP_API_URL,
  documents: ['src/graphql/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/__generated__/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
    },
  },
}

export default config
