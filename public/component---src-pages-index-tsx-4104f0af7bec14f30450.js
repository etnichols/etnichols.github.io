(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),l=i(a("pVnL")),c=i(a("q1tI")),d=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),p=function(e){var t=u(e),a=A(t);return g[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),c.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function Q(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?Q(e,!0):"")+Q(e)})).join("")+"<img "+c+s+o+a+i+t+n+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=e.ariaHidden,s=c.default.createElement(L,(0,l.default)({src:t},r,{ariaHidden:n}));return a.length>1?c.default.createElement("picture",null,i(a),s):s},L=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":A,sizes:a,srcSet:i,src:r},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&E&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,Q=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,l.default)({opacity:R?1:0,transition:C?"opacity "+b+"ms":"none"},o),M="boolean"==typeof h?"lightgray":h,x={transitionDelay:b+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&x,{},o,{},f),j={title:t,alt:this.state.isVisible?"":a,style:N,className:A,itemProp:y};if(g){var O=g,F=m(g);return c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),M&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&x)}),F.base64&&c.default.createElement(z,{ariaHidden:!0,src:F.base64,spreadProps:j,imageVariants:O,generateSources:I}),F.tracedSVG&&c.default.createElement(z,{ariaHidden:!0,src:F.tracedSVG,spreadProps:j,imageVariants:O,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(O),c.default.createElement(L,{alt:a,title:t,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:Q})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:w},F,{imageVariants:O}))}}))}if(p){var V=p,H=m(p),G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete G.display,c.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},M&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:M,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},C&&x)}),H.base64&&c.default.createElement(z,{ariaHidden:!0,src:H.base64,spreadProps:j,imageVariants:V,generateSources:I}),H.tracedSVG&&c.default.createElement(z,{ariaHidden:!0,src:H.tracedSVG,spreadProps:j,imageVariants:V,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(V),c.default.createElement(L,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:Q})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:w},H,{imageVariants:V}))}}))}return null},t}(c.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var B=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),M=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});C.propTypes={resolutions:B,sizes:M,fixed:d.default.oneOfType([B,d.default.arrayOf(B)]),fluid:d.default.oneOfType([M,d.default.arrayOf(M)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var x=C;t.default=x},Bl7J:function(e,t,a){"use strict";var i=a("PlB2"),r=a("q1tI"),n=a.n(r),s=a("Wbzz"),o=a("+ZDr"),l=a.n(o),c=a("QSOs"),d=(a("XjQp"),a("InJ6"));t.a=function(e){var t=e.children;return n.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("main",null,n.a.createElement(l.a,{to:"/",css:{display:"inline-block"}},n.a.createElement("h1",{className:"site-title"},a)),n.a.createElement("hr",null),n.a.createElement(c.a,null),t),n.a.createElement("footer",null,n.a.createElement("div",{style:{fontSize:"18px",color:d.a.colors.text,textAlign:"center"}},"© "+(new Date).getFullYear()+" "+a))))},data:i})}},FBEZ:function(e){e.exports=JSON.parse('{"data":{"metadata":{"siteMetadata":{"description":"Hi, I\'m Evan, a software Engineer living in NYC by way of Kansas City. Web development enthusiast, amateur slackliner, occasional blogger/tutorial writer.","email":"e3t5n6@gmail.com","linkedin":"https://www.linkedin.com/in/etnichols/","github":"https://www.github.com/etnichols","medium":"https://medium.com/@etnichols"}},"profile_picture":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAcz+rHFyLjPHUJAf/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAzEEEBESFP/aAAgBAQABBQLUKxY1NDSQWs6xM+gzM42//8QAFhEAAwAAAAAAAAAAAAAAAAAAAREg/9oACAEDAQE/AQo//8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAECAQE/AWd//8QAHRAAAgEEAwAAAAAAAAAAAAAAAAERAhAioTEyUf/aAAgBAQAGPwKafBZaIkap5t12Ob//xAAcEAEAAgMBAQEAAAAAAAAAAAABABEhMUFRYXH/2gAIAQEAAT8hH6DqIQb7cI8ta7EQh+pYt6eVKVumejMfuzKa4OCbX9n/2gAMAwEAAgADAAAAELMHf//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBFh/9oACAEDAQE/EAh2Zy//xAAZEQABBQAAAAAAAAAAAAAAAAABABARMVH/2gAIAQIBAT8QJClLX//EABwQAQACAwEBAQAAAAAAAAAAAAERIQAxQYFRYf/aAAgBAQABPxAeSLML7jgXgQPFnEIppDv7vIiruBAbZyXiQq0gbt8rIGdiNB91jnGWbwod3jRnbxBn/9k=","width":120,"height":120,"src":"/static/47b11e2928e36e5449336b1a07a1ffac/4afe4/about-pic.jpg","srcSet":"/static/47b11e2928e36e5449336b1a07a1ffac/4afe4/about-pic.jpg 1x,\\n/static/47b11e2928e36e5449336b1a07a1ffac/63260/about-pic.jpg 1.5x,\\n/static/47b11e2928e36e5449336b1a07a1ffac/41433/about-pic.jpg 2x","srcWebp":"/static/47b11e2928e36e5449336b1a07a1ffac/0954a/about-pic.webp","srcSetWebp":"/static/47b11e2928e36e5449336b1a07a1ffac/0954a/about-pic.webp 1x,\\n/static/47b11e2928e36e5449336b1a07a1ffac/08c2a/about-pic.webp 1.5x,\\n/static/47b11e2928e36e5449336b1a07a1ffac/1f514/about-pic.webp 2x"}}}}}')},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},QeBL:function(e,t,a){"use strict";a.r(t);a("0mN4");var i=a("FBEZ"),r=(a("f3/d"),a("q1tI")),n=a.n(r),s=(a("b4OF"),function(e,t,a,i){return n.a.createElement("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 "+t+" "+a,"aria-label":e},i)}),o=function(e){var t=e.name;e.viewboxWidth,e.viewboxHeight;switch(t){case"github":return s(t,24,24,n.a.createElement(n.a.Fragment,null,n.a.createElement("title",null,"GitHub icon"),n.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})));case"linkedin":return s(t,24,24,n.a.createElement(n.a.Fragment,null,n.a.createElement("title",null,"LinkedIn icon"),n.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})));case"email":return s(t,24,24,n.a.createElement(n.a.Fragment,null,n.a.createElement("title",null,"Mail icon"),n.a.createElement("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"})));case"medium":return s(t,24,24,n.a.createElement(n.a.Fragment,null,n.a.createElement("title",null,"Medium icon"),n.a.createElement("path",{d:"M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"})));case"resume":return s(t,42,54,n.a.createElement(n.a.Fragment,null,n.a.createElement("g",{id:"resume"},n.a.createElement("circle",{cx:"13",cy:"15",r:"3"}),n.a.createElement("path",{d:"M41.7,11.3l-11-11C30.5,0.1,30.3,0,30,0H4C1.8,0,0,1.8,0,4v46c0,2.2,1.8,4,4,4h34c2.2,0,4-1.8,4-4V12 C42,11.7,41.9,11.5,41.7,11.3z M8,15c0-2.8,2.2-5,5-5s5,2.2,5,5c0,1.5-0.7,2.9-1.8,3.8C18.5,20,20,22.3,20,25c0,0.6-0.4,1-1,1 s-1-0.4-1-1c0-2.8-2.2-5-5-5s-5,2.2-5,5c0,0.6-0.4,1-1,1s-1-0.4-1-1c0-2.7,1.5-5,3.8-6.2C8.7,17.9,8,16.5,8,15z M29,44H7 c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S29.6,44,29,44z M35,38H7c-0.6,0-1-0.4-1-1s0.4-1,1-1h28c0.6,0,1,0.4,1,1 S35.6,38,35,38z M35,32H7c-0.6,0-1-0.4-1-1s0.4-1,1-1h28c0.6,0,1,0.4,1,1S35.6,32,35,32z M32,12c-1.1,0-2-0.9-2-2V2.4l9.6,9.6H32z"}))));default:return s(t,512,512,n.a.createElement(n.a.Fragment,null,n.a.createElement("title",null,"Icon"),n.a.createElement("path",{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"})))}},l=a("Bl7J"),c=a("Wbzz"),d=a("9eSz"),u=a.n(d),f=a("+ZDr"),A=a.n(f),m=a("z22D"),g=(a("pxef"),function(e){e.sections;return n.a.createElement(c.StaticQuery,{query:"2680860033",render:function(e){var t=e.metadata,a=e.profile_picture,i=t.siteMetadata,r=i.email,s=i.github,l=i.linkedin,c=i.medium,d=i.description,f=[["email","mailto:"+r],["github",s],["linkedin",l],["medium",c]];return n.a.createElement("div",null,n.a.createElement("h2",null,"welcome"),n.a.createElement("div",{class:"centered"},n.a.createElement(u.a,{fixed:a.childImageSharp.fixed,className:"profile-picture",imgStyle:{border:"none",borderRadius:"50%"}}),n.a.createElement("p",{className:"title-section-description"},d),n.a.createElement("div",{className:"icon-section"},n.a.createElement(n.a.Fragment,null,f.map((function(e,t){var a=e[0],i=e[1];return n.a.createElement("a",{key:"link-"+t,className:"link-icon",href:i},n.a.createElement(o,{key:"link-"+t,name:a}))})),n.a.createElement(A.a,{to:"/resume"},n.a.createElement(o,{key:"link-resume",name:"resume"}))))))},data:i})});t.default=function(){return n.a.createElement(l.a,null,n.a.createElement(g,m.a))}},b4OF:function(e,t,a){},pxef:function(e,t,a){},z22D:function(e,t,a){"use strict";t.a={sections:[{title:"work",entries:[{title:"Software Engineer",company:"Google",duration:{start:"October 2020",end:"Present"},description:"Fullstack development work on [Google Forms](https://docs.google.com/forms)"},{title:"Software Engineer",company:"Google",duration:{start:"September 2017",end:"October 2020"},description:"Fullstack development work on [Google Assignments](https://edu.google.com/assignments), a set of free coursework management tools that integrate with learning management systems (LMS) to help university professors create, collect and review coursework using Google Apps."},{title:"Engineering Residency Program",link:"https://www.google.com/about/careers/students/engres.html",company:"Google",duration:{start:"July 2018",end:"July 2019"}},{title:"RightSite",link:"https://apple.co/2Uu5tUT",company:"University of Kansas Medical Center",duration:{start:"October 2016",end:"May 2017"},description:"Proof-of-concept iOS application to improve the precision of skin biopsy labeling. In initial studies, the app led to a 69% improvement in the precision of anatomic site labeling. Accompanying research paper was published in the Health Informatics Journal in March 2020. Read the full research paper [here](https://journals.sagepub.com/doi/full/10.1177/1460458220910341)."},{title:"Well Query Dashboard",company:"Astra Analytics",duration:{start:"September 2016",end:"February 2017"},description:"Created a map-based web application for searching well records by location and 30 different drilling metrics using React, Redux, Node.js/Express and MySQL."}]},{title:"education",entries:[{company:"B.S., Computer Science",title:"University of Kansas",duration:{start:"Aug 2012",end:"May 2017"}}]},{title:"languages/software",entries:[{description:["Javascript (React, Redux, React Native, Node.js)","Typescript","Java","GraphQL ([Gatsby](http://gatsbyjs.org), [Prisma](https://www.prisma.io))","Cloud hosting (Google App Engine, AWS)","HTML/CSS","InDesign, Photoshop, Sketch"]}]},{title:"projects",entries:[{title:"Lead to Read website redesign",link:"http://leadtoread.dev/",duration:{start:"November 2019",end:"August 2020"},description:"Redesign of the Lead to Read KC website using Gatsby JS, using the existing Wordpress database as a headless CMS. Deployed using Firebase and Gatsby Cloud. Read more about it [here](programming/lead-to-read-website)."},{title:"overturemusical.com",link:"http://overturemusical.com",duration:{start:"March 2019",end:"Present"},description:"Marketing website for Overture - an original symphony about the Kansas City Philharmonic Orchestra during the 1953-1954 season."},{title:"Digital Bookshelf",link:"https://github.com/e-nichols/digital-bookshelf",duration:{start:"August 2018",end:"February 2019"},description:"React Native app for tracking books you have read or want to read, powered by the Google Books API."}]}]}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4104f0af7bec14f30450.js.map