/* empty css                                    */
import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, d as renderComponent } from '../../chunks/astro/server_CcVLmjOX.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_BSI4YwyX.mjs';
import 'clsx';
import { c as capitalize, f as formatDate } from '../../chunks/utils_CIZL8hpr.mjs';
import { a as getEntry } from '../../chunks/_astro_content_BS18hn_1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://positivustheme.vercel.app");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-2"> ${tags.map((tag, index) => renderTemplate`<span class="px-2 py-1 bg-lime text-black rounded-full text-xs hover:opacity-90"><a${addAttribute("/articles/tag/" + tag, "href")}>#${capitalize(tag)}</a></span>`)} </div>`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/ui/Tags.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("blog", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Welcome to My site" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40 pt-24"> <section class="bg-white"> <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-3"> <div class="font-light text-gray-500 sm:text-lg"> <a href="/articles" class="inline-flex items-center font-medium text-black hover:text-green my-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path> </svg> <span class="ml-1 font-bold text-lg">All Articles</span> </a> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">${entry.data.title}</h2> <h3 class="text-lg mb-2">Written by ${entry.data.author} on ${formatDate(entry.data.pubDate)}</h3> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} <img${addAttribute("/blog/" + entry.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-xl my-6"> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </section> </main> ` })}`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/pages/articles/[...slug].astro", void 0);

const $$file = "/Users/artem/WebstormProjects/fontfreaky.com/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
