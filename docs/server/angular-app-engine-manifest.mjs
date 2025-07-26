
export default {
  basePath: '/CO-OP-Presentation/EndOfProgramWeb',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
