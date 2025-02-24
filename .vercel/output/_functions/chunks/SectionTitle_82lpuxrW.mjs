import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as renderSlot } from './astro/server_CcVLmjOX.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://positivustheme.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="px-5 flex justify-center overflow-hidden lg:block"> <div class="w-full max-w-[1280px] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/sections/Section.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { sectionTitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center gap-10 mb-20 sm:flex-row"> <h2 class="greenhead text-center sm:text-left text-3xl sm:text-4xl">${sectionTitle}</h2> <p class="w-auto text-center sm:text-left sm:w-[580px]"> ${description} </p> </div>`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/ui/SectionTitle.astro", void 0);

export { $$SectionTitle as $, $$Section as a };
