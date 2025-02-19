
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.io/rabblerising/rabbleng',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rabblerising/rabbleng"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 530, hash: '0ec0d70362a9f112cbc674ff2503cba37489c9c75237c7f31bcf8bd80ba22274', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1043, hash: '55b89c58a1d71da263152e71000adc9ce477e32578d381b7cad44e9c64d1ede1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20870, hash: '6a5e6a7f983111dee2bb9f2f2acbdf3237640464cfdc7e685fece97e58fef463', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
