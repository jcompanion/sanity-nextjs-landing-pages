export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '620334fea5c416105154e4f9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z23q8867',
                  apiId: '98a53795-437a-43fc-8f78-20c1a32f6c7c'
                },
                {
                  buildHookId: '620334feeb73180eea7376de',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-effmafec',
                  apiId: '9ae7e9a6-a413-4c0e-ba26-53a561519944'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jcompanion/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-effmafec.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
