/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{143:function(ia,y,e){function fa(e,f,h,n){return Object(na.b)(void 0,void 0,void 0,function(){var r,w,x,y,z,aa,ba,da,fa;return Object(na.d)(this,function(ha){switch(ha.label){case 0:return r=Ia.getDocument(),w=[1],[4,Object(za.c)(f,{extension:"pdf"})];case 1:return x=ha.ea(),y=Ia.La(),ba=(aa=ua.a).B$,[4,x.Uy()];case 2:return z=ba.apply(aa,[ha.ea().xfdfString,e]),da=!0,[4,r.af(x,w,e,da)];case 3:return ha.ea(),[4,r.Nf([e+1],da)];
case 4:return ha.ea(),fa=y.Ng().filter(function(f){return f.NP()&&f.PageNumber===e}),y.Kt(fa,{force:!0,source:"contentEditTool"}),[4,y.qP(z)];case 5:return ha.ea(),Ia.getDocument().rH(),Ia.qH(e),Ia.xe(),ea(e),ca(e,h.galleys,n),ca(e,h.objects,n),[2]}})})}function x(e){e=(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector("body");e.querySelectorAll("p").forEach(function(e){e.querySelectorAll("span").forEach(function(e){var f=e.getAttribute("style");f=ha(f,e.innerHTML);e.innerHTML=
f});var f=e.getAttribute("style"),h=e.innerHTML.oi("<br>","");e.innerHTML=ha(f,h)});return e.innerHTML.trim()}function ha(e,f){e.includes("bold")&&(f="<strong>"+f+"</strong>");e.includes("italic")&&(f="<em>"+f+"</em>");e.includes("text-decoration: underline")&&(f="<u>"+f+"</u>");return f}function ea(e){var f=Ia.La(),h=f.Ng().filter(function(f){return f.Cu()&&f.PageNumber===e});f.Kt(h,{force:!0,source:"contentEditTool"})}function da(e,f){f.forEach(function(f){Ga[e]||(Ga[e]=[]);Ga[e].find(function(e){return e.id===
f.id})||Ga[e].push(f)})}function ba(e,f){f.forEach(function(f){Ea[e]||(Ea[e]=[]);Ea[e].find(function(e){return e.id===f.id})||Ea[e].push(f)})}function w(e){var f=new DOMParser,h=f.parseFromString(e,"text/xml");h.querySelector("parsererror")&&(h=f.parseFromString("<Root>"+e+"</Root>","text/xml"));h.querySelectorAll("a").forEach(function(e){var f=e.childNodes[0];Array.from(e.querySelectorAll("*")).find(function(e){return"u"===e.tagName.toLowerCase()})||(e=document.createElement("u"),f.after(e),e.appendChild(f))});
return(new XMLSerializer).serializeToString(h)}function z(e,f,h,n){this.top=e;this.left=f;this.bottom=h;this.right=n;this.topVal=function(){return Math.round(this.top)};this.bottomVal=function(){return Math.round(this.bottom)};this.leftVal=function(){return Math.round(this.left)};this.rightVal=function(){return Math.round(this.right)};this.height=function(){return Math.round(Math.abs(this.top-this.bottom))};this.width=function(){return Math.round(this.right-this.left)};this.fM=function(e){return this.topVal()!==
e.topVal()||this.leftVal()!==e.leftVal()||this.bottomVal()!==e.bottomVal()||this.rightVal()!==e.rightVal()}}function r(e,f,h,n,r){this.id=e;this.pagenum=f;this.galleysContents=h;this.contents=n;this.galleyBox=r;Object(Fa.d)(Ea)}function h(e,f,h,n){this.id=f;this.type=e;this.bbox=h;this.pagenum=n}function f(e,f,h,n,r){this.id=e;this.pagecount=f;this.pageBBox=h;this.galleys=n;this.objects=r}function n(e,f,h,n,r){var w=[];(new DOMParser).parseFromString(n,"text/html").documentElement.querySelectorAll("p").forEach(function(e,
f){w[f]=e.innerHTML});h=(new DOMParser).parseFromString(h,"text/html");var x=null;h.documentElement.querySelectorAll("p").forEach(function(e,f){f<w.length?(e.innerHTML=w[f],x=e.getAttribute("style"),x=x.replace("font:italic","font:normal"),x=x.replace(" bold "," normal "),x=x.replace("underline:1;","underline:0;"),e.setAttribute("style",x)):e.remove()});for(n=h.documentElement.querySelectorAll("p").length;n<w.length;n++){var y=document.createElement("p");y.setAttribute("id","0");y.innerHTML=w[n];
null!=x&&y.setAttribute("style",x);h.documentElement.querySelector("body").appendChild(y)}h=h.documentElement.querySelector("body").innerHTML;var z="";Ea[e].forEach(function(e){e.id===r&&(z=e)});if(""===z)return"";f="<DOC id='"+f.id+"' pagecount='"+f.pagecount+"'>";f=f+("<STORY galley_ids='"+r+"' pagenum='"+e+"'>")+("<galleys>"+z.galleysContents+"</galleys>");z.contents=h;f=f+h+"\n</STORY>";return f+="</DOC>"}function ca(e,f,n){var w=[],x=Ia.getDocument(),y=null;f.forEach(function(f){if(f instanceof
h){var z=x.lm(e,f.bbox.leftVal(),f.bbox.topVal());var aa=z.x;var ba=z.y;var ca=x.lm(e,f.bbox.rightVal(),f.bbox.bottomVal());z=ca.x;ca=ca.y}else if(f instanceof r)z=x.lm(e,f.galleyBox.leftVal(),f.galleyBox.topVal()),aa=z.x,ba=z.y,ca=x.lm(e,f.galleyBox.rightVal(),f.galleyBox.bottomVal()),z=ca.x,ca=ca.y;else return;var da=new window.Core.Annotations.RectangleAnnotation,ea=va.a.OBJECT;f instanceof r&&(ea=va.a.TEXT);da.Yba(f,ea);da.PageNumber=f.pagenum;da.X=aa;da.Y=ba;da.Width=z-aa;da.Height=ca-ba;da.StrokeColor=
new ra.a("#3183C8");da.FillColor=new ra.a(255,255,255,.01);da.Style="dash";da.Dashes="4,3";da.eN();da.selectionModel=Da.a;w.push(da);"undefined"!==typeof n&&n===f.id&&(y=da)});f=Ia.La();f.un(w);y&&f.Wo(y);f.Ui(w)}function aa(e,f,h){return Object(na.b)(this,void 0,void 0,function(){var n,r,w,x,y;return Object(na.d)(this,function(z){switch(z.label){case 0:n=e.data;w=n.cmd;switch(w){case "isReady":return[3,1];case "initialiseInfixServer":return[3,3];case "exportFile":return[3,4];case "importText":return[3,
5];case "transformObject":return[3,5];case "deleteObject":return[3,6]}return[3,7];case 1:return[4,Object(oa.b)()];case 2:return x=z.ea(),Ca.postMessage({cmd:"initialiseInfixServer",l:x}),[3,7];case 3:return(y=ja(n.resultsXML))?f():h("License key does not have content edit permission"),[3,7];case 4:return n.exportPerformed?ka(n.pageNumber,n.exportXML,n.objectXML,n.resultsXML):(r=Ba[n.pageNumber],ba(n.pageNumber,r.galleys),da(n.pageNumber,r.objects),ea(n.pageNumber),ca(n.pageNumber,r.galleys),ca(n.pageNumber,
r.objects)),[3,7];case 5:return r=Ba[n.pageNumber],la(n.pageNumber,n.resultsXML),fa(n.pageNumber,n.pdfBuffer,r,n.id),[3,7];case 6:return r=Ba[n.pageNumber],la(n.pageNumber,n.resultsXML),r.galleys=r.galleys.filter(function(e){return e.id!==n.id}),r.objects=r.objects.filter(function(e){return e.id!==n.id}),fa(n.pageNumber,n.pdfBuffer,r),[3,7];case 7:return[2]}})})}function ja(e){e=new Uint8Array(e);var f=(new TextDecoder("utf-8")).decode(e);e=!1;f=(new DOMParser).parseFromString(f,"text/xml").getElementsByTagName("LicenseCheck");
null!==f&&0<f.length&&(f=f[0].getElementsByTagName("Status")[0].innerHTML,"error"!==f&&"ok"===f&&(e=!0));return e}function ka(e,f,h,n){var r=new Uint8Array(f),w=new TextDecoder("utf-8");f=w.decode(r);r=new Uint8Array(h);h=w.decode(r);r=new Uint8Array(n);n=w.decode(r);Ba[e]=xa(e,f,h,n);n=Ba[e];ba(e,n.galleys);da(e,n.objects);ea(e);ca(e,n.galleys);ca(e,n.objects)}function pa(e,f){e=parseFloat(e);return isNaN(f)||f<e?e:f}function xa(e,n,w,x){var y;var aa=new DOMParser;x=aa.parseFromString(x,"text/xml");
Array.prototype.slice.call(x.getElementsByTagName("BBox")).forEach(function(e){if("CropBox"===e.getAttribute("Name")){var f=parseFloat(e.getElementsByTagName("Top").item(0).innerHTML),h=parseFloat(e.getElementsByTagName("Bottom").item(0).innerHTML),n=parseFloat(e.getElementsByTagName("Left").item(0).innerHTML);e=parseFloat(e.getElementsByTagName("Right").item(0).innerHTML);y=new z(f,n,h,e)}});aa=new DOMParser;x=aa.parseFromString(n,"text/xml");var ba=[];Array.prototype.slice.call(x.getElementsByTagName("STORY")).forEach(function(f){var h=
f.getAttribute("galley_ids"),n=Array.prototype.slice.call(f.getElementsByTagName("g"))[0],w=n.getAttribute("bbox").split(" ");w=new z(parseFloat(w[0]),parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3]));n=n.innerHTML;var x=Array.prototype.slice.call(f.getElementsByTagName("galleys"))[0];x.parentNode.removeChild(x);f=f.innerHTML;f=(new DOMParser).parseFromString(f,"text/html").documentElement.querySelector("body").innerHTML.trim();h=new r(h,e,n,f,w);ba.push(h)});aa=new DOMParser;var ca=[];n=aa.parseFromString(w,
"text/xml").getElementsByTagName("Object");Array.prototype.slice.call(n).forEach(function(f){var n=f.getAttribute("Type"),r=f.getAttribute("OID");f=Array.prototype.slice.call(f.getElementsByTagName("Point"));var w=Number.NaN,x=Number.NaN,y=Number.NaN,aa=Number.NaN;f.forEach(function(e){var f=e.getAttribute("Name");"TL"===f?(w=pa(e.getAttribute("Y"),w),y=pa(e.getAttribute("X"),y)):"TR"===f?(w=pa(e.getAttribute("Y"),w),aa=pa(e.getAttribute("X"),aa)):"BR"===f?(x=pa(e.getAttribute("Y"),x),aa=pa(e.getAttribute("X"),
aa)):"BL"===f&&(x=pa(e.getAttribute("Y"),x),y=pa(e.getAttribute("X"),y))});ca.push(new h(n,r,new z(w,y,x,aa),e))});n=Array.prototype.slice.call(x.getElementsByTagName("DOC"))[0].getAttribute("id");return new f(n,1,y,ba,ca)}function la(e,f){var h;f=(new TextDecoder("utf-8")).decode(f);var n=(new DOMParser).parseFromString(f,"text/xml");f=n.getElementsByTagName("Galley").item(0);if(null!=f){var r=f.getAttribute("id");f=n.getElementsByTagName("BBox");f=Array.prototype.slice.call(f);f.forEach(function(e){var f=
e.getElementsByTagName("Top"),n=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Left");var r=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Bottom");var w=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Right");e=parseFloat(f.item(0).innerHTML);h=new z(n,r,w,e)});Ea[e].forEach(function(e){e.id===r&&!0===h.fM(e.galleyBox)&&(e.galleyBox=h)})}f=n.getElementsByTagName("Object").item(0);if(null!=f){var w=f.getAttribute("OID");f=n.getElementsByTagName("BBox");f=Array.prototype.slice.call(f);
f.forEach(function(e){var f=e.getElementsByTagName("Top"),n=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Left");var r=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Bottom");var w=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Right");e=parseFloat(f.item(0).innerHTML);h=new z(n,r,w,e)});Ga[e].forEach(function(e){e.id===w&&!0===h.fM(e.bbox)&&(e.bbox=h)})}f=n.getElementsByTagName("NewParas").item(0);if(null!=f){var x=f.getAttribute("id");Ea[e].forEach(function(e){if(e.id===
x){var f="<Contents>"+e.contents;f+="</Contents>";var h=Array.prototype.slice.call(n.getElementsByTagName("NewPara"));f=(new DOMParser).parseFromString(f,"text/xml");var r=Array.prototype.slice.call(f.getElementsByTagName("p"));h.forEach(function(e){var f=parseFloat(e.innerHTML),h=!1;r.forEach(function(e){var n=e.getAttribute("id");!1===h&&"0"===n&&(e.setAttribute("id",f),h=!0)})});e.contents=f.getElementsByTagName("Contents").item(0).innerHTML}})}}e.r(y);var na=e(1),za=e(49),ra=e(17),Da=e(429),sa=
e(34),oa=e(68),ma=e(2),va=e(258),Fa=e(154),ua=e(6),Ca=null,Aa=null,Ea={},Ga={},Ba={},Ia;y["default"]={z$:function(e){return Object(na.b)(void 0,void 0,void 0,function(){return Object(na.d)(this,function(){Aa||(Ia=e,Aa=new Promise(function(e,f){Ca=new Worker(window.Core.getWorkerPath()+"contentEdit/InfixServerModule.js");Ca.onmessage=function(h){aa(h,e,f)};Ca.postMessage({cmd:"isReady"})}));return[2,Aa]})})},hka:function(e,f,h){return Object(na.b)(void 0,void 0,void 0,function(){var n,r,w,x;return Object(na.d)(this,
function(y){switch(y.label){case 0:return ea(f),Ea[f]=[],Ga[f]=[],[4,e.ge([f])];case 1:return n=y.ea(),r=new TextEncoder,w=r.encode(""),x=w.buffer,Ca.postMessage({cmd:"exportFile",pageNumber:f,performExport:h,pdfFile:n,tableData:x},[n,x]),[2]}})})},Uga:function(e){return Object(na.b)(void 0,void 0,void 0,function(){var f,h,n,r,w,x,y,z;return Object(na.d)(this,function(aa){switch(aa.label){case 0:return f=e.id,h=e.isText,n=e.pageNumber,r=Ia.getDocument(),[4,r.ge([n])];case 1:return w=aa.ea(),x=new TextEncoder,
y=x.encode(""),z=y.buffer,Ca.postMessage({cmd:"deleteObject",pdfFile:w,pageNumber:n,objectID:f,isText:h,tableData:z},[z]),[2]}})})},Bla:function(e){return Object(na.b)(void 0,void 0,void 0,function(){var f,h,n,r,w,x,y,z,aa,ba,ca,da,ea;return Object(na.d)(this,function(fa){switch(fa.label){case 0:return f=e.id,h=e.position,n=h.top,r=h.left,w=h.bottom,x=h.right,y=e.isText,z=e.pageNumber,aa=Ia.getDocument(),[4,aa.ge([z])];case 1:return ba=fa.ea(),ca=new TextEncoder,da=ca.encode(""),ea=da.buffer,Ca.postMessage({cmd:"transformObject",
pdfFile:ba,pageNumber:z,objectID:f,isText:y,topVal:n,leftVal:r,bottomVal:w,rightVal:x,tableData:ea},[ea]),[2]}})})},gea:function(e,f){return Object(na.b)(void 0,void 0,void 0,function(){var h,r,y,z,aa,ba,ca,da,ea,fa,ha,ia,ja,ka,la,oa,pa,ra;return Object(na.d)(this,function(na){switch(na.label){case 0:h=f.oi("<p><br></p>","");r=w(h);r=r.replace(/<span style="color: var\(--text-color\);">(.*?)<\/span>/g,"$1");y=e.oC.id;z=e.PageNumber;aa=Ba[z];ba=aa.galleys.find(function(e){return e.id===y});ca=x(ba.contents);
da=n(z,aa,ca,r,y);if(""===da)return[3,2];ea=new TextEncoder;fa=ea.encode(da);ha=fa.buffer;ia=Object(sa.c)()||"https://www.pdftron.com/webfonts/v2/";ja=Ia.getDocument();return[4,ja.ge([z])];case 1:return ka=na.ea(),ea=new TextEncoder,la=ea.encode(""),oa=la.buffer,Ca.postMessage({cmd:"importText",pdfFile:ka,pageNumber:z,webFontURL:ia,galleyId:y,importData:ha,tableData:oa},[ha,oa]),pa={},ba&&(ra=ba.galleyBox,pa={top:ra.top,left:ra.left,bottom:ra.bottom,right:ra.right}),Object(Fa.e)(ca,r,pa),[3,3];case 2:Object(ma.g)("Unable to generate import XML"),
na.label=3;case 3:return[2]}})})},M4:function(e){if(e)return x(e.contents);Object(ma.g)("Unable to extract document content")}}},429:function(ia,y,e){var fa=e(1);ia=e(73);var x=e(45);e=function(e){function y(){return null!==e&&e.apply(this,arguments)||this}Object(fa.c)(y,e);y.prototype.testSelection=function(e,y,w){return x.a.Yj(e,y,w)};return y}(ia.a);y.a=e}}]);}).call(this || window)
