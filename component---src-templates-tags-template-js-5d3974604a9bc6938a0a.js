(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),o=a(12),l=a.n(o),i=a(242);function c(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark,o=n.edges,c=n.totalCount,s=o.map(function(e){var t=e.node;return r.a.createElement("li",null,r.a.createElement(l.a,{to:t.fields.slug},t.frontmatter.title))});return r.a.createElement(i.a,null,r.a.createElement("h1",null,c+" "+(1===c?"post":"posts")+' tagged with "'+a.tag+'"'),r.a.createElement("ul",null,s),r.a.createElement("p",null,r.a.createElement(l.a,{to:"/tags/"},"Browse all tags")))}var s="839767440"},230:function(e,t,a){"use strict";var n=a(235),r="291, 0%, 18%",o={black:"hsla("+r+",1)",text:"hsla("+r+",0.95)",light:"hsla("+r+",0.4)",calm:"hsla("+r+",0.3)",smoke:"hsla("+r+",0.2)",whiteSmoke:"hsla("+r+",0.08)",white:"#fff",link:"#03a9f4",linkHover:"#ff5252"};t.a={animations:{animationCurveFastOutSlowIn:"cubic-bezier(0.4, 0, 0.2, 1)",animationCurveLinearOutSlowIn:"cubic-bezier(0, 0, 0.2, 1)",animationCurveFastOutLinearIn:"cubic-bezier(0.4, 0, 1, 1)",animationCurveDefault:"cubic-bezier(0.4, 0, 0.2, 1)",animationSpeedDefault:"250ms",animationSpeedFast:"200ms",animationSpeedSlow:"300ms"},colors:o,container:Object(n.style)({maxWidth:"37rem",margin:"0 auto"})}},231:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(19),a(16),a(17),a(9),a(20);var n=a(236),r=a.n(n),o=a(237),l=a(238),i=a.n(l);function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){s(e,t,a[t])})}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=new r.a({title:"St. Evs",baseFontSize:"16px",headerColor:"hsla(0,0%,0%,1)",bodyColor:"hsla(0,0%,0%,0.8)",baseLineHeight:1.5625,bodyWeight:400,boldWeight:700,headerFontFamily:["Alegreya","serif"],bodyFontFamily:["Alegreya Sans","sans-serif"],googleFonts:[{name:"Alegreya",styles:["400","700"]},{name:"Alegreya Sans",styles:["400","700"]}],overrideStyles:function(e,t){var a,n=e.adjustFontSizeTo,r=e.scale,l=e.rhythm;return(a={a:{color:"#fb251b",textDecoration:"none"},"a:hover,a:active":{color:t.bodyColor},"h1,h2,h3,h4,h5,h6":{marginTop:l(2)},blockquote:c({},r(.2),{color:i()(41),paddingLeft:l(1.125),marginLeft:0,borderLeft:l(.375)+" solid",borderColor:"#fcea0e"}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":c({},n(t.baseFontSize),{color:t.bodyColor,fontWeight:t.bodyWeight}),"blockquote cite:before":{content:'"— "'}})[o.MOBILE_MEDIA_QUERY]={blockquote:{marginLeft:l(-.75),marginRight:0,borderLeft:l(3/16)+" solid",borderColor:"#fcea0e",paddingLeft:l(9/16)}},a}});var m=u.rhythm;u.scale},232:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"etnichols"}}}}')},233:function(e,t,a){"use strict";a(16),a(17),a(9),a(99),a(42);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),i=a(25),c=(a(214),{posts:"/",projects:"/projects",tutorials:"/tutorials",about:"/about"});t.a=function(e){return r.a.createElement(i.Location,null,function(e){var t=e.location.pathname.split("/")[1];return Object.entries(c).map(function(e){var a=e[0],n=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:"link-style",to:n},(function(e,t){return e===t||""===t&&"posts"===e}(a,t)?">":"")+" "+a),r.a.createElement("br",null))})})}},242:function(e,t,a){"use strict";var n=a(232),r=a(0),o=a.n(r),l=a(98),i=a(12),c=a.n(i),s=a(233),u=(a(215),a(230));a(231);t.a=function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("main",null,o.a.createElement(c.a,{to:"/",css:{display:"inline-block"}},o.a.createElement("h1",{className:"site-title"},a)),o.a.createElement("hr",null),o.a.createElement(s.a,null),t),o.a.createElement("footer",null,o.a.createElement("div",{style:{fontSize:"18px",color:u.a.colors.text,textAlign:"center"}},"© "+(new Date).getFullYear()+" "+a))))},data:n})}}}]);
//# sourceMappingURL=component---src-templates-tags-template-js-5d3974604a9bc6938a0a.js.map