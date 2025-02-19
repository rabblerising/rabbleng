
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://rabblerising.github.io/rabbleng/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rabbleng"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 531, hash: '86580b2860b9691d55094509ec54f8d03df614a606c9d65cb0eefef024870078', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1044, hash: 'c369b18592f9e5093748a5700517d674a4a62b1ec2582ea53b0351e7a5c59674', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20871, hash: '914467c14cce493f9d96fae0bab0ec5828c4cea301637f046f132612f3cb9969', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
