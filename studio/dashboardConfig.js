export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd87c930f75d2f0fb8108f5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cbqhgfxm',
                  apiId: '37144c3b-e243-4c4d-8f34-a843bfbda3c7'
                },
                {
                  buildHookId: '5cd87c93346fb235cd6b1f97',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cge7a16x',
                  apiId: '77126eef-68aa-4e0b-b48c-cbdf0efc7ea9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marisamorby/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-cge7a16x.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
