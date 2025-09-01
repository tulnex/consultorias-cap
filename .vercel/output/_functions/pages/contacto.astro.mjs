import { c as createComponent, a as createAstro, b as addAttribute, e as renderHead, f as renderComponent, d as renderTemplate } from '../chunks/astro/server_B9H9tflI.mjs';
import 'kleur/colors';
/* empty css                                         */
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_BfF24zHS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Capital Consultorias SAS</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="container mx-auto"> <form action="api/send"> <button>Enviar</button> </form> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contacto,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
