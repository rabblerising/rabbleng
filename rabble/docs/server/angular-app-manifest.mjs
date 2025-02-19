
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/rabblerising/rabbleng/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rabblerising/rabbleng"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 530, hash: '7ff3c27c83c17b25febcb5f0672f241247ea7619f2c833d023112ddeeb15abf0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1043, hash: '38879ad0b9b44cf70758709a4e14f81cb89053f21013d2a64fd3130d71d4f103', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20868, hash: 'cf88e36bd4db8baa1aedb1ef4858536208acd15c2188f6c32b00fdb4a5c24084', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
