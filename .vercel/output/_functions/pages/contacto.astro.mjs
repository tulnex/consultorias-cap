import { c as createComponent, a as createAstro, b as addAttribute, e as renderHead, f as renderComponent, g as renderScript, d as renderTemplate } from '../chunks/astro/server_N88lyJG8.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_CJzwN8Cr.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Capital Consultorias SAS</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="container mx-auto px-4 py-8"> <div class="max-w-2xl mx-auto"> <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">Contáctanos</h1> <form id="contactForm" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
Nombre completo *
</label> <input type="text" id="name" name="name" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tu nombre completo"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
Email *
</label> <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="tu@email.com"> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
Teléfono
</label> <input type="tel" id="phone" name="phone" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+57 300 123 4567"> </div> <div> <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
Asunto
</label> <input type="text" id="subject" name="subject" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="¿En qué podemos ayudarte?"> </div> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
Mensaje *
</label> <textarea id="message" name="message" required rows="6" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Cuéntanos más detalles sobre tu consulta..."></textarea> </div> <div id="formMessage" class="hidden p-4 rounded-md"></div> <button type="submit" id="submitBtn" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"> <span id="submitText">Enviar mensaje</span> <span id="loadingText" class="hidden">Enviando...</span> </button> </form> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/pages/contacto.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contacto,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
