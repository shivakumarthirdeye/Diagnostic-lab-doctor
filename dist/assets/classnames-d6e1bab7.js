var c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var a={}.hasOwnProperty;function n(){for(var o=[],s=0;s<arguments.length;s++){var e=arguments[s];if(e){var l=typeof e;if(l==="string"||l==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var f=n.apply(null,e);f&&o.push(f)}}else if(l==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){o.push(e.toString());continue}for(var i in e)a.call(e,i)&&e[i]&&o.push(i)}}}return o.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(r);var p=r.exports;const d=u(p);export{c,u as g,d as r};
