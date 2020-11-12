export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5fada402ca21b3a9bafe0436',
                  title: 'Sanity Studio',
                  name: 's-33-showroom-studio',
                  apiId: 'd555f8de-4bab-40f3-a396-1d80e6456685'
                },
                {
                  buildHookId: '5fada402275ee196569f2db5',
                  title: 'Portfolio Website',
                  name: 's-33-showroom',
                  apiId: '65cab96b-0866-4a34-ab5d-b3936d80e38b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simenstoa/s33-showroom',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://s-33-showroom.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
