import { c as createComponent, a as createAstro, b as addAttribute, e as renderHead, f as renderComponent, d as renderTemplate } from '../chunks/astro/server_N88lyJG8.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_CJzwN8Cr.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const ServiceCard = ({ handleClick, service }) => {
  return /* @__PURE__ */ jsxs("button", { onClick: handleClick, className: "flex flex-col md:flex-row w-full rounded-xl overflow-hidden border-slate-200 border-[.5px] cursor-pointer transition-all duration-500 hover:scale-110", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative w-2/5", children: [
      /* @__PURE__ */ jsx("img", { src: service.image, alt: service.name, className: "w-full h-[250px] object-cover" }),
      /* @__PURE__ */ jsx("span", { className: "absolute top-4 left-4 text-white text-lg bg-[#7d4a6b] rounded-lg px-4 py-2 font-semibold", children: service.name })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "p-8 w-3/5 font-bold text-xl flex items-center text-gray-700", children: service.description })
  ] });
};

const Services = () => {
  const [selectedService, setSelectedService] = useState({
    title: "",
    description: "",
    image: "",
    details: "",
    benefits: []
  });
  const [showModal, setShowModal] = useState(false);
  const services = [
    {
      name: "Optimización de Procesos",
      description: "Revolucionamos sus procesos operativos mediante análisis avanzado y automatización inteligente.",
      image: "/documentos sin humanos.jpg",
      title: "Optimización de Procesos",
      details: "Transformamos sus operaciones mediante análisis exhaustivo de procesos actuales, identificación de cuellos de botella y diseño de flujos optimizados.",
      benefits: [
        "Reducción de costos operativos hasta 40%",
        "Aumento de eficiencia en 60%",
        "Mejora en calidad de productos",
        "Reducción de errores humanos",
        "ROI garantizado en 6 meses"
      ]
    },
    {
      name: "Transformación Digital",
      description: "Modernizamos su empresa con tecnologías de vanguardia y sistemas integrados.",
      image: "/zoom manos y teclado.jpg",
      title: "Transformación Digital",
      details: "Implementamos soluciones tecnológicas avanzadas que conectan todos sus departamentos y optimizan la toma de decisiones empresariales.",
      benefits: [
        "Acceso a datos en tiempo real",
        "Mejora en la toma de decisiones",
        "Reducción de costos operativos",
        "Mayor competitividad",
        "Escalabilidad empresarial"
      ]
    },
    {
      name: "Gestión de Talento",
      description: "Desarrollamos estrategias integrales para atraer, retener y desarrollar el mejor talento.",
      image: "/reunion completa.jpg",
      title: "Gestión de Talento",
      details: "Creamos culturas organizacionales que impulsan el rendimiento y la satisfacción laboral mediante programas personalizados de desarrollo.",
      benefits: [
        "Aumento en satisfacción laboral",
        "Reducción de rotación de personal",
        "Mejora en productividad del equipo",
        "Desarrollo de líderes internos",
        "Cultura de innovación y crecimiento"
      ]
    }
  ];
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };
  return /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-16 items-center py-12 lg:pt-24 lg:pb-28 w-full relative", children: [
    services.map((service, index) => /* @__PURE__ */ jsx(
      ServiceCard,
      {
        handleClick: () => handleServiceClick(service),
        service
      },
      index
    )),
    showModal && /* @__PURE__ */ jsx("div", { className: "fixed top-[76px] left-0 w-screen h-[calc(100vh-76px)] bg-black/50 flex justify-center items-center fadein z-50", children: /* @__PURE__ */ jsxs("div", { className: "relative w-[80vw] h-[calc(80vh-76px)] bg-white rounded-xl p-8 shadow-2xl overflow-y-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-end mb-6", children: /* @__PURE__ */ jsx("button", { onClick: () => setShowModal(false), className: "bg-[#7d4a6b] text-white py-2 px-4 rounded-full transition-all duration-500 hover:bg-slate-800 hover:text-white", children: "×" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("img", { src: selectedService.image, alt: selectedService.title, className: "w-full h-64 object-cover rounded-xl mb-6" }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: selectedService.title }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-6", children: selectedService.details }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800 mb-4", children: "¿Qué Incluye?" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-600", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "•" }),
                "Análisis completo de procesos actuales"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "•" }),
                "Identificación de oportunidades de mejora"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "•" }),
                "Implementación de soluciones personalizadas"
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-2", children: "•" }),
                "Capacitación y seguimiento continuo"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-4", children: "Beneficios Principales" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: selectedService.benefits.map((benefit, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-500 mr-2", children: "✓" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: benefit })
          ] }, index)) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-xl mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-800 mb-2", children: "Caso de Éxito" }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-700 text-sm", children: '"Implementamos esta solución en una empresa manufacturera que logró reducir su tiempo de producción en 45% y aumentar la satisfacción del cliente en 30% en solo 4 meses."' })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsx("a", { href: "/contacto", className: "bg-[#7d4a6b] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#6a3f5a] transition-colors text-center", children: "Solicitar Consulta" }),
            /* @__PURE__ */ jsx("button", { onClick: () => setShowModal(false), className: "px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors", children: "Cerrar" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$Soluciones = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Soluciones;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Nuestras Soluciones - Capital Consultorías SAS</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="container mx-auto"> <section class="flex flex-col gap-16 lg:gap-20 items-center py-12 lg:pt-24 lg:pb-28"> <section class="flex flex-col w-4/5 gap-24"> <h2 class="text-4xl font-bold lg:text-7xl">
Nuestras Soluciones
</h2> <div class="flex flex-wrap justify-between gap-24 w-full"> <img class="w-full max-w-md aspect-video bg-slate-400 rounded-lg object-cover" src="/equipodetrabajoperspectivaarriba.jpg" alt="Equipo de Capital Consultoría trabajando en soluciones empresariales"> <div class="w-full md:w-[40%] flex flex-col gap-16"> <h3 class="text-6xl font-bold">
Soluciones que Transforman Empresas
</h3> <p class="text-lg font-bold">
En Capital Consultoría SAS desarrollamos soluciones empresariales personalizadas que revolucionan procesos, optimizan recursos y generan resultados medibles. Nuestro enfoque integral combina experiencia técnica con innovación para impulsar el crecimiento sostenible de su organización.
</p> <a href="/contacto" class="text-white font-extrabold bg-[#7d4a6b] border border-[#7d4a6b] transition-all duration-500 hover:bg-white hover:text-[#7d4a6b] px-4 p-2 w-fit rounded-2xl">
¡Solicitar Consulta!
</a> </div> </div> </section> ${renderComponent($$result, "Services", Services, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/services", "client:component-export": "default" })} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/pages/soluciones.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/pages/soluciones.astro";
const $$url = "/soluciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Soluciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
