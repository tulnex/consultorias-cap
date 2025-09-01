import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderSlot, d as renderTemplate, b as addAttribute, e as renderHead, f as renderComponent } from '../chunks/astro/server_B9H9tflI.mjs';
import 'kleur/colors';
/* empty css                                         */
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_BfF24zHS.mjs';
import { $ as $$BentoItem } from '../chunks/BentoItem_rv5kbmDf.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Step = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Step;
  const { step, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-6"> <div class="flex gap-4 items-center"> <span class="flex w-16 aspect-square items-center justify-center rounded-full bg-gradient-to-b from-[#7d4a6b] to-white text-6xl font-bold text-white">${step}</span> <span class="flex-1 h-4 bg-gradient-to-r from-[#7d4a6b] to-white"></span> </div> <h4 class="font-bold">${title}</h4> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/components/Step.astro", void 0);

const $$Astro = createAstro();
const $$Proceso = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proceso;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Capital Consultorias SAS</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="container mx-auto"> <section class="py-20 flex flex-col gap-20"> <div class="flex flex-col gap-4 items-center"> <h2 class="text-sm font-bold">Conoce el proceso</h2> <h3 class="text-6xl font-bold w-4/5 text-center">Lorem Ipsum Dolor Sit Amet</h3> <p class="text-2xl text-center w-4/5 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aspernatur beatae similique repellat numquam animi dolorem ex accusamus, provident quidem reiciendis atque officiis facere rem quaerat. Dolore ex mollitia vitae!</p> </div> <div class="flex flex-row gap-4 lg:gap-10 w-4/5 mx-auto"> ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "flex-2" }, { "default": ($$result2) => renderTemplate`
contenido uno
` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "flex-1" }, { "default": ($$result2) => renderTemplate`
contenido dos
` })} </div> </section> <section class="py-20 flex flex-col gap-20"> <div class="flex flex-col gap-4 items-center"> <h3 class="text-6xl font-bold w-3/5 text-center">Lorem Ipsum Dolor Sit Amet</h3> <p class="text-2xl text-center w-3/5 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aspernatur beatae similique repellat numquam animi dolorem ex accusamus, provident quidem reiciendis atque officiis facere rem quaerat. Dolore ex mollitia vitae!</p> <a href="/contacto" class="text-white font-extrabold bg-[#7d4a6b] border border-[#7d4a6b] transition-all duration-500 hover:bg-white hover:text-[#7d4a6b] px-4 p-2 w-fit rounded-2xl">Contactanos!</a> </div> <div class="grid grid-cols-1 gap-16 md:grid-cols-4"> ${renderComponent($$result, "Step", $$Step, { "step": "1", "title": "Lorem ipsum dolor sit amet" }, { "default": ($$result2) => renderTemplate` <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad autem doloremque amet, ipsam molestias odio earum debitis officia? Repudiandae deserunt voluptatem odio aliquid eligendi tempora quia deleniti, assumenda obcaecati quis.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad autem doloremque amet, ipsam molestias odio earum debitis officia? Repudiandae deserunt voluptatem odio aliquid eligendi tempora quia deleniti, assumenda obcaecati quis.</p> ` })} ${renderComponent($$result, "Step", $$Step, { "step": "2", "title": "Lorem ipsum dolor sit amet" }, { "default": ($$result2) => renderTemplate` <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad autem doloremque amet, ipsam molestias odio earum debitis officia? Repudiandae deserunt voluptatem odio aliquid eligendi tempora quia deleniti, assumenda obcaecati quis.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad autem doloremque amet, ipsam molestias odio earum debitis officia? Repudiandae deserunt voluptatem odio aliquid eligendi tempora quia deleniti, assumenda obcaecati quis.</p> ` })} ${renderComponent($$result, "Step", $$Step, { "step": "3", "title": "Lorem ipsum dolor sit amet" }, { "default": ($$result2) => renderTemplate` <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad autem doloremque amet, ipsam molestias odio earum debitis officia? Repudiandae deserunt voluptatem odio aliquid eligendi tempora quia deleniti, assumenda obcaecati quis.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad autem doloremque amet, ipsam molestias odio earum debitis officia? Repudiandae deserunt voluptatem odio aliquid eligendi tempora quia deleniti, assumenda obcaecati quis.</p> ` })} ${renderComponent($$result, "Step", $$Step, { "step": "4", "title": "Lorem ipsum dolor sit amet" }, { "default": ($$result2) => renderTemplate` <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad autem doloremque amet, ipsam molestias odio earum debitis officia? Repudiandae deserunt voluptatem odio aliquid eligendi tempora quia deleniti, assumenda obcaecati quis.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad autem doloremque amet, ipsam molestias odio earum debitis officia? Repudiandae deserunt voluptatem odio aliquid eligendi tempora quia deleniti, assumenda obcaecati quis.</p> ` })} </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/proceso.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/proceso.astro";
const $$url = "/proceso";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Proceso,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
