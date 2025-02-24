/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CcVLmjOX.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BSI4YwyX.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="relative flex flex-col-reverse items-center justify-center md:flex-row" id="hero"> <div class="row items-center py-5 md:pb-20 md:pt-10"> <div class="justify-center flex py-5"> <img src="/404.svg" width="50%" alt="Hero"> </div> <div class="text-center space-y-10"> <h2 class="text-2xl font-medium leading-none md:text-4xl">Sorry, we couldn't find the page you were looking for</h2> <a class="px-9 py-5 bg-black hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="./" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">Go Back Home</h2> </a> </div> </div> </div> </main> ` })}`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/pages/404.astro", void 0);

const $$file = "/Users/artem/WebstormProjects/fontfreaky.com/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$404,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
