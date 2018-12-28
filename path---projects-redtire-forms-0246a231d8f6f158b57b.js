webpackJsonp([0xd2f057079132],{469:function(a,s){a.exports={data:{markdownRemark:{html:'<p><a href="http://redtire.dept.ku.edu/">KU RedTire</a> is a business owner successor program with the goal of matching retiring Kansas business owners University of Kansas graduates and alums who have the expertise and ambition to run those businesses. The company is run by Denton Zeeman and Wally Meyer, two KU Business School Professors. Heavily involved in the <a href="https://catalyst.ku.edu/">KU Catalyst Program</a>, Wally has served as an incredible mentor to me these past two years. Wally wanted simplify the application process for retiring and aspiring business owners. The Redtire website previously had only PDF versions of the two forms available to applicants, which they would have to download, fill out, scan and then resubmit via email. I set out to convert the PDFs into responsive online forms.</p>\n<p>I used <a href="http://getbootstrap.com/">Bootstrap</a> to create the forms, paired with the Google Font <a href="https://www.google.com/fonts/specimen/Roboto">Roboto</a>. I used PHP scripts to build HTML email messages from the form submissions, making use of the handy <a href="https://github.com/PHPMailer/PHPMailer">PHPMailer</a> library. The aspiring business owner application form includes a 30 question survey, so I made use of a few simple “factory” functions to create headers and table row elements.</p>\n<div class="gatsby-highlight" data-language="php">\n      <pre class="language-php"><code class="language-php"><span class="token keyword">function</span> <span class="token function">headerFactory</span><span class="token punctuation">(</span><span class="token variable">$header</span><span class="token operator">=</span><span class="token single-quoted-string string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token double-quoted-string string">"&lt;h3>&lt;b>"</span><span class="token punctuation">.</span><span class="token variable">$header</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;/b>&lt;/h3>"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">createSalesTableRow</span><span class="token punctuation">(</span><span class="token variable">$field</span><span class="token operator">=</span><span class="token single-quoted-string string">\'\'</span><span class="token punctuation">,</span> <span class="token variable">$val1</span><span class="token operator">=</span><span class="token single-quoted-string string">\'\'</span><span class="token punctuation">,</span> <span class="token variable">$val2</span><span class="token operator">=</span><span class="token single-quoted-string string">\'\'</span><span class="token punctuation">,</span> <span class="token variable">$val3</span><span class="token operator">=</span><span class="token single-quoted-string string">\'\'</span><span class="token punctuation">,</span><span class="token variable">$val4</span><span class="token operator">=</span><span class="token single-quoted-string string">\'\'</span><span class="token punctuation">,</span><span class="token variable">$val5</span><span class="token operator">=</span><span class="token single-quoted-string string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token double-quoted-string string">"&lt;tr>&lt;th>"</span><span class="token punctuation">.</span><span class="token variable">$field</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;/th>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val1</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;/td>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val2</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;/td>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val3</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;/td>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val4</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;/td>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val5</span><span class="token punctuation">.</span><span class="token double-quoted-string string">"&lt;/td>&lt;/tr>"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Mac OS X Yosemite and Mac OS X El Capitan both come with Apache 2.4 preinstalled, which I used for local development and script testing. I used Gmail’s smtp via PHPMailer since I didn’t have access/credentials to the KU email servers during development. <a href="https://coolestguidesontheplanet.com/get-apache-mysql-php-and-phpmyadmin-working-on-osx-10-11-el-capitan/">This tutorial</a> was very helpful with getting PHP configured correctly. Note: If you plan on using Gmail’s smtp with PHPMailer in the future, save yourself an error message and make sure to generate an <a href="https://support.google.com/accounts/answer/185833?hl=en">application specific password</a> for use in your scripts.</p>\n<p>Here’s an example message produced by the scripts, for the Retiring Business Owner Initial Interest Form:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/retiringsub-3e9bc3b4da432b693770ea342116b77a-a6e2f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 740px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 68.92067620286085%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuElEQVQ4y5VT7Y6CMBDk/R/N+EfDRQ2ICoKgFJBPgcpcp3egZ0zurnHcAu12d2Zq+L4Py7JwPB7hui622y1s28Zut8PhcNDY7/f6eXzHtV3XgWMYBjwPoyxL5HmOoih0rOoaddOgqio0KtbqmfF1fr/f3yeM4xhhGOJ0OiGKQtxlh7+O12Q6If88z4NQiaumw9qJYLkCUdYhryW36Y3v8LZC8kHetrYFPxRYHVs4YYu0lKjbx6bfMK4zzuezajXSZJPH72bUTyqe5MTVX9vXLZPD5XKJxWKB6/WK5naDaX4o9W04jgMeyjUUo23bCVSase/7R4V8aZqmTjifz7U1yrJA4Hu4ZgniywVCCJ00TVNkWabBgxmTJNGOmBLSKpvNRieczWZYr1Y4RQL7IEeUKmGqXi9k6yOk/KKClb2KY4zGpnkpkBAx4iSDGwjsvAjhOVGVpD+q45xVM5KGZ+EMLriotoIgAE2uocQZBvkvP04V8rqReCZkhfQkMV6t/4ypQt6WUbWbUphz8vRAj17Fvpc6Pn8jjyOnukKKwpap4it40Nc3xWVcKMPf4F9qCKUsvUseaadnlT8Bsok24UAi1dMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="retiringsub"\n        title=""\n        src="/static/retiringsub-3e9bc3b4da432b693770ea342116b77a-87ff5.png"\n        srcset="/static/retiringsub-3e9bc3b4da432b693770ea342116b77a-6d00f.png 185w,\n/static/retiringsub-3e9bc3b4da432b693770ea342116b77a-24b81.png 370w,\n/static/retiringsub-3e9bc3b4da432b693770ea342116b77a-87ff5.png 740w,\n/static/retiringsub-3e9bc3b4da432b693770ea342116b77a-316f3.png 1110w,\n/static/retiringsub-3e9bc3b4da432b693770ea342116b77a-fb1ab.png 1480w,\n/static/retiringsub-3e9bc3b4da432b693770ea342116b77a-a6e2f.png 1538w"\n        sizes="(max-width: 740px) 100vw, 740px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The messages are formatted to be copy and pasted directly into a spreadsheet. I really enjoyed working on this project – it was one that I saw from idea to actual deployment live on the <a href="http://redtire.dept.ku.edu/">KU Redtire site</a>, with help from the Chris Welchhans, the KU Business School’s Web Developer.</p>',timeToRead:2,tableOfContents:"",fields:{tagSlugs:["/tags/html-css/","/tags/bootstrap/","/tags/project/"]},frontmatter:{title:"RedTire Application Forms",tags:["HTML/CSS","Bootstrap","project"],date:"August 06, 2016",author:{id:"Evan Nichols",bio:"Software Engineer out of NYC writing about programming, web development and more.",avatar:{children:[{__typename:"ImageSharp",responsiveResolution:{src:"/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-c4f5a.jpg",srcSet:"/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-c4f5a.jpg 1x,\n/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-27112.jpg 1.5x,\n/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-f5e46.jpg 2x,\n/static/evan-9e6a6b67e58d77cd1bc023a71bd56378-592c8.jpg 3x"}}]}}}}},pathContext:{slug:"/projects/redtire-forms/"}}}});
//# sourceMappingURL=path---projects-redtire-forms-0246a231d8f6f158b57b.js.map