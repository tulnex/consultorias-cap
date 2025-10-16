import { c as createComponent, a as createAstro, b as addAttribute, e as renderHead, f as renderComponent, d as renderTemplate } from '../chunks/astro/server_N88lyJG8.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_CJzwN8Cr.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nosotros;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Nosotros - Capital Consultorías SAS"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Nosotros - Capital Consultorías SAS</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="bg-slate-800 text-white min-h-screen"> <div class="container mx-auto px-4 py-16"> <div class="text-center"> <h1 class="text-4xl font-bold mb-8">Nosotros</h1> <p class="text-xl text-gray-300 max-w-2xl mx-auto">
Esta página está en construcción. Próximamente tendrás información completa sobre nuestro equipo y nuestra empresa.
</p> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Nosotros,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
