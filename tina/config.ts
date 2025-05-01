import { defineConfig } from 'tinacms';

export default defineConfig({
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  schema: {
    collections: [
      {
        name: 'landingPages',
        label: 'Landing Pages',
        path: 'content/landingPages',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
          },
          {
            type: 'string',
            name: 'content',
            label: 'Content',
          },
        ],
      },
    ],
  },
});
