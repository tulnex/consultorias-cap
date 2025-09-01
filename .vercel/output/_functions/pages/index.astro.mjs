import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate, e as renderHead, f as renderComponent } from '../chunks/astro/server_B9H9tflI.mjs';
import 'kleur/colors';
/* empty css                                         */
import 'clsx';
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_BfF24zHS.mjs';
import { $ as $$BentoItem } from '../chunks/BentoItem_rv5kbmDf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BusinessLineCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BusinessLineCard;
  const { title, imageSrc, href, alt, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="flex flex-col justify-between gap-2 w-[400px] transform transition-all duration-700 hover:scale-110 hover:shadow-xl rounded-lg bg-transparent"> <img class="aspect-video w-full bg-slate-400 rounded-lg"${addAttribute(imageSrc, "src")}${addAttribute(alt, "alt")}> <h2 class="text-lg font-bold"> ${title} </h2> <p class=""> ${description} </p> <p class="text-[#7d4a6b] font-extrabold">Conoce Más!</p> </a>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/components/BusinessLineCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Capital Consultorias SAS</title>${renderHead()}</head> <body class="relative"> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="container mx-auto"> <section class="flex flex-col gap-16 lg:gap-20 items-center py-12 lg:pt-48 lg:pb-28"> <div class="flex flex-col gap-4 items-center w-4/5 lg:w-2/3"> <h2 class="text-xl md:text-5xl lg:text-6xl font-bold text-center">Aseguradora Numero 1 de Colombia en seguros todo riesgo.</h2> <span class="text-slate-400 text-lg">Ayudando a las personas a tener un mejor servicio para su tranquilidad</span> </div> <section class="w-full flex flex-col gap-4 lg:gap-10"> <div class="flex flex-row gap-4 lg:gap-10"> ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "flex-2" }, { "default": ($$result2) => renderTemplate`
contenido uno
` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "flex-1" }, { "default": ($$result2) => renderTemplate`
contenido dos
` })} </div> <div class="flex flex-row gap-4 lg:gap-10"> ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "flex-1" }, { "default": ($$result2) => renderTemplate`
contenido tres
` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "flex-1" }, { "default": ($$result2) => renderTemplate`
contenido cuatro
` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "flex-1" }, { "default": ($$result2) => renderTemplate`
contenido cinco
` })} </div> </section> </section> <div class="container mx-auto flex-col flex justify-center items-center my-8 gap-16"> <h3 class="text-6xl font-bold text-center">Lineas de Negocio</h3> <div class="container mx-auto flex flex-wrap justify-center gap-24 md:flex-nowrap"> ${renderComponent($$result, "BusinessLineCard", $$BusinessLineCard, { "title": "Automoviles", "imageSrc": "/images/line1.png", "href": "#", "alt": "linea 1", "description": "linea 1 description" })} ${renderComponent($$result, "BusinessLineCard", $$BusinessLineCard, { "title": "Vida", "imageSrc": "/images/line2.png", "href": "#", "alt": "linea 2", "description": "linea 2 description" })} ${renderComponent($$result, "BusinessLineCard", $$BusinessLineCard, { "title": "P&C", "imageSrc": "/images/line3.png", "href": "#", "alt": "linea 3", "description": "linea 3 description" })} </div> </div> <div class="container mx-auto flex flex-wrap justify-center items-center my-28 gap-16"> <div class="flex-1 flex flex-col lg:gap-16"> <h2 class="text-3xl lg:text-6xl font-bold">Contacto</h2> <p class="text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo porro explicabo vitae unde laboriosam asperiores atque, quis commodi, vero exercitationem a hic rem illum dolor doloremque. Consequuntur ducimus neque ratione?</p> <a href="/contacto" class="text-[#7d4a6b] font-extrabold bg-white border border-[#7d4a6b] transition-all duration-500 hover:bg-[#7d4a6b] hover:text-white px-4 p-2 w-fit rounded-2xl">Contactanos!</a> </div> <img src="/images/contact.png" alt="contact" class="w-200 lg:w-[600px] aspect-video rounded-lg bg-slate-400"> </div> <div class="container mx-auto flex flex-wrap justify-center items-center my-28 gap-16"> <div class="flex-1 flex flex-col lg:gap-8 items-center lg:max-w-3/5"> <h2 class="text-3xl lg:text-6xl font-bold text-center">Contacto</h2> <p class="text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo porro explicabo vitae unde laboriosam asperiores atque, quis commodi, vero exercitationem a hic rem illum dolor doloremque. Consequuntur ducimus neque ratione?</p> <div class="flex flex-row gap-4 lg:gap-10"> <a href="/proceso" class="text-[#7d4a6b] font-extrabold bg-white border border-[#7d4a6b] transition-all duration-500 hover:bg-[#7d4a6b] hover:text-white px-4 p-2 w-fit rounded-2xl">Conoce el proceso</a> <a href="/contacto" class="text-white font-extrabold bg-[#7d4a6b] border border-[#7d4a6b] transition-all duration-500 hover:bg-white hover:text-[#7d4a6b] px-4 p-2 w-fit rounded-2xl">Contactanos!</a> </div> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/index.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
