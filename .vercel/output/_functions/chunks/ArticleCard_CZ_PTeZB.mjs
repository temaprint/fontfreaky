import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro, d as renderComponent, e as addAttribute } from './astro/server_CcVLmjOX.mjs';
import 'kleur/colors';
import { f as formatDate } from './utils_CIZL8hpr.mjs';
import 'clsx';
import { $ as $$Card } from './Card_BThOjvlh.mjs';

const $$ArticleIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/Icons/ArticleIcon.astro", void 0);

const $$VideoIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/Icons/VideoIcon.astro", void 0);

const $$Astro = createAstro("https://positivustheme.vercel.app");
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="p-6"> <div class="flex justify-between items-center mb-5 text-gray-500"> <span class="bg-green text-black text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"> ${article.data.type == "Article" ? renderTemplate`${renderComponent($$result2, "ArticleIcon", $$ArticleIcon, {})}` : renderTemplate`${renderComponent($$result2, "VideoIcon", $$VideoIcon, {})}`} ${article.data.type} </span> <span class="text-sm">${formatDate(article.data.pubDate)}</span> </div> <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${article.data.title}</h2> <p class="mb-5 font-light text-gray-500" style="white-space: pre-line">${article.data.summary}</p> <div class="flex justify-between items-center"> <div class="flex items-center space-x-4"> <img class="w-7 h-7 rounded-full"${addAttribute(article.data.authImage, "src")}${addAttribute(article.data.author + " cover", "alt")}> <span class="font-medium"> ${article.data.author} </span> </div> <a${addAttribute("/articles/" + article.slug, "href")} class="inline-flex items-center font-medium text-black hover:text-green">
Read more
<svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </a> </div> </article> ` })}`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/ui/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
