
export default {
  basePath: 'https://github.com/rabblerising/rabbleng',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
