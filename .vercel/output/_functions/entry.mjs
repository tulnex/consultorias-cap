import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_FO5AwLQ_.mjs';
import { manifest } from './manifest_BpRdLyJH.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/send.astro.mjs');
const _page2 = () => import('./pages/contacto.astro.mjs');
const _page3 = () => import('./pages/nosotros.astro.mjs');
const _page4 = () => import('./pages/nuestros-servicios.astro.mjs');
const _page5 = () => import('./pages/proceso.astro.mjs');
const _page6 = () => import('./pages/quienes-somos.astro.mjs');
const _page7 = () => import('./pages/soluciones.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/send.ts", _page1],
    ["src/pages/contacto.astro", _page2],
    ["src/pages/nosotros.astro", _page3],
    ["src/pages/nuestros-servicios.astro", _page4],
    ["src/pages/proceso.astro", _page5],
    ["src/pages/quienes-somos.astro", _page6],
    ["src/pages/soluciones.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dd75a4cc-133b-46cf-8738-1f84307fd837",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
