function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var e=document.querySelector("table"),r=document.querySelector("tbody"),n=r.querySelectorAll("tr");function o(t){return parseInt(t.replace("$","").split(",").join(""))}e.addEventListener("click",function(e){if("TH"===e.target.tagName){var a=function(e){if(Array.isArray(e))return t(e)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();switch(e.target.textContent){case"Name":a.sort(function(t,e){return t.cells[0].textContent.localeCompare(e.cells[0].textContent)});break;case"Position":a.sort(function(t,e){return t.cells[1].textContent.localeCompare(e.cells[1].textContent)});break;case"Age":a.sort(function(t,e){return+t.cells[2].textContent-+e.cells[2].textContent});break;case"Salary":a.sort(function(t,e){return o(t.cells[3].textContent)-o(e.cells[3].textContent)})}r.innerHTML="",a.forEach(function(t){return r.append(t)})}});//# sourceMappingURL=index.cac1148a.js.map

//# sourceMappingURL=index.cac1148a.js.map
