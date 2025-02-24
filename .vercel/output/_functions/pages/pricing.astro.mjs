/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CcVLmjOX.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_BSI4YwyX.mjs';
import { $ as $$Card } from '../chunks/Card_BThOjvlh.mjs';
export { renderers } from '../renderers.mjs';

const priceData = [
	{
		title: "Starter",
		description: "Best option for personal use & for your next project",
		price: 29,
		devCount: "1 developer",
		support: "6 months",
		update: "6 months",
		action: "Get Started",
		link: "/"
	},
	{
		title: "Company",
		description: "Relevant for multiple users, extended & premium support",
		price: 99,
		devCount: "10 developers",
		support: "24 months",
		update: "24 months",
		action: "Get Started",
		link: "/"
	},
	{
		title: "Enterprise",
		description: "Best for large scale uses and extended redistribution rights",
		price: 499,
		devCount: "100+ developers",
		support: "36 months",
		update: "36 months",
		action: "Get Started",
		link: "/"
	}
];

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Our Pricing" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Designed for business teams like yours</h2> <p class="mb-5 font-light text-gray-500 sm:text-xl">Here at Positivus we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> </div> <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> <!-- Pricing Card --> ${priceData.map((item) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "isUnderline": true }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col p-6 mx-auto max-w-lg text-center"> <h3 class="mb-4 text-2xl font-semibold">${item.title}</h3> <p class="font-light text-gray-500 sm:text-lg">${item.description}</p> <div class="flex justify-center items-baseline my-8"> <span class="mr-2 text-5xl font-extrabold">$${item.price}</span> <span class="text-gray-500">/month</span> </div> <!-- List --> <ul role="list" class="mb-8 space-y-4 text-left"> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>Individual configuration</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>No setup, or hidden fees</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>Team size: <span class="font-semibold">${item.devCount}</span></span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>Premium support: <span class="font-semibold">${item.support}</span></span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span>Free updates: <span class="font-semibold">${item.update}</span></span> </li> </ul> <a${addAttribute(item.link, "href")} class="text-black hover:text-white bg-green hover:bg-black focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">${item.action}</a> </div> ` })}`)} </div> </div> </main> ` })}`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/pages/pricing.astro", void 0);

const $$file = "/Users/artem/WebstormProjects/fontfreaky.com/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Pricing,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
