import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'postType',
  title: 'Post Type',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'value', title: 'Value', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
  ],
})
