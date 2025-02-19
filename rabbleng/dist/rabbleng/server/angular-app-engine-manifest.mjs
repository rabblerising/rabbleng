
export default {
  basePath: 'https://github.io/rabblerising/rabbleng',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
