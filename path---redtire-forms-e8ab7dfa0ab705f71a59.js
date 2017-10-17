webpackJsonp([0x944faa667b41],{473:function(a,s){a.exports={data:{markdownRemark:{html:'<p><a href="http://redtire.dept.ku.edu/">KU RedTire</a> is a business owner successor program with the goal of matching retiring Kansas business owners University of Kansas graduates and alums who have the expertise and ambition to run those businesses. The company is run by Denton Zeeman and Wally Meyer, two KU Business School Professors. Heavily involved in the <a href="https://catalyst.ku.edu/">KU Catalyst Program</a>, Wally has served as an incredible mentor to me these past two years. Wally wanted simplify the application process for retiring and aspiring business owners. The Redtire website previously had only PDF versions of the two forms available to applicants, which they would have to download, fill out, scan and then resubmit via email. I set out to convert the PDFs into responsive online forms.</p>\n<p>I used <a href="http://getbootstrap.com/">Bootstrap</a> to create the forms, paired with the Google Font <a href="https://www.google.com/fonts/specimen/Roboto">Roboto</a>. I used PHP scripts to build HTML email messages from the form submissions, making use of the handy <a href="https://github.com/PHPMailer/PHPMailer">PHPMailer</a> library. The aspiring business owner application form includes a 30 question survey, so I made use of a few simple “factory” functions to create headers and table row elements.</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token keyword">function</span> <span class="token function">headerFactory</span><span class="token punctuation">(</span><span class="token variable">$header</span><span class="token operator">=</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">"&lt;h3>&lt;b>"</span><span class="token punctuation">.</span><span class="token variable">$header</span><span class="token punctuation">.</span><span class="token string">"&lt;/b>&lt;/h3>"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">createSalesTableRow</span><span class="token punctuation">(</span><span class="token variable">$field</span><span class="token operator">=</span><span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token variable">$val1</span><span class="token operator">=</span><span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token variable">$val2</span><span class="token operator">=</span><span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token variable">$val3</span><span class="token operator">=</span><span class="token string">\'\'</span><span class="token punctuation">,</span><span class="token variable">$val4</span><span class="token operator">=</span><span class="token string">\'\'</span><span class="token punctuation">,</span><span class="token variable">$val5</span><span class="token operator">=</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">"&lt;tr>&lt;th>"</span><span class="token punctuation">.</span><span class="token variable">$field</span><span class="token punctuation">.</span><span class="token string">"&lt;/th>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val1</span><span class="token punctuation">.</span><span class="token string">"&lt;/td>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val2</span><span class="token punctuation">.</span><span class="token string">"&lt;/td>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val3</span><span class="token punctuation">.</span><span class="token string">"&lt;/td>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val4</span><span class="token punctuation">.</span><span class="token string">"&lt;/td>&lt;td>"</span><span class="token punctuation">.</span><span class="token variable">$val5</span><span class="token punctuation">.</span><span class="token string">"&lt;/td>&lt;/tr>"</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Mac OS X Yosemite and Mac OS X El Capitan both come with Apache 2.4 preinstalled, which I used for local development and script testing. I used Gmail’s smtp via PHPMailer since I didn’t have access/credentials to the KU email servers during development. <a href="https://coolestguidesontheplanet.com/get-apache-mysql-php-and-phpmyadmin-working-on-osx-10-11-el-capitan/">This tutorial</a> was very helpful with getting PHP configured correctly. Note: If you plan on using Gmail’s smtp with PHPMailer in the future, save yourself an error message and make sure to generate an <a href="https://support.google.com/accounts/answer/185833?hl=en">application specific password</a> for use in your scripts.</p>\n<p>Here’s an example message produced by the scripts, for the Retiring Business Owner Initial Interest Form:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/3e9bc3b4da432b693770ea342116b77a-a6e2f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 740px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 68.92067620286085%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAABRklEQVQ4y61T246CMBT0/79NjfFBEpGb3FoqAiJVVsiscxJ2zWYfdN2TTM5JC8N0psxwryiKsNls4HkedrsdttstXNeV7vu+9DAMZY/rXOOzfd/jZ83wzyWEaZoijmPBfr/H7XZ7j5CVJAkOhwM6e4UXFXAjg6L+QNMNrxMqpURllmVIcgMnviDQV7R2wKUfXyfkUUkYBAHO5/P7Hk4+LpdLLBYLVFUFa60kPyVLO7TWGMfxOcL1ei2Yz+dyTUhIX0lCMmMMjsfj10w8zk3TfBOeTichWa1WotBxHJRVAz9toKvXghHCoigkEIYzdaU04lQjyQoobVCWpaCua+lUS/WcH30XQt49gpv/crHpAVUyZf5STJ3zb7/W00fO81ykt20r6Lru7wp5VHpHT0hMD6fOjxGyZu5B5RahspLwtM/36O0wDPgEyOY4E8LByYIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="retiringsub"\n        title=""\n        src="/static/3e9bc3b4da432b693770ea342116b77a-87ff5.png"\n        srcset="/static/3e9bc3b4da432b693770ea342116b77a-6d00f.png 185w,\n/static/3e9bc3b4da432b693770ea342116b77a-24b81.png 370w,\n/static/3e9bc3b4da432b693770ea342116b77a-87ff5.png 740w,\n/static/3e9bc3b4da432b693770ea342116b77a-316f3.png 1110w,\n/static/3e9bc3b4da432b693770ea342116b77a-fb1ab.png 1480w,\n/static/3e9bc3b4da432b693770ea342116b77a-a6e2f.png 1538w"\n        sizes="(max-width: 740px) 100vw, 740px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The messages are formatted to be copy and pasted directly into a spreadsheet. I really enjoyed working on this project – it was one that I saw from idea to actual deployment live on the <a href="http://redtire.dept.ku.edu/">KU Redtire site</a>, with help from the Chris Welchhans, the KU Business School’s Web Developer.</p>',timeToRead:2,tableOfContents:"",fields:{tagSlugs:["/tags/html-css/","/tags/bootstrap/","/tags/project/"]},frontmatter:{title:"RedTire Application Forms",tags:["HTML/CSS","Bootstrap","project"],date:"August 06, 2016",author:{id:"Evan Nichols",bio:"Software Engineer and outdoor enthusiast. EngRes @ Google NYC.",avatar:{children:[{responsiveResolution:{src:"/static/4c8a15d8009c77284919b7aa2785b3cc-88e85.jpg",srcSet:"/static/4c8a15d8009c77284919b7aa2785b3cc-88e85.jpg 1x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-db17a.jpg 1.5x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-599b9.jpg 2x,\n/static/4c8a15d8009c77284919b7aa2785b3cc-3e248.jpg 3x"}}]}}}}},pathContext:{slug:"/redtire-forms/"}}}});
//# sourceMappingURL=path---redtire-forms-e8ab7dfa0ab705f71a59.js.map