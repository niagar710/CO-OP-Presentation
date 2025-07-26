
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CO-OP-Presentation/EndOfProgramWeb',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/CO-OP-Presentation/EndOfProgramWeb/home",
    "route": "/CO-OP-Presentation/EndOfProgramWeb"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/EndOfProgramWeb/home"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/EndOfProgramWeb/AboutMe"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/EndOfProgramWeb/Projects"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/EndOfProgramWeb/Skills"
  },
  {
    "renderMode": 2,
    "route": "/CO-OP-Presentation/EndOfProgramWeb/Testimonials"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3266, hash: '927cf0c5956be5582090df4b0ec43a3323288eebaa18fdd20041f9e045918da5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3622, hash: '336aecbd002adb6bc3dc6366304f0eca1528e3e5a48c3426aeb9955d810fa5ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 27315, hash: 'c4cf434087a65a877c008dc85192965dcf6982cde2c8c0b585ab7bf12c402b44', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'AboutMe/index.html': {size: 36626, hash: '0a654a424b2c08ac8d844f986cb597455403eedb96826ca82a3198e5d32e9408', text: () => import('./assets-chunks/AboutMe_index_html.mjs').then(m => m.default)},
    'Testimonials/index.html': {size: 28969, hash: '0b1ad457baa691eb4b067bfa7ed94e43e71fc8e35d7aff9a5f16631df2a4dbfa', text: () => import('./assets-chunks/Testimonials_index_html.mjs').then(m => m.default)},
    'Projects/index.html': {size: 28767, hash: '0d478451d21ec6fbb97873003385105bf5689f6d5ecb0f31b8b8aad57ba2efce', text: () => import('./assets-chunks/Projects_index_html.mjs').then(m => m.default)},
    'Skills/index.html': {size: 28380, hash: '81425276802190d6ec063ae64a8e5ba4b006f9d80bd2a39ffe9c027dea88743d', text: () => import('./assets-chunks/Skills_index_html.mjs').then(m => m.default)},
    'styles-GO7RAGFM.css': {size: 115, hash: 'PBFllTnoUsQ', text: () => import('./assets-chunks/styles-GO7RAGFM_css.mjs').then(m => m.default)}
  },
};
