import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_N88lyJG8.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BentoItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { class: className, backgroundImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`rounded-lg border-border p-4 text-background md:h-[25vh] lg:h-[35vh] ${className} ${backgroundImage ? "bg-cover bg-center bg-no-repeat" : "bg-slate-400"}`, "class")}${addAttribute(backgroundImage ? `background-image: url('${backgroundImage}')` : "", "style")}> <div${addAttribute(backgroundImage ? "bg-black/30 rounded-lg p-4 h-full flex flex-col justify-between" : "", "class")}> ${renderSlot($$result, $$slots["default"])} </div> </article>`;
}, "C:/Users/consc/OneDrive/Desktop/consultorias-cap/src/components/BentoItem.astro", void 0);

export { $$BentoItem as $ };
