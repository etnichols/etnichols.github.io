(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(e,t,a){"use strict";a.r(t);var n=a(234),r=a(0),i=a.n(r),s=a(56),l=a(174),o=a(180),c=function(e){var t=e.data.allMarkdownRemark.edges;return i.a.createElement("div",null,i.a.createElement("h1",null,"peruse a project"),i.a.createElement(o.a,{posts:t}))},u="3810987952";t.default=function(){return i.a.createElement(s.StaticQuery,{query:u,render:function(e){return i.a.createElement(l.a,null,i.a.createElement(c,{data:e}))},data:n})}},170:function(e,t,a){"use strict";var n=a(176),r="291, 0%, 18%",i={black:"hsla("+r+",1)",text:"hsla("+r+",0.95)",light:"hsla("+r+",0.4)",calm:"hsla("+r+",0.3)",smoke:"hsla("+r+",0.2)",whiteSmoke:"hsla("+r+",0.08)",white:"#fff",link:"#03a9f4",linkHover:"#ff5252"};t.a={animations:{animationCurveFastOutSlowIn:"cubic-bezier(0.4, 0, 0.2, 1)",animationCurveLinearOutSlowIn:"cubic-bezier(0, 0, 0.2, 1)",animationCurveFastOutLinearIn:"cubic-bezier(0.4, 0, 1, 1)",animationCurveDefault:"cubic-bezier(0.4, 0, 0.2, 1)",animationSpeedDefault:"250ms",animationSpeedFast:"200ms",animationSpeedSlow:"300ms"},colors:i,container:Object(n.style)({maxWidth:"37rem",margin:"0 auto"})}},171:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(177),r=a.n(n),i=a(178),s=a.n(i),l=new r.a(s.a);var o=l.rhythm;l.scale},172:function(e){e.exports={data:{site:{siteMetadata:{title:"etnichols"}}}}},173:function(e,t,a){"use strict";a(77),a(57),a(36),a(175),a(76);var n=a(0),r=a.n(n),i=a(7),s=a.n(i),l=a(15),o={posts:"/",projects:"/projects",tutorials:"/tutorials",about:"/about"};t.a=function(e){return r.a.createElement(l.Location,null,function(e){var t=e.location.pathname.split("/")[1];return Object.entries(o).map(function(e){var a=e[0],n=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"link-style",to:n},(function(e,t){return e===t||""===t&&"posts"===e}(a,t)?"•":"")+" "+a),r.a.createElement("br",null))})})}},174:function(e,t,a){"use strict";var n=a(172),r=a(0),i=a.n(r),s=a(1),l=a.n(s),o=a(56),c=a(7),u=a.n(c),m=a(173),d=(a(156),a(170)),f=(a(171),function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement("main",null,i.a.createElement(u.a,{to:"/",css:{display:"inline-block"}},i.a.createElement("h1",{className:"site-title"},a)),i.a.createElement("hr",null),i.a.createElement(m.a,null),t),i.a.createElement("footer",null,i.a.createElement("div",{style:{color:d.a.colors.text,textAlign:"center"}},"© "+(new Date).getFullYear()+" "+a))))},data:n})});f.propTypes={children:l.a.node.isRequired},t.a=f},180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(56),s=a(181),l=a(170);t.a=function(e){var t=e.posts;return r.a.createElement("ul",{style:{marginLeft:0,listStyle:"none"}},t.map(function(e){var t=e.node,a=(t.excerpt,t.fields),n=t.frontmatter;return r.a.createElement("li",{key:a.slug},r.a.createElement("span",{style:{color:l.a.colors.light},className:"post-date"},Object(s.formatDate)(n.date)),r.a.createElement(i.Link,{to:a.slug},n.title))}))}},181:function(e,t,a){a(76);t.formatDate=function(e){return new Date(e).toISOString().split("T")[0]}},234:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"OverviewI completed this project as part of my coursework for EECS 665, a Compilers course taught by Prasad Kulkarni. The program takes in a…",fields:{slug:"/projects/nfa-to-dfa"},frontmatter:{title:"NFA to DFA Conversion: C++ Implementation",date:"2016-09-26T00:12:03.000Z"}}},{node:{excerpt:"KU RedTire is a business owner successor program with the goal of matching retiring Kansas business owners University of Kansas graduates…",fields:{slug:"/projects/redtire-forms"},frontmatter:{title:"RedTire Application Forms",date:"2016-08-06T00:12:03.000Z"}}},{node:{excerpt:"Created as part of Cerner’s 2016 Hackfest, Confluency is an Ionic application that tracks children’s vocabulary development over time. I had…",fields:{slug:"/projects/confluency"},frontmatter:{title:"Confluency - Cerner Hackfest 2016",date:"2016-05-06T00:12:03.000Z"}}},{node:{excerpt:"IntroductionAmericans spend an average of 4 hours and 5 minutes listening to music each day. 6 Music can have both positive and negative…",fields:{slug:"/projects/led-soundsystem"},frontmatter:{title:"LED Soundsystem",date:"2015-04-28T00:12:03.000Z"}}},{node:{excerpt:"I designed and implemented a MIPS Single Cycle CPU as the final project for my Computer Architecture class at KU, EECS 645. The CPU is…",fields:{slug:"/projects/mips-single-cycle-cpu"},frontmatter:{title:"MIPS Single Cycle CPU",date:"2014-06-01T00:12:03.000Z"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-4f2ae44d72917273f80f.js.map