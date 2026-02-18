import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, e as renderHead } from '../chunks/astro/server_CU_xHMHS.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_CI7ApaWx.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Header_dRYNd8pK.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_D1L10WR2.mjs';
import 'clsx';
/* empty css                                  */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://evemontalvao.github.io");
const $$PostThumbnail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostThumbnail;
  const { id, data } = Astro2.props;
  const hasMultipleImages = data.images && data.images.length > 0;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/${id}/`, "href")} data-astro-cid-n3se52fv> <div${addAttribute(`post ${hasMultipleImages ? "multiple-imgs" : ""}`, "class")} data-astro-cid-n3se52fv> <img${addAttribute(data.heroImage?.src, "src")} alt="" data-astro-cid-n3se52fv> <h3 data-astro-cid-n3se52fv>${data.title}</h3> </div> </a> `;
}, "/Users/evemontalvao/projects/evemontalvao/src/components/PostThumbnail.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Oranienbaum&family=Quicksand:wght@300..700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`${renderComponent($$result, "PostThumbnail", $$PostThumbnail, { ...post, "data-astro-cid-j7pv25f6": true })}`)} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/Users/evemontalvao/projects/evemontalvao/src/pages/index.astro", void 0);

const $$file = "/Users/evemontalvao/projects/evemontalvao/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
