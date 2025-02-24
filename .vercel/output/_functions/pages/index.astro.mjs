/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, j as renderScript } from '../chunks/astro/server_CcVLmjOX.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_mrjMBSL_.mjs';
import { $ as $$SectionTitle, a as $$Section } from '../chunks/SectionTitle_82lpuxrW.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_BSI4YwyX.mjs';
export { renderers } from '../renderers.mjs';

const decorForm = new Proxy({"src":"/_astro/contact-pic.BrB0SfUf.png","width":692,"height":649,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/artem/WebstormProjects/fontfreaky.com/src/assets/pics/contact-pic.png";
							}
							
							return target[name];
						}
					});

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden"> <form class="bg-gray sm:p-6 h-full w-full lg:max-w-lg"> <div class="mb-4"> <textarea id="message" placeholder="Start typing to 𝓯𝓻𝓮𝓪𝓴𝔂" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none"></textarea> <button type="button" id="copyButton" class="btn-primary w-full mt-2">Copy</button> </div> </form> <picture class="absolute right-[-35%] top-[2%] bottom-[2%] hidden lg:block"> ${renderComponent($$result, "Image", $$Image, { "src": decorForm, "alt": "decor" })} </picture> </div> ${renderScript($$result, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/ui/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/ui/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-[140px] relative"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Text to \u{1D4EF}\u{1D4FB}\u{1D4EE}\u{1D4EA}\u{1D4F4}\u{1D502}", "description": "So, who's freaky now? HAAAHAAAA!!! \u{1F60E}" })} ${renderComponent($$result2, "Form", $$Form, {})} </div> ` })}`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/sections/Contact.astro", void 0);

const HeroIlust = new Proxy({"src":"/_astro/_image.A-O3BRPZ.svg","width":601,"height":515,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/artem/WebstormProjects/fontfreaky.com/public/_image.svg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> <div class="text-left space-y-3"> <h1 class="text-4xl font-medium leading-none md:text-6xl text-center md:text-left">The Problem Behind <br>Freaky Font</h1> <p class="mt-6 mb-8 text-lg font-normal leading-7 sm:mb-12 text-center md:text-left md:pr-12">Creating and using Freaky Font wasn’t as easy as it might seem. The inspiration came from the challenges of working with Math Bold Script-like fonts, which are embedded in Unicode characters and not directly available in practical formats like TTF or SVG.</p> <h2>The Problem We Set Out to Solve</h2> <ul> <li><strong>Limited Accessibility:</strong> Fonts like Math Bold Script exist only in Unicode and can only be rendered in specialized environments, leaving users without downloadable or editable versions.</li> <li><strong>No Ready Formats:</strong> There was no TTF or SVG version available, making it difficult for designers and developers to incorporate the font into their projects.</li> <li><strong>Technical Barriers:</strong> Extracting or converting these fonts into scalable formats wasn’t just difficult—it was nearly impossible with standard tools.</li> </ul> <p>This challenge led us to develop <strong>Freaky Font</strong>: a beautifully crafted typeface inspired by Math Bold Script, available for download in TTF and SVG formats.</p> <p>Now, Freaky Font is here to bridge the gap, allowing anyone to integrate this bold and elegant style into their projects without hassle. <a href="https://fontfreaky.com/" target="_blank">Download it today</a> and unleash the boldness!</p> <div class="w-full justify-center md:justify-start items-center inline-flex"> <a href="https://fontfreaky.com/public/Freaky Font.zip" target="_blank" class="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">Download Freaky Font – Free TTF & SVG
</a> </div> </div> </div> <div class="flex items-center py-5 md:w-6/12 md:pb-20 md:pt-10"> ${renderComponent($$result2, "Image", $$Image, { "src": HeroIlust, "alt": "Hero Ilustration", "loading": "eager" })} </div> </div> ` })}`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/components/sections/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Download Freaky Font \u2013 Free TTF & SVG", "description": "Freaky Font is your source for Math Bold Script fonts in TTF and SVG formats. Perfect for web, graphic design, and more. Download now!" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "/Users/artem/WebstormProjects/fontfreaky.com/src/pages/index.astro", void 0);

const $$file = "/Users/artem/WebstormProjects/fontfreaky.com/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
