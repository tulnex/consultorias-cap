import { c as createComponent, a as createAstro, b as addAttribute, e as renderHead, f as renderComponent, d as renderTemplate } from '../chunks/astro/server_B9H9tflI.mjs';
import 'kleur/colors';
/* empty css                                         */
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_BfF24zHS.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const ServiceCard = ({ handleClick, service }) => {
  return /* @__PURE__ */ jsxs("button", { onClick: handleClick, className: "flex flex-col md:flex-row w-full rounded-xl overflow-hidden border-slate-200 border-[.5px]  cursor-pointer transition-all duration-500 hover:scale-110", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative w-2/5", children: [
      /* @__PURE__ */ jsx("img", { src: "", alt: "", className: "w-full h-[250px] bg-black" }),
      /* @__PURE__ */ jsx("span", { className: "absolute top-1 left-1 text-white text-xl bg-slate-400 rounded-lg px-4", children: service.name })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "p-8 w-3/5 font-bold text-2xl flex items-center", children: service.description })
  ] });
};

const Services = () => {
  const [services, setServices] = useState({
    title: "hola",
    description: "hola mundo"
  });
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(0);
  return /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-16 items-center py-12 lg:pt-24 lg:pb-28 w-full relative", children: [
    /* @__PURE__ */ jsx(ServiceCard, { handleClick: () => setShowModal(true), service: { name: "P&C", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." } }),
    /* @__PURE__ */ jsx(ServiceCard, { handleClick: () => setShowModal(true), service: { name: "P&C", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." } }),
    /* @__PURE__ */ jsx(ServiceCard, { handleClick: () => setShowModal(true), service: { name: "P&C", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." } }),
    showModal && // <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white h-[60vh] aspect-video'>
    /* @__PURE__ */ jsx("div", { className: "fixed top-[76px] left-0 w-screen h-[calc(100vh-76px)] bg-black/50 flex justify-center items-center fadein", children: /* @__PURE__ */ jsxs("div", { className: "relative w-[80vw] h-[calc(80vh-76px)] bg-white rounded-xl p-4 shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx("button", { onClick: () => setShowModal(false), className: "bg-primary py-2 px-4 rounded-full p-4 transition-all duration-500 hover:bg-slate-800 hover:text-white", children: "x" }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-center text-2xl font-bold", children: services.title }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-lg", children: services.description })
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$NuestrosServicios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NuestrosServicios;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Capital Consultorias SAS</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="container mx-auto"> <section class="flex flex-col gap-16 lg:gap-20 items-center py-12 lg:pt-24 lg:pb-28"> <section class="flex flex-col w-4/5 gap-24"> <h2 class="text-4xl font-bold lg:text-7xl">
Nuestros servicios
</h2> <div class="flex flex-wrap justify-between gap-24 w-full"> <img class="flex-1 aspect-video bg-slate-400 rounded-lg" src="/hjksdhfj.png" alt=""> <div class="w-full md:w-[40%] flex flex-col gap-16"> <h3 class="text-6xl font-bold">
lorem ipsum dolor sit amet
</h3> <p class="text-lg font-bold">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aspernatur beatae similique repellat numquam animi dolorem ex accusamus, provident quidem reiciendis atque officiis facere rem quaerat. Dolore ex mollitia vitae!
</p> <a href="/contacto" class="text-white font-extrabold bg-[#7d4a6b] border border-[#7d4a6b] transition-all duration-500 hover:bg-white hover:text-[#7d4a6b] px-4 p-2 w-fit rounded-2xl">
Contactanos!
</a> </div> </div> </section> ${renderComponent($$result, "Services", Services, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/services.tsx", "client:component-export": "default" })} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/nuestros-servicios.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/nuestros-servicios.astro";
const $$url = "/nuestros-servicios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NuestrosServicios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
