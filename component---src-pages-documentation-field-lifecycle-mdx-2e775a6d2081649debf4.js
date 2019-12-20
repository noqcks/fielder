(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4jk0":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return s}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("E/Ix"),i=t("soUV");var c={},l={_frontmatter:c},b=i.default;function s(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(b,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"field-lifecycle"},Object(n.b)("a",Object.assign({parentName:"h1"},{href:"#field-lifecycle","aria-label":"field lifecycle permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Field lifecycle"),Object(n.b)("p",null,"Fields have a few key events you'll want to know about. Understanding the\nlifecylce of a field will help with choosing ",Object(n.b)("em",{parentName:"p"},"when to apply validation")," and also\nwith debugging."),Object(n.b)("h2",{id:"1-mount"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#1-mount","aria-label":"1 mount permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"1. Mount"),Object(n.b)("p",null,"The field is mounted for the first time and is initialized in the form state."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: This can cause a number of changes to the form-wide state such as the ",Object(n.b)("em",{parentName:"p"},"valid")," and ",Object(n.b)("em",{parentName:"p"},"validating")," states.")),Object(n.b)("h2",{id:"2-change"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#2-change","aria-label":"2 change permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"2. Change"),Object(n.b)("p",null,"The field has changed in some way and the form state is updated."),Object(n.b)("p",null,"Change events include:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"value is changed ",Object(n.b)("em",{parentName:"li"},"(onChange)")),Object(n.b)("li",{parentName:"ul"},"field is blurred ",Object(n.b)("em",{parentName:"li"},"(onBlur)")),Object(n.b)("li",{parentName:"ul"},"field validation has changed ",Object(n.b)("em",{parentName:"li"},'(new "validate" option passed to useField)'))),Object(n.b)("h2",{id:"3-unmount"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#3-unmount","aria-label":"3 unmount permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"3. Unmount"),Object(n.b)("p",null,"The field is no longer mounted and is set as inactive in the form-wide state."),Object(n.b)("p",null,"Optionally, the field can be be purged from the form state."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: Inactive fields are not validated, however, other fields can still see their values and validate accordingly.")),Object(n.b)("h2",{id:"4-remount-optional"},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#4-remount-optional","aria-label":"4 remount optional permalink",className:"anchor"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"4. Remount (optional)"),Object(n.b)("p",null,"Fields which have not been purged can be re-mounted. In this case, their\nvalue prior to unmounting will be used."),Object(n.b)("p",null,"Remounting is the default functionality of a field and is often useful\nwhen working with multi-page forms."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-field-lifecycle-mdx-2e775a6d2081649debf4.js.map