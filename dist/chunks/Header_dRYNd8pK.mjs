import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate, m as maybeRenderHead, s as spreadAttributes, r as renderComponent, F as Fragment, u as unescapeHTML } from './astro/server_CU_xHMHS.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */
import { a as SITE_TITLE } from './consts_D1L10WR2.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';

const AboutHeroImage = new Proxy({"src":"/_astro/img01.CfMPNKJg.jpg","width":1079,"height":1347,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/evemontalvao/projects/evemontalvao/src/assets/img01.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/evemontalvao/projects/evemontalvao/src/assets/img01.jpg");
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://evemontalvao.github.io");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = AboutHeroImage } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image.src, Astro2.url), "content")}>`;
}, "/Users/evemontalvao/projects/evemontalvao/src/components/BaseHead.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1769515183,"icons":{"arrow-left":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 12H5m7 7-7-7 7-7\"/>"},"github":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.4 13.4 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"/>"},"heart":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78\"/>"},"instagram":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"/><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37m1.5-4.87h.01\"/></g>"},"strava":{"body":"<path d=\"M31.016 26.855 19.839 4.5 8.661 26.855m14.033 0L31.016 43.5l8.323-16.645\" style=\"fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round\"/>","width":48,"height":48}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("https://evemontalvao.github.io");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/Users/evemontalvao/projects/evemontalvao/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p class="inline" data-astro-cid-sz7xmlte>Made with ${renderComponent($$result, "Icon", $$Icon, { "name": "heart", "class": "icon", "data-astro-cid-sz7xmlte": true })}</p> <p data-astro-cid-sz7xmlte>A place to share my hobbies,</p><p data-astro-cid-sz7xmlte>away from the noise of social media.</p> <p data-astro-cid-sz7xmlte>All works © me. Made to be seen, not reused.</p> <ul class="social-links" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="https://instagram.com/montalvaoeve" data-astro-cid-sz7xmlte>${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "icon", "data-astro-cid-sz7xmlte": true })}</a> </li> <li data-astro-cid-sz7xmlte> <a href="https://strava.com/athletes/31136766" data-astro-cid-sz7xmlte>${renderComponent($$result, "Icon", $$Icon, { "name": "strava", "class": "icon", "stroke-width": 4, "data-astro-cid-sz7xmlte": true })}</a> </li> <li data-astro-cid-sz7xmlte> <a href="https://github.com/evemontalvao" data-astro-cid-sz7xmlte>${renderComponent($$result, "Icon", $$Icon, { "name": "github", "class": "icon", "data-astro-cid-sz7xmlte": true })}</a> </li> </ul> </footer> `;
}, "/Users/evemontalvao/projects/evemontalvao/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <h2 data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>${SITE_TITLE}</a> </h2> <p class="subtitle" data-astro-cid-3ef6ksr2>
A small collection of things I make in the margins of ordinary days.
</p> </header> `;
}, "/Users/evemontalvao/projects/evemontalvao/src/components/Header.astro", void 0);

export { $$BaseHead as $, AboutHeroImage as A, $$Header as a, $$Footer as b, $$Icon as c };
