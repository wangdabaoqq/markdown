(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{768:function(e,n,t){!function(e){"use strict";e.defineMode("yacas",function(n,t){var r=function(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}("Assert BackQuote D Defun Deriv For ForEach FromFile FromString Function Integrate InverseTaylor Limit LocalSymbols Macro MacroRule MacroRulePattern NIntegrate Rule RulePattern Subst TD TExplicitSum TSum Taylor Taylor1 Taylor2 Taylor3 ToFile ToStdout ToString TraceRule Until While"),o="(?:[a-zA-Z\\$'][a-zA-Z0-9\\$']*)",a=new RegExp("(?:(?:\\.\\d+|\\d+\\.\\d*|\\d+)(?:[eE][+-]?\\d+)?)"),i=new RegExp(o),c=new RegExp(o+"?_"+o),u=new RegExp(o+"\\s*\\(");function s(e,n){var t;if('"'===(t=e.next()))return n.tokenize=l,n.tokenize(e,n);if("/"===t){if(e.eat("*"))return n.tokenize=p,n.tokenize(e,n);if(e.eat("/"))return e.skipToEnd(),"comment"}e.backUp(1);var o=e.match(/^(\w+)\s*\(/,!1);null!==o&&r.hasOwnProperty(o[1])&&n.scopes.push("bodied");var s=f(n);if("bodied"===s&&"["===t&&n.scopes.pop(),"["!==t&&"{"!==t&&"("!==t||n.scopes.push(t),("["===(s=f(n))&&"]"===t||"{"===s&&"}"===t||"("===s&&")"===t)&&n.scopes.pop(),";"===t)for(;"bodied"===s;)n.scopes.pop(),s=f(n);return e.match(/\d+ *#/,!0,!1)?"qualifier":e.match(a,!0,!1)?"number":e.match(c,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(u,!0,!1)?(e.backUp(1),"variable"):e.match(i,!0,!1)?"variable-2":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%|#)/,!0,!1)?"operator":"error"}function l(e,n){for(var t,r=!1,o=!1;null!=(t=e.next());){if('"'===t&&!o){r=!0;break}o=!o&&"\\"===t}return r&&!o&&(n.tokenize=s),"string"}function p(e,n){for(var t,r;null!=(r=e.next());){if("*"===t&&"/"===r){n.tokenize=s;break}t=r}return"comment"}function f(e){var n=null;return e.scopes.length>0&&(n=e.scopes[e.scopes.length-1]),n}return{startState:function(){return{tokenize:s,scopes:[]}},token:function(e,n){return e.eatSpace()?null:n.tokenize(e,n)},indent:function(t,r){if(t.tokenize!==s&&null!==t.tokenize)return e.Pass;var o=0;return"]"!==r&&"];"!==r&&"}"!==r&&"};"!==r&&");"!==r||(o=-1),(t.scopes.length+o)*n.indentUnit},electricChars:"{}[]();",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-yacas",{name:"yacas"})}(t(33))}}]);
//# sourceMappingURL=119.01d6d31c.chunk.js.map