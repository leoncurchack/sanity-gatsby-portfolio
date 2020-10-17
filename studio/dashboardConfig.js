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
                  buildHookId: '5f8b44ec00a2df513edb0c70',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j524z5mw',
                  apiId: '8677d24b-da00-48a6-8086-11fa8e9177ce'
                },
                {
                  buildHookId: '5f8b44ecee6ba06f4aef8f83',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9tbts1kx',
                  apiId: 'b94a156a-d383-45e8-b83c-8499917d3672'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leoncurchack/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9tbts1kx.netlify.app',
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
