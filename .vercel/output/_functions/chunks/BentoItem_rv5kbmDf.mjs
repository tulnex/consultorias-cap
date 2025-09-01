import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_B9H9tflI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BentoItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`rounded-lg bg-slate-400 border-border p-4 text-background md:h-[25vh] lg:h-[35vh] ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </article>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/components/BentoItem.astro", void 0);

export { $$BentoItem as $ };
