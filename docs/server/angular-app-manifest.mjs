
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CO-OP-Presentation',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/CO-OP-Presentation/home",
    "route": "/CO-OP-Presentation"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/home"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/AboutMe"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/Projects"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/Skills"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/Testimonials"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3250, hash: 'a861b9df86f7c987f656ce18ac411b11c8b0364db8ef7fa06d7b5d3d1cd664ee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3606, hash: '8cdf42fa288607d997346e1da116017c5ecd4fcb6b3a4488d195b34fc35f964c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Skills/index.html': {size: 28364, hash: 'ee9d2d62c884e18880cf99ea173b26f2906a755945dccf22e68f8ea637968249', text: () => import('./assets-chunks/Skills_index_html.mjs').then(m => m.default)},
    'Projects/index.html': {size: 28751, hash: '19db13068fe8ea72b8b4b6ebf2a07f747d86ec4f10e2a09c34c49599f6f3cd86', text: () => import('./assets-chunks/Projects_index_html.mjs').then(m => m.default)},
    'Testimonials/index.html': {size: 28953, hash: 'e84e79c475b17dfe1877526207902fc2112fe0bd2235c10c0ebde4e43695f9f5', text: () => import('./assets-chunks/Testimonials_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 27299, hash: '6b0ab86a4ba4c2a35d3c4d76a1e0ed59e610e823b439e91c91d36fd50967642d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'AboutMe/index.html': {size: 36610, hash: '377aa027f8787555ce5ab0135907ca008a8b7c9604a8a10d9b4cb7e77b23c203', text: () => import('./assets-chunks/AboutMe_index_html.mjs').then(m => m.default)},
    'styles-GO7RAGFM.css': {size: 115, hash: 'PBFllTnoUsQ', text: () => import('./assets-chunks/styles-GO7RAGFM_css.mjs').then(m => m.default)}
  },
};
