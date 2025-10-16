import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderSlot, d as renderTemplate, b as addAttribute, e as renderHead, f as renderComponent } from '../chunks/astro/server_N88lyJG8.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$NavBar, a as $$Footer } from '../chunks/Footer_CJzwN8Cr.mjs';
import { $ as $$BentoItem } from '../chunks/BentoItem_CDzGRdfr.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Step = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Step;
  const { step, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-6"> <div class="flex gap-4 items-center"> <span class="flex w-16 aspect-square items-center justify-center rounded-full bg-gradient-to-b from-[#7d4a6b] to-white text-6xl font-bold text-white">${step}</span> <span class="flex-1 h-4 bg-gradient-to-r from-[#7d4a6b] to-white"></span> </div> <h4 class="font-bold">${title}</h4> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/components/Step.astro", void 0);

const $$Astro = createAstro();
const $$Proceso = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proceso;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Nuestro Proceso - Capital Consultorías SAS</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="container mx-auto"> <section class="py-20 flex flex-col gap-20 px-4"> <div class="flex flex-col gap-4 items-center"> <h2 class="text-sm font-bold text-[#7d4a6b] uppercase tracking-wider">Nuestro Proceso</h2> <h3 class="text-4xl md:text-6xl font-bold w-4/5 text-center">Metodología Probada para el Éxito Empresarial</h3> <p class="text-lg md:text-2xl text-center w-4/5 text-slate-400">En Capital Consultoría SAS seguimos un proceso estructurado y comprobado que garantiza resultados excepcionales. Nuestra metodología combina análisis profundo, estrategia personalizada y implementación eficiente para transformar su empresa.</p> </div> <div class="flex flex-col lg:flex-row gap-4 lg:gap-10 w-4/5 mx-auto"> ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "flex-2", "backgroundImage": "/equipodetrabajoperspectivaarriba.jpg" }, { "default": ($$result2) => renderTemplate` <div class="h-full flex flex-col justify-between"> <div> <h3 class="text-2xl font-bold mb-4 text-white">Análisis Integral</h3> <p class="text-lg mb-6 text-white">Realizamos un diagnóstico completo de su empresa, identificando oportunidades de mejora y áreas de crecimiento potencial.</p> <div class="space-y-2 mb-6"> <p class="text-sm text-white">• Evaluación de procesos actuales</p> <p class="text-sm text-white">• Análisis de eficiencia operativa</p> <p class="text-sm text-white">• Identificación de cuellos de botella</p> </div> </div> <button class="bg-white text-black px-4 py-2 rounded-lg font-semibold w-fit">Ver más</button> </div> ` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "flex-1", "backgroundImage": "/personas hablando.jpg" }, { "default": ($$result2) => renderTemplate` <div class="h-full flex flex-col justify-between"> <div> <h3 class="text-xl font-bold mb-3 text-white">Consultoría Personalizada</h3> <p class="text-sm mb-4 text-white">Trabajamos directamente con su equipo para desarrollar soluciones adaptadas a sus necesidades específicas.</p> </div> <button class="bg-white text-black px-3 py-2 rounded-lg font-semibold w-fit text-sm">Ver más</button> </div> ` })} </div> </section> <section class="py-20 flex flex-col gap-20 px-4"> <div class="flex flex-col gap-4 items-center"> <h3 class="text-4xl md:text-6xl font-bold w-3/5 text-center">Nuestros 4 Pasos Hacia el Éxito</h3> <p class="text-lg md:text-2xl text-center w-3/5 text-slate-400">Cada proyecto sigue nuestra metodología probada de cuatro fases, diseñada para maximizar el impacto y garantizar resultados duraderos para su empresa.</p> <a href="/contacto" class="text-white font-extrabold bg-[#7d4a6b] border border-[#7d4a6b] transition-all duration-500 hover:bg-white hover:text-[#7d4a6b] px-6 py-3 w-fit rounded-2xl text-lg">¡Comencemos!</a> </div> <div class="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4"> ${renderComponent($$result, "Step", $$Step, { "step": "1", "title": "Diagn\xF3stico y An\xE1lisis" }, { "default": ($$result2) => renderTemplate` <p class="text-sm text-slate-600 mb-3">Realizamos una evaluación exhaustiva de su empresa, analizando procesos, estructura organizacional y oportunidades de mejora.</p> <ul class="text-xs text-slate-500 space-y-1"> <li>• Auditoría de procesos</li> <li>• Análisis de eficiencia</li> <li>• Identificación de problemas</li> </ul> ` })} ${renderComponent($$result, "Step", $$Step, { "step": "2", "title": "Estrategia y Planificaci\xF3n" }, { "default": ($$result2) => renderTemplate` <p class="text-sm text-slate-600 mb-3">Desarrollamos una estrategia personalizada basada en nuestros hallazgos, con objetivos claros y métricas de éxito.</p> <ul class="text-xs text-slate-500 space-y-1"> <li>• Definición de objetivos</li> <li>• Plan de implementación</li> <li>• Cronograma detallado</li> </ul> ` })} ${renderComponent($$result, "Step", $$Step, { "step": "3", "title": "Implementaci\xF3n" }, { "default": ($$result2) => renderTemplate` <p class="text-sm text-slate-600 mb-3">Ejecutamos las mejoras planificadas con acompañamiento continuo y ajustes según sea necesario.</p> <ul class="text-xs text-slate-500 space-y-1"> <li>• Capacitación del equipo</li> <li>• Implementación gradual</li> <li>• Monitoreo constante</li> </ul> ` })} ${renderComponent($$result, "Step", $$Step, { "step": "4", "title": "Seguimiento y Optimizaci\xF3n" }, { "default": ($$result2) => renderTemplate` <p class="text-sm text-slate-600 mb-3">Realizamos seguimiento continuo para asegurar la sostenibilidad de las mejoras y optimizar resultados.</p> <ul class="text-xs text-slate-500 space-y-1"> <li>• Evaluación de resultados</li> <li>• Ajustes y mejoras</li> <li>• Soporte continuo</li> </ul> ` })} </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/pages/proceso.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/pages/proceso.astro";
const $$url = "/proceso";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Proceso,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
