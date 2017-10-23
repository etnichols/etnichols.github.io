webpackJsonp([31059830293339],{464:function(a,s){a.exports={data:{markdownRemark:{html:'<p>I’ve spent the last few weekends migrating this site to use <a href="https://github.com/gatsbyjs/gatsby">Gatsby 1.0</a>, released this past July. The static site generator <a href="https://www.gatsbyjs.org/blog/2017-09-21-community-roundup-1/">has quickly gained popularity</a> over the past few months, and for good reason. The React/Graphql powered framework offers a lot of cool features right out of the box, a rich plugin ecosystem, and great documentation to boot. In this post I’ll highlight <html><head></head><body><use specific="" number="" here=""></use></body></html> favorite Gatsby features and plugins, and how I’ve used them within this site.</p>\n<h2 id="posts-in-markdown-gatsby-transformer-remark"><a href="#posts-in-markdown-gatsby-transformer-remark" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Posts in Markdown (gatsby-transformer-remark)</h2>\n<p>All of the posts for this site are written in <a href="https://daringfireball.net/projects/markdown/syntax">Markdown</a>. It’s a lightweight markup language developed for easy conversion to HTML. It looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> Posts in Markdown (gatsby-transformer-remark)</span>\nAll of the posts for this site are written in <span class="token url">[Markdown][<span class="token variable">2</span>]</span>.\n\nIt\'s a lightweight markup language developed for easy conversion to HTML.\n\nIt looks like this:\n\n...\n\n<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> https://daringfireball.net/projects/markdown/syntax</span>\n</code></pre>\n      </div>\n<p>In Gatsby, this conversion is handled by <a href="https://www.gatsbyjs.org/packages/gatsby-transformer-remark/">gatsby-transformer-remark</a>. It takes markdown nodes produced by <a href="https://www.gatsbyjs.org/packages/gatsby-source-filesystem/">gatsby-source-filesystem</a> and transforms them into valid HTML. Additionally, Graphql makes it easy to query against frontmatter fields in your posts. Adding tags to posts and having drafts is easily configured. Here’s a snippet from my own <code>gatsby-node.js</code> file grabbing all Markdown posts which are NOT drafts:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token function">graphql</span><span class="token punctuation">(</span>\n      <span class="token template-string"><span class="token string">`\n        {\n          allMarkdownRemark(\n            limit: 1000\n            filter: { frontmatter: { draft: { ne: true } } }\n          ) {\n            edges {\n              node {\n                fields {\n                  slug\n                }\n                frontmatter {\n                  tags\n                }\n              }\n            }\n          }\n        }\n      `</span></span>\n    <span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The ability to filter on frontmatter gives you as a user much more fine-grained control over presentation over data presentation. One could add a postType frontmatter field, and use different layouts for different postTypes. Or for a multi-author site, the ability fetch specific author information and profile picture.</p>\n<h2 id="code-highlighting-gatsby-remark-prismjs"><a href="#code-highlighting-gatsby-remark-prismjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code Highlighting (gatsby-remark-prismjs)</h2>\n<p>For any bloggers who frequently include code snippets in their posts, <a href="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/">gatsby-remark-prismjs</a> is a simple way to enable syntax highlighting. All you have to do is require a prism theme on the layouts used within your site:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`prismjs/themes/prism-solarizedlight.css`</span></span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Prism offers <a href="http://prismjs.com/test.html">lots of different themes</a>, too.</p>\n<p>Line highlighting is easy to achieve with the addition defining a <code>gatsby-highlight-code-line</code> CSS class and including it on your layout.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>Regular line\nRegular line\n<span class="gatsby-highlight-code-line">Important line<span class="token operator">!</span>\n</span><span class="gatsby-highlight-code-line">Important line<span class="token operator">!</span>\n</span>Regular line\n<span class="token operator">...</span>\n</code></pre>\n      </div>\n<h2 id="adding-images-gatsby-remark-images"><a href="#adding-images-gatsby-remark-images" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Images (gatsby-remark-images)</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/5968003871cf50dfe79df16d6d947e65-8c976.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAZ9RPzqc4JeRYJ4gn//EABsQAAMAAwEBAAAAAAAAAAAAAAECAwARExAS/9oACAEBAAEFAoPvKXCM79GU87Xk30QuUirO0N48yH9//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHxAAAgIBBAMAAAAAAAAAAAAAAAECERIgIjGBIXGR/9oACAEBAAY/AsGuCnGyzscnX0232OWXhkd3Hoej/8QAHhABAAICAgMBAAAAAAAAAAAAAQARIUEx0VFhkcH/2gAIAQEAAT8hzbFrGw/JoZaTqKvHwS0TFUbi8NoYumIrJowdsW8V3AoXp7H2ZwKWzJHkjuE//9oADAMBAAIAAwAAABCM+v7/xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQMf/aAAgBAwEBPxCJ8yEP/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERECH/2gAIAQIBAT8QrT7lKf/EACAQAQEAAgICAgMAAAAAAAAAAAERACExUUFhEHGh0fD/2gAIAQEAAT8QO7qhEvDsu8B2CXS/kxRksAhCegxaKwF4uxwYUaC6dD5f3hdlC6vk3OM4mkRwfsPPrF9zyqobvXrJWlBSnuL1n5D8HHP/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="gatsby remark images"\n        title=""\n        src="/static/5968003871cf50dfe79df16d6d947e65-8c976.jpg"\n        srcset="/static/5968003871cf50dfe79df16d6d947e65-11bff.jpg 185w,\n/static/5968003871cf50dfe79df16d6d947e65-8c976.jpg 200w"\n        sizes="(max-width: 200px) 100vw, 200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://www.gatsbyjs.org/packages/gatsby-remark-images/">Gatsby-remark-images</a> allows you to directly include images within your Markdown posts. If you want even more control over images on your site, consider using the <a href="https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/">gatsby-transformer-sharp</a>, which is basically a wrapper around the Sharp image processing library.</p>\n<h2 id="adding-other-file-types-gatsby-remark-copy-linked-files"><a href="#adding-other-file-types-gatsby-remark-copy-linked-files" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding other file types (gatsby-remark-copy-linked-files)</h2>\n<p><em>What if I use .gif or .pdf files within my site?</em> <a href="https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files/">Gatsby-remark-copy-linked-files</a> will make your dreams come true. I mean, it will make your GIFs and PDFs work when referenced in your posts. Like this one.</p>\n<p><img src="/1db0c643ba0316948ebb85fd070bfa51.gif"></p>\n<h2 id="google-analytics-gatsby-plugin-google-analytics"><a href="#google-analytics-gatsby-plugin-google-analytics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Google Analytics (gatsby-plugin-google-analytics)</h2>\n<p>I like to keep close tabs on the five or so people who frequent this site, and for that I use Google Analytics. How do I add that into my site? Yep, you guessed it, another plugin: <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/">gatsby-plugin-google-analytics</a>. Install the module and add this line to your gatsby-config.js:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>    <span class="token punctuation">{</span>\n      resolve<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`gatsby-plugin-google-analytics`</span></span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        trackingId<span class="token punctuation">:</span> <span class="token string">\'Your-Tracking-Id\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>Boom! Analytics.</p>\n<h2 id="simple-deployment-gh-pages"><a href="#simple-deployment-gh-pages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple Deployment (gh-pages)</h2>\n<p>There are a variety of ways to deploy a static site. I’ve written about Surge before, and Gatsby provides information on how to deploy with Github Pages and Amazon’s Cloudfront CDN. I’ve used Github Pages for the last few years, which is made simple with the <a href="https://www.npmjs.com/package/gh-pages">gh-pages</a> npm module.</p>\n<p>If you’re a student, consider applying for the <a href="https://education.github.com/pack">Github Student Developer Pack</a> – it’s free! And it includes offers a free one-year registration of a .me domain name through Namecheap. Or if you don’t mind spending <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mn>1</mn><mn>0</mn><mo>−</mo></mrow><annotation encoding="application/x-tex">10-</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.64444em;"></span><span class="strut bottom" style="height:0.72777em;vertical-align:-0.08333em;"></span><span class="base textstyle uncramped"><span class="mord mathrm">1</span><span class="mord mathrm">0</span><span class="mord">−</span></span></span></span>20 bucks, you can find another .com or .io or .something to use. Once you have one registered, and have the gh-pages module included as a devDependency, you can add a deploy script to your <code>package.json</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"develop"</span><span class="token punctuation">:</span> <span class="token string">"gatsby develop"</span><span class="token punctuation">,</span>\n    <span class="token string">"build"</span><span class="token punctuation">:</span> <span class="token string">"gatsby build"</span><span class="token punctuation">,</span>\n    <span class="token string">"serve"</span><span class="token punctuation">:</span> <span class="token string">"gatsby serve"</span><span class="token punctuation">,</span>\n<span class="gatsby-highlight-code-line">    <span class="token string">"deploy"</span><span class="token punctuation">:</span> <span class="token string">"gatsby build --prefix-paths &amp;&amp; echo your_domain_name.com > public/CNAME &amp;&amp; gh-pages -d public --branch master"</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span>  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The first command is the Gatsby production build command using a <a href="https://www.gatsbyjs.org/docs/path-prefix/">path prefix</a> (mine is just the root path ’/’, since my site is hosted at e-nichols.github.io). The second command sets up a CNAME record for your custom domain name. CNAME records basically act as an alias for another domain name. Github <a href="https://help.github.com/articles/quick-start-setting-up-a-custom-domain/">provides documentation</a> covering how to set this up. This command simply creates a CNAME file within the freshly-created <code>public</code> folder from the first command, containing <code>your_domain_name.com</code>. The third and final command invokes the gh-pages module which handles pushing the content of the <code>public</code> folder to the <code>master</code> branch.</p>\n<h2 id="typography-module-gatsby-plugin-typography"><a href="#typography-module-gatsby-plugin-typography" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Typography Module (gatsby-plugin-typography)</h2>\n<p>I like reading. I especially like reading things written in a nice font. Which is why I was happy to find plugin support for <a href="http://kyleamathews.github.io/typography.js/">Typography.js</a>, another one of Kyle Mathews’ projects. Usage of the gatsby-plugin-typography is explained nicely in <a href="https://www.gatsbyjs.org/tutorial/part-two/">part two of the Gatsby tutorial</a>. I use <a href="https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-st-annes">st-annes theme</a> for this site.</p>\n<h2 id="this-site"><a href="#this-site" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>This site</h2>\n<p>This site is a fork of the <a href="https://using-remark.gatsbyjs.org/">Gatsby Remark example website</a>, with some small tweaks to layout and fonts used. It’s simple and I like it. The source code is available <a href="https://github.com/e-nichols/e-nichols.github.io/tree/dev">here</a>.</p>\n<h2 id="closing-thoughts"><a href="#closing-thoughts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Closing thoughts</h2>\n<p>Gatsby is a great static site generation option because it is easy to use, it has a diverse plugin selection and detailed documentation. In an otherwise crowded arena of static site generation frameworks, Gatsby stands out. I’m excited to see how the framework and community around it grow.</p>',timeToRead:5,tableOfContents:'<ul>\n<li><a href="#posts-in-markdown-gatsby-transformer-remark">Posts in Markdown (gatsby-transformer-remark)</a></li>\n<li><a href="#code-highlighting-gatsby-remark-prismjs">Code Highlighting (gatsby-remark-prismjs)</a></li>\n<li><a href="#adding-images-gatsby-remark-images">Adding Images (gatsby-remark-images)</a></li>\n<li><a href="#adding-other-file-types-gatsby-remark-copy-linked-files">Adding other file types (gatsby-remark-copy-linked-files)</a></li>\n<li><a href="#google-analytics-gatsby-plugin-google-analytics">Google Analytics (gatsby-plugin-google-analytics)</a></li>\n<li><a href="#simple-deployment-gh-pages">Simple Deployment (gh-pages)</a></li>\n<li><a href="#typography-module-gatsby-plugin-typography">Typography Module (gatsby-plugin-typography)</a></li>\n<li><a href="#this-site">This site</a></li>\n<li><a href="#closing-thoughts">Closing thoughts</a></li>\n</ul>',fields:{tagSlugs:["/tags/gatsby/","/tags/web-development/","/tags/react/"]},frontmatter:{title:"Static site generation with the plugin-rich Gatsby 1.0",tags:["gatsby","web development","React"],date:"October 15, 2017",author:{id:"Evan Nichols",bio:"Software Engineer and outdoor enthusiast. EngRes @ Google NYC.",avatar:{children:[{responsiveResolution:{src:"/static/4c8a15d8009c77284919b7aa2785b3cc-88e85.jpg",srcSet:"/static/4c8a15d8009c77284919b7aa2785b3cc-88e85.jpg 1x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-db17a.jpg 1.5x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-599b9.jpg 2x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-3e248.jpg 3x"}}]}}}}},pathContext:{slug:"/blog-redesign-with-gatsby/"}}}});
//# sourceMappingURL=path---blog-redesign-with-gatsby-c3d075a7da7ac225da0c.js.map