import { c as createComponent, m as maybeRenderHead, d as renderTemplate } from '../chunks/astro/server_B9H9tflI.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p>hola mundo</p>`;
}, "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/consc/OneDrive/Documents/Code/consultorias-cap/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Nosotros,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
