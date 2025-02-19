
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.io/rabblerising/rabbleng/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rabblerising/rabbleng"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 531, hash: '4a996359c25f456c780176649b270a6a8998926ad76632fd7c1ecd7bf474c41b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1044, hash: '74133007caf21ec4490625a3a0a078766f58e3712bd83eb6559ab7a38ada8e03', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20871, hash: 'd14f103f490ec1724b7f662e1bd8b9457add65c9b3e124ceee38e57ec850ee8d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
