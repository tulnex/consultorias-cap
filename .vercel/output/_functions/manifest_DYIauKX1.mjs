import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_B9H9tflI.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BRastLR9.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/","cacheDir":"file:///C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/node_modules/.astro/","outDir":"file:///C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/dist/","srcDir":"file:///C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/","publicDir":"file:///C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/public/","buildClientDir":"file:///C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/dist/client/","buildServerDir":"file:///C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send.ts","pathname":"/api/send","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/markdown-page.CjGK0vgi.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/markdown-page.CjGK0vgi.css"}],"routeData":{"route":"/markdown-page","isIndex":false,"type":"page","pattern":"^\\/markdown-page\\/?$","segments":[[{"content":"markdown-page","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/markdown-page.md","pathname":"/markdown-page","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/markdown-page.CjGK0vgi.css"}],"routeData":{"route":"/nuestros-servicios","isIndex":false,"type":"page","pattern":"^\\/nuestros-servicios\\/?$","segments":[[{"content":"nuestros-servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nuestros-servicios.astro","pathname":"/nuestros-servicios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/markdown-page.CjGK0vgi.css"}],"routeData":{"route":"/proceso","isIndex":false,"type":"page","pattern":"^\\/proceso\\/?$","segments":[[{"content":"proceso","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proceso.astro","pathname":"/proceso","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/markdown-page.CjGK0vgi.css"}],"routeData":{"route":"/quienes-somos","isIndex":false,"type":"page","pattern":"^\\/quienes-somos\\/?$","segments":[[{"content":"quienes-somos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quienes-somos.astro","pathname":"/quienes-somos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/markdown-page.CjGK0vgi.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/quienes-somos.astro",{"propagation":"none","containsHead":true}],["C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/markdown-page.md",{"propagation":"none","containsHead":true}],["C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/proceso.astro",{"propagation":"none","containsHead":true}],["C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/nuestros-servicios.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/send@_@ts":"pages/api/send.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/quienes-somos@_@astro":"pages/quienes-somos.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/markdown-page@_@md":"pages/markdown-page.astro.mjs","\u0000@astro-page:src/pages/proceso@_@astro":"pages/proceso.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/nuestros-servicios@_@astro":"pages/nuestros-servicios.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DAWlU4Rd.mjs","\u0000@astrojs-manifest":"manifest_DYIauKX1.mjs","@/components/services.tsx":"_astro/services.Chh64Typ.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/markdown-page.CjGK0vgi.css","/casa en remodelacion.jpg","/doctor con planilla.jpg","/doctor de frente.jpg","/doctor investigacion.jpg","/documentos sin humanos.jpg","/documentos zoom.jpg","/equipodetrabajoperspectivaarriba.jpg","/favicon.svg","/hombre analisando.jpg","/lectura de examen zoom.jpg","/paleta de colores pagina .png","/panoramido partida AUTOS.jpg","/personas hablando.jpg","/pexels-fauxels-3184292.jpg","/reunio desde arriba.jpg","/reunion completa.jpg","/revision automoviles.jpg","/revision moto.jpg","/zoom manos y teclado.jpg","/_astro/client.BPIbHqJh.js","/_astro/index.BVOCwoKb.js","/_astro/services.Chh64Typ.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"8Ispf3Ou/XMDhrak2WPa4/G0T///YAcFN87iRmu1Sxs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
