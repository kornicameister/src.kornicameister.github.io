webpackJsonp([16],{331:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l,r=t(18),c=t.n(r),s=t(0);t.n(s);!function(e){e.LinkedIn="LinkedIn",e.Github="Github",e.Gitlab="Gitlab",e.LastFM="LastFM",e.StackOverflow="StackOverflow"}(l||(l={}));a.default=function(e){var a=e.basics;return s.createElement("div",{className:"container-fluid"},s.createElement("section",{className:"col"},s.createElement("header",null,s.createElement("div",{className:"card border-dark mb-3"},a.image&&s.createElement("img",{className:"card-img-top",src:a.image,alt:a.name}),s.createElement("div",{className:"card-body"},s.createElement("div",{className:"card-title"},a.label),s.createElement("div",{className:"card-subtitle"},s.createElement("a",{className:"card-link",href:"mailto:"+a.email},a.name)))))),s.createElement("section",{className:"col"},a.summary&&s.createElement("div",{className:"card border-dark mb-3 text-justify"},s.createElement("div",{className:"card-body"},s.createElement("p",{className:"card-text"},a.summary)))),s.createElement("section",{className:"col"},a.profiles&&s.createElement("div",{className:"card-group"},a.profiles.map(function(e,a){var t=e.network;return s.createElement("div",{key:a,className:"card text-center border-dark mb-3"},s.createElement("div",{className:"card-body"},s.createElement("a",{href:e.url,"aria-label":t,target:"_blank"},s.createElement("i",{className:c()("fa fa-lg fa-fw fa-4x",{"fa-linkedin":t===l.LinkedIn,"fa-github":t===l.Github,"fa-gitlab":t===l.Gitlab,"fa-lastfm":t===l.LastFM,"fa-stack-overflow":t===l.StackOverflow}),"aria-hidden":!0}),s.createElement("span",{className:"sr-only sr-only-focusable"},t))))}))))}}});
//# sourceMappingURL=16.a65a5f42.chunk.js.map