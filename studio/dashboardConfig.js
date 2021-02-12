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
                  buildHookId: '60263dec230aa18ca299756c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ybnsngqu',
                  apiId: '526b964b-ddc9-411a-81c9-6dcf75daa91b'
                },
                {
                  buildHookId: '60263dec94d5428f275f04b7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iefn56qb',
                  apiId: '6569f57e-d28f-46fd-8bca-832e89d13422'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BasTomlow/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iefn56qb.netlify.app',
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
