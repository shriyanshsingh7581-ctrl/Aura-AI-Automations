import fs from 'fs';
import path from 'path';
import {
  SITE_URL,
  BUSINESS_NAME,
  OG_IMAGE_URL,
  HOME_SEO,
  ALL_SERVICE_PAGES_LIST,
  getHomepageJsonLd,
  getServicePageJsonLd,
} from '../src/data/seoPages.ts';

const distDir = path.resolve('dist');
const publicDir = path.resolve('public');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildSitemapXml() {
  const today = new Date().toISOString().split('T')[0];
  const urls = [
    { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' },
    ...ALL_SERVICE_PAGES_LIST.map((p) => ({
      loc: p.canonicalUrl,
      priority: p.slug.includes('-for-') ? '0.85' : '0.9',
      changefreq: 'weekly',
    })),
  ];

  const itemsXml = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${itemsXml}
</urlset>
`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function buildHomepageSemanticHtml() {
  const serviceLinksHtml = ALL_SERVICE_PAGES_LIST.map(
    (p) =>
      `<li><a href="${p.path}">${escapeHtml(p.shortTitle)} — ${escapeHtml(p.metaDescription)}</a></li>`
  ).join('\n          ');

  return `<div class="min-h-screen bg-[#faf9f6] text-[#0f172a] flex flex-col font-sans">
    <header>
      <nav aria-label="Primary Navigation">
        <a href="/">Aura AI Automations</a>
        <a href="/#about">Company</a>
        <a href="/#impact">Milestones</a>
        <a href="/#services">Services</a>
        <a href="/#originals">Originals</a>
        <a href="/#tech-stack">Tech Stack</a>
        <a href="/#contact">Contact</a>
        <a href="https://app.auraai.sbs">Create Voice Calling Agent</a>
      </nav>
    </header>
    <main>
      <section>
        <h1>Aura AI Automations</h1>
        <p>Automate business calls, customer support, WhatsApp inquiries and lead generation with Aura AI Automations. AI Receptionist and Voice Agents for Indian businesses.</p>
        <div class="hero-actions">
          <a href="https://app.auraai.sbs">Create Voice Calling Agent</a>
          <a href="/ai-receptionist">Explore Our AI Receptionist</a>
        </div>
        <img src="/aura-founder-photo.webp" alt="Founder of Aura AI Automations" width="1024" height="1536" />
      </section>
      <section id="about">
        <h2>We engineer autonomous systems that turn ideas into scalable code.</h2>
        <h3>Who We Are &amp; What We Do</h3>
        <p>Founded by Shriyansh Singh Rajpoot, Aura AI Automations builds autonomous AI voice agents, WhatsApp AI chatbots, self-hosted n8n workflow engines, and interactive 3D web flagships for Indian businesses, salons, clinics, coaching institutes, and photography studios.</p>
      </section>
      <section id="services">
        <h2>Core Expertise &amp; AI Automation Services</h2>
        <h3>Dedicated AI Automation Solutions for Indian Businesses</h3>
        <ul>
          ${serviceLinksHtml}
        </ul>
      </section>
      <section id="contact">
        <h2>Get In Touch</h2>
        <p>Email: <a href="mailto:contact@aurai.tech">contact@aurai.tech</a></p>
      </section>
    </main>
  </div>`;
}

function buildServicePageSemanticHtml(page) {
  const featuresHtml = page.keyFeatures
    .map(
      (f) =>
        `<div><h3>${escapeHtml(f.title)}</h3><p>${escapeHtml(f.description)}</p></div>`
    )
    .join('\n          ');

  const benefitsHtml = page.benefits
    .map(
      (b) =>
        `<div><h3>${escapeHtml(b.title)} (${escapeHtml(b.metric)})</h3><p>${escapeHtml(b.description)}</p></div>`
    )
    .join('\n          ');

  const useCasesHtml = page.useCases
    .map(
      (u) =>
        `<div><h3>${escapeHtml(u.industry)}</h3><p>${escapeHtml(u.scenario)}</p><p>${escapeHtml(u.outcome)}</p></div>`
    )
    .join('\n          ');

  const faqsHtml = page.faqs
    .map(
      (faq) =>
        `<div><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></div>`
    )
    .join('\n          ');

  const relatedLinksHtml = ALL_SERVICE_PAGES_LIST.filter((p) => p.slug !== page.slug)
    .map((rel) => `<li><a href="${rel.path}">${escapeHtml(rel.shortTitle)}</a></li>`)
    .join('\n          ');

  return `<div class="min-h-screen bg-[#faf9f6] text-[#0f172a] flex flex-col font-sans">
    <header>
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> / <a href="/#services">Services</a> / <span>${escapeHtml(page.shortTitle)}</span>
      </nav>
    </header>
    <main>
      <article>
        <section>
          <h1>${escapeHtml(page.h1)}</h1>
          <p>${escapeHtml(page.heroSubtitle)}</p>
          <img src="${page.avatarSrc}" alt="${escapeHtml(page.avatarAlt)}" width="800" height="800" />
        </section>
        <section>
          <h2>${escapeHtml(page.overviewHeading)}</h2>
          ${page.overviewParagraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n          ')}
        </section>
        <section>
          <h2>${escapeHtml(page.benefitsHeading)}</h2>
          ${benefitsHtml}
        </section>
        <section>
          <h2>${escapeHtml(page.keyFeaturesHeading)}</h2>
          ${featuresHtml}
        </section>
        <section>
          <h2>${escapeHtml(page.useCasesHeading)}</h2>
          ${useCasesHtml}
        </section>
        <section>
          <h2>${escapeHtml(page.faqHeading)}</h2>
          ${faqsHtml}
        </section>
        <section>
          <h2>${escapeHtml(page.ctaHeading)}</h2>
          <p>${escapeHtml(page.ctaDescription)}</p>
          <a href="https://app.auraai.sbs">Launch Studio on app.auraai.sbs</a>
          <a href="/#contact">Book a Demo / Contact Aura AI Automations</a>
        </section>
        <section>
          <h2>Explore Related AI Automation Services</h2>
          <ul>
            <li><a href="/">Aura AI Automations Homepage</a></li>
            ${relatedLinksHtml}
          </ul>
        </section>
      </article>
    </main>
  </div>`;
}

function injectRouteSeoIntoHtml(templateHtml, options) {
  const escapedTitle = escapeHtml(options.title);
  const escapedDesc = escapeHtml(options.description);
  const jsonLdString = JSON.stringify(options.jsonLd, null, 2);

  let html = templateHtml;

  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapedTitle}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapedDesc}" />`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${options.canonicalUrl}" />`
  );

  // Replace Open Graph tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapedTitle}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapedDesc}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${options.canonicalUrl}" />`
  );
  html = html.replace(
    /<meta property="og:site_name" content="[^"]*"\s*\/?>/,
    `<meta property="og:site_name" content="${escapeHtml(BUSINESS_NAME)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${OG_IMAGE_URL}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapedTitle}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapedDesc}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${OG_IMAGE_URL}" />`
  );

  // Replace JSON-LD script
  html = html.replace(
    /<script type="application\/ld\+json" data-aura-seo="jsonld">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" data-aura-seo="jsonld">\n${jsonLdString}\n    </script>`
  );

  // Inject pre-rendered semantic HTML into <div id="root"></div>
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${options.rootHtml}</div>`
  );

  return html;
}

function run() {
  // 1. Update sitemap.xml & robots.txt in both public/ and dist/
  const sitemapXml = buildSitemapXml();
  const robotsTxt = buildRobotsTxt();

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');

  if (!fs.existsSync(distDir)) {
    console.log('dist/ not found yet; updated public/sitemap.xml and public/robots.txt');
    return;
  }

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');

  const baseTemplatePath = path.join(distDir, 'index.html');
  const baseTemplateHtml = fs.readFileSync(baseTemplatePath, 'utf-8');

  // 2. Enhance dist/index.html with homepage pre-rendered HTML and verified metadata
  const homeHtml = injectRouteSeoIntoHtml(baseTemplateHtml, {
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    canonicalUrl: HOME_SEO.canonicalUrl,
    jsonLd: getHomepageJsonLd(),
    rootHtml: buildHomepageSemanticHtml(),
  });
  fs.writeFileSync(baseTemplatePath, homeHtml, 'utf-8');
  console.log('Pre-rendered dist/index.html');

  // 3. Generate pre-rendered HTML for all 5 dedicated service routes
  for (const page of ALL_SERVICE_PAGES_LIST) {
    const routeHtml = injectRouteSeoIntoHtml(baseTemplateHtml, {
      title: page.seoTitle,
      description: page.metaDescription,
      canonicalUrl: page.canonicalUrl,
      jsonLd: getServicePageJsonLd(page),
      rootHtml: buildServicePageSemanticHtml(page),
    });

    const routeDir = path.join(distDir, page.slug);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf-8');
    fs.writeFileSync(path.join(distDir, `${page.slug}.html`), routeHtml, 'utf-8');
    console.log(`Pre-rendered dist/${page.slug}/index.html`);
  }
}

run();
