import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate, f as renderComponent } from './astro/server_B9H9tflI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group relative"> <a${addAttribute(href, "href")}${addAttribute(`${className} capitalize`, "class")}> ${renderSlot($$result, $$slots["default"])} </a> <span class="absolute inset-x-0 h-0.5 group-hover:bg-[#7d4a6b] transition-all duration-500 -bottom-0.5"></span> </div>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/components/NavLink.astro", void 0);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sticky top-0 z-50 bg-white/30 backdrop-blur-sm"> <nav class="container mx-auto"> <div class="flex justify-between py-6"> <a href="/"> <h1 class="font-bold text-xl text-[#7d4a6b]">
Consultorias Capital
</h1> </a> <ul class="flex gap-8"> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "href": "/" }, { "default": ($$result2) => renderTemplate`inicio` })} </li> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "href": "/quienes-somos" }, { "default": ($$result2) => renderTemplate`quienes somos` })} </li> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "href": "/nuestros-servicios" }, { "default": ($$result2) => renderTemplate`nuestros servcicios` })} </li> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "href": "/nuestros-servicios" }, { "default": ($$result2) => renderTemplate`soluciones` })} </li> <li> ${renderComponent($$result, "NavLink", $$NavLink, { "href": "/contacto" }, { "default": ($$result2) => renderTemplate`contacto` })} </li> </ul> </div> </nav> </div>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/components/layout/NavBar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col justify-center py-12 bg-black text-white gap-8"> <div class="container mx-auto px-4 md:px-0 flex flex-wrap gap-16 lg:justify-between"> <h2 class="text-3xl lg:text-4xl font-bold">Consultorias Capital</h2> <div class="flex flex-wrap gap-4 lg:gap-24"> <ul class="flex flex-col gap-2"> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> </ul> <ul class="flex flex-col gap-2"> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> </ul> <ul class="flex flex-col gap-2"> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> <li>Lorem ipsum dolor</li> </ul> </div> </div> <div class="flex justify-end container mx-auto px-4 md:px-0"> <a href="/proceso" class="text-[#7d4a6b] font-extrabold bg-white border border-[#7d4a6b] transition-all duration-500 hover:bg-[#7d4a6b] hover:text-white px-4 p-2 w-fit rounded-2xl">Conoce el proceso</a> </div> <div class="container mx-auto px-4 md:px-0"> <hr> </div> <div class="container mx-auto flex flex-wrap gap-16 px-4 md:px-0"> <a href="#">
Linkedin
</a> </div> <div class="container mx-auto px-4 md:px-0"> <hr> </div> <span class="w-full text-center">
© 2023 Consultorias Capital
</span> </footer>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/components/layout/Footer.astro", void 0);

export { $$NavBar as $, $$Footer as a };
