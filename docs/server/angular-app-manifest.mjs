
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CO-OP-Presentation/',
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
    'index.csr.html': {size: 3251, hash: '3c206d55102f272a281f95208b5ca4bcd332fb9d0054c33231f4ebbd920a6ceb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3607, hash: 'cae4be8a56d70b1c90c0c636c8cfffc1d2be3a8b7db1338edb4980e6d3ffe9b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'AboutMe/index.html': {size: 36611, hash: '1a73166b799525779b75a7abc3a6feb8bb8e7e0b348bca3e19b1357a9c955124', text: () => import('./assets-chunks/AboutMe_index_html.mjs').then(m => m.default)},
    'Testimonials/index.html': {size: 28954, hash: '3d07c75c4a31f73314dc6b8d0f4008a8c7fe89e81cb06e6414a77cd0dead44ae', text: () => import('./assets-chunks/Testimonials_index_html.mjs').then(m => m.default)},
    'Projects/index.html': {size: 28752, hash: '93128c4a191e2019b09169ee1927b2f751f0e5bef4cad19f452c18db43fe9281', text: () => import('./assets-chunks/Projects_index_html.mjs').then(m => m.default)},
    'Skills/index.html': {size: 28365, hash: '76c7627f38e54b2e804857af34734a6540896ab2ddae0a034977e87dc0a6091c', text: () => import('./assets-chunks/Skills_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 27300, hash: 'a0b2cbfe4d9998e7b1184187aa7b7ab0e5511252e81d172020f5f745bf4a0f33', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-GO7RAGFM.css': {size: 115, hash: 'PBFllTnoUsQ', text: () => import('./assets-chunks/styles-GO7RAGFM_css.mjs').then(m => m.default)}
  },
};
