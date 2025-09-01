import { c as createComponent, a as createAstro, b as addAttribute, e as renderHead, f as renderComponent, d as renderTemplate } from '../chunks/astro/server_B9H9tflI.mjs';
import 'kleur/colors';
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_BfF24zHS.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$QuienesSomos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QuienesSomos;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro + TailwindCSS</title>${renderHead()}</head> <body class="relative"> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="bg-slate-800 text-white"> <div class="container mx-auto"> <section class="flex flex-row justify-between w-[90%] mx-auto py-40 min-h-[75vh]"> <h1 class="text-6xl font-bold leading-20 flex-1 bg-white text-black p-4 pseudo relative">Ayudamos a nuestros clientes a <span class="bg-[#7d4a6b] text-white px-2"> Administrar </span></h1> <div class="flex flow-row flex-2 justify-end"> <span class="w-1/3"></span> <p class="mt-auto text-lg w-2/3"> <span class="font-bold">
Lorem ipsum dolor sit amet elit. Quidem, voluptatibus.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus.
</span> <br> <br>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatibus.
</p> </div> </section> </div> <div class="bg-white text-black py-40"> <section class="container mx-auto"> <div class="flex flex-wrap gap-40 justify-between"> <div class="w-full lg:w-[60%] p-10 lg:pl-20 lg:pt-20"> <div class="px-20"> <p class="text-3xl font-bold">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" target="_blank" class="text-[#7d4a6b] hover:underline">Cum dolore vel quae voluptas provident.</a> Impedit sed blanditiis aut sint dolore ab dignissimos deserunt, voluptas cum voluptatem ad, aperiam sequi beatae!
</p> </div> </div> <div class="flex-1 flex flex-col"> <ul class="flex flex-col gap-16"> <li class="flex flex-col gap-2"> <span class="text-6xl font-bold">
98%
</span> <p class="text-lg font-bold text-slate-400">
de clientes satisfechos
</p> </li> <li class="flex flex-col gap-2"> <span class="text-6xl font-bold">
14.000+
</span> <p class="text-lg font-bold text-slate-400">
de casos resueltos
</p> </li> <li class="flex flex-col gap-2"> <span class="text-6xl font-bold">
89%
</span> <p class="text-lg font-bold text-slate-400">
de cobertura a nivel nacional
</p> </li> </ul> </div> </div> </section> </div> <div class="py-20 flex flex-row justify-between container mx-auto gap-20 px-20 items-center"> <img src="equipodetrabajoperspectivaarriba.jpg" alt="" class="aspect-video w-1/3 object-cover rounded-2xl"> <div class="flex flex-col gap-8"> <h3 class="text-6xl font-bold">Trabajo en equipo</h3> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam nam quaerat veniam sunt eveniet laboriosam nulla deleniti laborum dolores. Odio vitae ratione architecto soluta dolore numquam, nulla voluptas sed.
                        Doloremque quia ea corrupti maxime eius quo repudiandae, unde vel vitae aut rem animi? Cum odio amet voluptatem. Reprehenderit sunt neque perferendis optio porro accusamus laborum doloremque ex repellendus corporis.
                        Sequi, cum reprehenderit. Aliquam ut labore dicta natus. Aut, eveniet quos labore autem impedit dolorem aliquam, nobis et doloremque est rerum, saepe accusamus harum quam iure non eaque rem iusto.
</p> </div> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/quienes-somos.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/quienes-somos.astro";
const $$url = "/quienes-somos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$QuienesSomos,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
