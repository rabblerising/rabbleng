
export default {
  basePath: 'https://rabblerising.github.io/rabbleng',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
