import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {seoMetaFields} from 'sanity-plugin-seo'

export default defineConfig({
  name: 'default',
  title: 'openjournalist',

  projectId: 't5cgmp7k',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), seoMetaFields()],

  schema: {
    types: schemaTypes,
  },
})
