(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"pageQuery",function(){return d});var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=a(182),c=a(170),s=a(171);function u(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html,l=t.tableOfContents,i=t.timeToRead;return r.a.createElement(o.a,null,r.a.createElement("header",null,r.a.createElement("h1",{style:{marginBottom:Object(s.a)(.5),color:a.shadow}},a.title),r.a.createElement("hr",{style:{marginBottom:Object(s.a)(.5)}}),r.a.createElement("p",{style:{marginTop:0,paddingTop:0,display:"block",color:""+c.a.colors.light}},i+" min read • ",r.a.createElement(m,{post:t}))),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l},className:"toc"}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n},className:"post"}))}var m=function(e){var t,a=e.post;if(a.fields.tagSlugs){var n=a.fields.tagSlugs;t=n.map(function(e,t){var l=t<n.length-1&&r.a.createElement("span",null,", ");return r.a.createElement("span",{key:e},r.a.createElement(i.a,{to:e},a.frontmatter.tags[t]),l)})}return r.a.createElement("span",{style:{fontStyle:"normal",textAlign:"left"}},"tagged ",t)},d="3662921676"},170:function(e,t,a){"use strict";var n=a(176),r="291, 0%, 18%",l={black:"hsla("+r+",1)",text:"hsla("+r+",0.95)",light:"hsla("+r+",0.4)",calm:"hsla("+r+",0.3)",smoke:"hsla("+r+",0.2)",whiteSmoke:"hsla("+r+",0.08)",white:"#fff",link:"#03a9f4",linkHover:"#ff5252"};t.a={animations:{animationCurveFastOutSlowIn:"cubic-bezier(0.4, 0, 0.2, 1)",animationCurveLinearOutSlowIn:"cubic-bezier(0, 0, 0.2, 1)",animationCurveFastOutLinearIn:"cubic-bezier(0.4, 0, 1, 1)",animationCurveDefault:"cubic-bezier(0.4, 0, 0.2, 1)",animationSpeedDefault:"250ms",animationSpeedFast:"200ms",animationSpeedSlow:"300ms"},colors:l,container:Object(n.style)({maxWidth:"37rem",margin:"0 auto"})}},171:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(177),r=a.n(n),l=a(178),i=a.n(l),o=new r.a(i.a);var c=o.rhythm;o.scale},172:function(e){e.exports={data:{site:{siteMetadata:{title:"etnichols"}}}}},173:function(e,t,a){"use strict";a(77),a(57),a(36),a(175),a(76);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=a(15),c={posts:"/",projects:"/projects",tutorials:"/tutorials",about:"/about"};t.a=function(e){return r.a.createElement(o.Location,null,function(e){var t=e.location.pathname.split("/")[1];return Object.entries(c).map(function(e){var a=e[0],n=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"link-style",to:n},(function(e,t){return e===t||""===t&&"posts"===e}(a,t)?"•":"")+" "+a),r.a.createElement("br",null))})})}},182:function(e,t,a){"use strict";var n=a(172),r=a(0),l=a.n(r),i=a(1),o=a.n(i),c=a(56),s=a(7),u=a.n(s),m=a(173),d=(a(156),a(170)),f=(a(171),function(e){var t=e.children;return l.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("main",null,l.a.createElement(u.a,{to:"/",css:{display:"inline-block"}},l.a.createElement("h1",{className:"site-title"},a)),l.a.createElement("hr",null),l.a.createElement(m.a,null),t),l.a.createElement("footer",null,l.a.createElement("div",{style:{color:d.a.colors.text,textAlign:"center"}},"© "+(new Date).getFullYear()+" "+a))))},data:n})});f.propTypes={children:o.a.node.isRequired},t.a=f}}]);
//# sourceMappingURL=component---src-templates-post-template-js-68aa7de62e4c18c85ed6.js.map