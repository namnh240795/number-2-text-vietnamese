!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.number2TextVietnamese=t():e.number2TextVietnamese=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"number2TextVietnamese",(function(){return a}));var r=["linh","mười","hai mươi","ba mươi","bốn mươi","năm mươi","sáu mươi","bảy mươi","tám mươi","chín mươi"],o=["không","một","hai","ba","bốn","năm","sáu","bảy","tám","chín"],u=["trăm","nghìn","triệu","tỷ"],i=[null,"mốt",null,null,"tư","lăm"];function a(e,t){var n,a=[],f=[],l=Math.abs(e);if(!Number.isInteger(l))return l;if(Math.abs(l)>9007199254740991)return"Your number is too big";for(;a.push(Math.floor(l%1e3)),0!=(l/=1e3););for(;n=a.length;){f.length>0&&f.push(u[Math.floor((n-1)%3)+1]+(t?t+" ":""));var s=a.pop();if(0!==s){var c=Math.floor(s%100),m=Math.floor(s/100),p=Math.floor(c%10);switch(c=Math.floor(c/10),(f.length||m)&&(f.push(o[m]),f.push(u[0])),(f.length||c)&&f.push(r[c]),p){case 0:break;case 1:f.push(c<2?o[p]:i[p]);break;case 4:f.push(1==c?o[p]:i[p]);break;case 5:f.push(0==c?o[p]:i[p]);break;default:f.push(o[p])}}}return f=(f=(f=(f=f.join(" ").trim())||o[l]).endsWith(t)?f.slice(0,-1):f).endsWith("linh")?f.slice(0,-5):f,f=e<0?"âm "+f:f}}]).default}));