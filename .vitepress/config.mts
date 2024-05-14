import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Railway 中文手册",
  description: "Railway 中文手册",
  base: '/docs.railway',
  cleanUrls: true,
  rewrites: {
    'guides/foundations/(.*)': 'guides/(.*)',
    'guides/networking/(.*)': 'guides/(.*)',
    'guides/builds/(.*)': 'guides/(.*)',
    'guides/deployments/(.*)': 'guides/(.*)',
    'guides/databases/(.*)': 'guides/(.*)',
    'guides/monitoring/(.*)': 'guides/(.*)',
    'guides/templates/(.*)': 'guides/(.*)',
    'guides/public-api/(.*)': 'guides/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 'deep',    
    sidebar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: '快速开始',
        link: '/quick-start',
      },
      {
        text: 'Overview',
        base: '/overview',
        items: [
          { text: '关于 Railway', link: '/about-railway' },
          { text: '基础使用', link: '/the-basics' },
          { text: '高级用法', link: '/advanced-concepts' },
        ]
      },
      {
        text: 'Guides',
        base: '/guides',
        items: [
          { text: 'Foundations', link: '/foundations', collapsed: true,
            items: [
              {text: '项目', link: '/projects'},
              {text: 'staged-changes', link: '/staged-changes'},
              {text: 'services', link: '/services'},
              {text: 'variables', link: '/variables'},
              {text: 'volumes', link: '/volumes'},
              {text: 'environments', link: '/environments'},
              {text: 'CLI', link: '/cli'},
              {text: 'join-priority-boarding', link: '/join-priority-boarding'},
            ]
          },
          { text: 'networking', link: '/networking', collapsed: true,
            items: [
              {text: 'public-networking', link: '/public-networking'},
              {text: 'private-networking', link: '/private-networking'},
              {text: 'fixing-common-errors', link: '/fixing-common-errors'},
            ]
          },
          { text: 'builds', link: '/builds', collapsed: true,
            items: [
              {text: 'build-configuration', link: '/build-configuration'},
              {text: 'dockerfiles', link: '/dockerfiles'},
            ]
          },
          { text: 'deployments', link: '/deployments', collapsed: true,
            items: [
              {text: 'start-command', link: '/start-command'},
              {text: 'deployment-actions', link: '/deployment-actions'},
              {text: 'github-autodeploys', link: '/github-autodeploys'},
              {text: 'optimize-performance', link: '/optimize-performance'},
              {text: 'healthchecks-and-restarts', link: '/healthchecks-and-restarts'},
              {text: 'monorepo', link: '/monorepo'},
              {text: 'cron-jobs', link: '/cron-jobs'},
              {text: 'optimize-usage', link: '/optimize-usage'},
            ]
          },
          { text: 'databases', link: '/databases', collapsed: true,
            items: [
              {text: 'build-a-database-service', link: '/build-a-database-service'},
              {text: 'postgresql', link: '/postgresql'},
              {text: 'mysql', link: '/mysql'},
              {text: 'redis', link: '/redis'},
              {text: 'mongodb', link: '/mongodb'},
              {text: 'database-view', link: '/database-view'},
              {text: 'database-migration-guide', link: '/database-migration-guide'},
            ]
          },
          { text: 'monitoring', link: '/monitoring', collapsed: true,
            items: [
              {text: 'logs', link: '/logs'},
              {text: 'metrics', link: '/metrics'},
              {text: 'webhooks', link: '/webhooks'},
            ]
          },
          { text: 'templates', link: '/templates', collapsed: true,
            items: [
              {text: 'create', link: '/create'},
              {text: 'publish-and-share', link: '/publish-and-share'},
              {text: 'deploy', link: '/deploy'},
            ]
          },
          { text: 'public-api', link: '/public-api', collapsed: true,
            items: [
              {text: 'manage-projects', link: '/manage-projects'},
              {text: 'manage-services', link: '/manage-services'},
              {text: 'manage-deployments', link: '/manage-deployments'},
              {text: 'manage-variables', link: '/manage-variables'},
            ]
          },          
          { text: 'config-as-code', link: '/config-as-code'},
        ]
      },
      {
        text: 'Reference',
        base: '/reference',
        collapsed: false,
        items: [
          {text: 'pricing', link: '/pricing'},
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://docs.railway.app/' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ]
  }
})
