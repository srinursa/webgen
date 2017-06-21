function retSite(title, pagetitle, pages, authors) {
  var out = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>` + title + `</title>
    <link rel="stylesheet" href="`;
  if (title != pagetitle) out += `../`;
  out +=`styles/main.css">
  </head>
  <body>
    <div id="nav">
      <ul>
        `+ pages + `
      </ul>
    </div>
    <div id="main">
      <noscript><p style="color: red; text-decoration: underline;">You don't have a JavaScript-enabled browser, so this website may not look or function as intended for you. Please download a more modern browser such as the latest versions of Mozilla Firefox, Google Chrome, Apple Safari, or Microsoft Edge</p></noscript>
      <h1 class="mainheading">` + pagetitle + `</h1>
      <!-- INSERT CONTENT -->
    </div>
    <div id="footer">
      <p>&copy; Copyright 2017. All Rights Reserved. <br>
        Website by ` + authors + `.</p>
    </div>
    <script src="`;
  if (title != pagetitle) out += `../`;
  out += `scripts/main.js"></script>
  </body>
  </html>`;
  return out;
}

function index(title, pages, authors) {

  var authorsStr = '';
  for (var i = 0; i < authors.length; i++) {
    if (i == 0) authorsStr += authors[0];
    else if (i == authors.length - 1 && authors.length == 2) authorsStr += ' and ' + authors[i];
    else if (i == authors.length - 1) authorsStr += ', and ' + authors[i];
    else authorsStr += ', ' + authors[i];
  }

  var pgs = '<a href="#" class="currentPage"><li>Home</li></a>\n';
  for (var key in pages) {
    var value = pages[key];
    pgs += '<a href="' + key + '/"><li>' + value + '</li></a>\n';
  }
  pgs += '<a href="refs/"><li>References</li></a>\n';
  var out = retSite(title, title, pgs, authorsStr);
  return out;

}

function refs(title, pages, authors) {

  var authorsStr = '';
  for (var i = 0; i < authors.length; i++) {
    if (i == 0) authorsStr += authors[0];
    else if (i == authors.length - 1 && authors.length == 2) authorsStr += ' and ' + authors[i];
    else if (i == authors.length - 1) authorsStr += ', and ' + authors[i];
    else authorsStr += ', ' + authors[i];
  }

  var pgs = '<a href="../"><li>Home</li></a>\n';
  for (var key in pages) {
    var value = pages[key];
    pgs += '<a href="../' + key + '/"><li>' + value + '</li></a>\n';
  }
  pgs += '<a href="#" class="currentPage"><li>References</li></a>\n';
  var out = retSite('References | ' + title, 'References', pgs, authorsStr);
  return out;

}

function mkCss(nav, body) {
  var out = `@import 'https://fonts.googleapis.com/css?family=Open+Sans:400,600';

  html, body {
    height: 100%;
    margin: auto;
    padding: 0;
  }

  body {
    background-color: ` + body + `;
    font-family: "Open Sans", sans-serif;
  }

  #main {
    background-color: #fff;
    min-height: 85%;
    width: 80%;
    margin-left: 10%;
    padding: 5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .mainheading {
    text-align: center;
  }

  .currentPage {
    font-weight: bold;
  }

  #footer {
    font-size: 10px;
    color: `;
    if (tinycolor(body).isDark()) out += "#fff";
    else out += "#000";
    out += `;
    text-align: center;
  }

  #footer a {
    color: `;
    if (tinycolor(body).isDark()) out += "#fff";
    else out += "#000";
    out += `;
  }

  #nav ul {
    background-color: ` + nav + `;
    color: `;
    if (tinycolor(nav).isDark()) out += "#fff";
    else out += "#000";
    out += `;
    width: 100%;
    top: 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #nav ul a {
    text-decoration: none;
    color: `;
    if (tinycolor(nav).isDark()) out += "#fff";
    else out += "#000";
    out += `;
  }

  #nav ul a li {
    display: inline-block;
    border-right: solid `;
    if (tinycolor(nav).isDark()) out += "#fff";
    else out += "#000";
    out += ` 1px;
    padding: 18px;
    float: left;
  }

  #nav ul a:last-child li, #nav ul a:nth-last-child(2) li {
    border: none;
  }

  #nav ul a li:hover {
    color: ` + body + `;
  }

  #nav ul a:last-child li {
    float: right;
  }`;
  return out;
}

function pgGen(pages, curPage) {
  var pgs = '<a href="../"><li>Home</li></a>\n';
  for (var key in pages) {
    var value = pages[key];
    if (key == curPage) pgs += '<a href="#" class="currentPage"><li>' + value + '</li></a>\n';
    else pgs += '<a href="../' + key + '/"><li>' + value + '</li></a>\n';
  }
  pgs += '<a href="../refs/"><li>References</li></a>\n';
  return pgs;
}

function cheetjs(code, title, page) {
  var out = `!function(global){"use strict";function keydown(e){var id,k=e?e.keyCode:event.keyCode;if(!held[k]){held[k]=!0;for(id in sequences)sequences[id].keydown(k)}}function keyup(e){var k=e?e.keyCode:event.keyCode;held[k]=!1}function resetHeldKeys(){var k;for(k in held)held[k]=!1}function on(obj,type,fn){obj.addEventListener?obj.addEventListener(type,fn,!1):obj.attachEvent&&(obj["e"+type+fn]=fn,obj[type+fn]=function(){obj["e"+type+fn](window.event)},obj.attachEvent("on"+type,obj[type+fn]))}var cheet,Sequence,sequences={},keys={backspace:8,tab:9,enter:13,"return":13,shift:16,"⇧":16,control:17,ctrl:17,"⌃":17,alt:18,option:18,"⌥":18,pause:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,L:37,"←":37,up:38,U:38,"↑":38,right:39,R:39,"→":39,down:40,D:40,"↓":40,insert:45,"delete":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,"⌘":91,command:91,kp_0:96,kp_1:97,kp_2:98,kp_3:99,kp_4:100,kp_5:101,kp_6:102,kp_7:103,kp_8:104,kp_9:105,kp_multiply:106,kp_plus:107,kp_minus:109,kp_decimal:110,kp_divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,equal:187,"=":187,comma:188,",":188,minus:189,"-":189,period:190,".":190},NOOP=function(){},held={};Sequence=function(str,next,fail,done){var i;for(this.str=str,this.next=next?next:NOOP,this.fail=fail?fail:NOOP,this.done=done?done:NOOP,this.seq=str.split(" "),this.keys=[],i=0;i<this.seq.length;++i)this.keys.push(keys[this.seq[i]]);this.idx=0},Sequence.prototype.keydown=function(keyCode){var i=this.idx;return keyCode!==this.keys[i]?void(i>0&&(this.reset(),this.fail(this.str),cheet.__fail(this.str))):(this.next(this.str,this.seq[i],i,this.seq),cheet.__next(this.str,this.seq[i],i,this.seq),void(++this.idx===this.keys.length&&(this.done(this.str),cheet.__done(this.str),this.reset())))},Sequence.prototype.reset=function(){this.idx=0},cheet=function(str,handlers){var next,fail,done;"function"==typeof handlers?done=handlers:null!==handlers&&void 0!==handlers&&(next=handlers.next,fail=handlers.fail,done=handlers.done),sequences[str]=new Sequence(str,next,fail,done)},cheet.disable=function(str){delete sequences[str]},on(window,"keydown",keydown),on(window,"keyup",keyup),on(window,"blur",resetHeldKeys),on(window,"focus",resetHeldKeys),cheet.__next=NOOP,cheet.next=function(fn){cheet.__next=null===fn?NOOP:fn},cheet.__fail=NOOP,cheet.fail=function(fn){cheet.__fail=null===fn?NOOP:fn},cheet.__done=NOOP,cheet.done=function(fn){cheet.__done=null===fn?NOOP:fn},cheet.reset=function(id){var seq=sequences[id];return seq instanceof Sequence?void seq.reset():void console.warn("cheet: Unknown sequence: "+id)},global.cheet=cheet,"function"==typeof define&&define.amd?define([],function(){return cheet}):"undefined"!=typeof module&&null!==module&&(module.exports=cheet)}(this);`;
  out += `
  cheet('` + code + `', function () {
    if (window.location.href.endsWith('/` + title + `/') || window.location.href.endsWith('/` + title + `/index.html') || window.location.href.endsWith('/` + title + `')) window.location.href = '` + page + `/';
    else window.location.href = '../` + page + `/';
  });`;
  return out;
}



function main(title, titlehref, pages, authors, navclr, mainclr, cheetcode) {
  var zip = new JSZip();
  zip.file("index.html", index(title, pages, authors));
  var stylesZip = zip.folder("styles");
  stylesZip.file("main.css", mkCss(navclr, mainclr));
  var scriptsZip = zip.folder("scripts");
  scriptsZip.file("main.js", "");
  if (cheetcode) {
    scriptsZip.file("main.js", cheetjs(cheetcode[0], titlehref, cheetcode[1]));
  }
  var refsZip = zip.folder("refs");
  refsZip.file("index.html", refs(title, pages, authors));
  var authorsStr = '';
  for (var i = 0; i < authors.length; i++) {
    if (i == 0) authorsStr += authors[0];
    else if (i == authors.length - 1 && authors.length == 2) authorsStr += ' and ' + authors[i];
    else if (i == authors.length - 1) authorsStr += ', and ' + authors[i];
    else authorsStr += ', ' + authors[i];
  }
  var pgZip;
  for (key in pages) {
    var value = pages[key];
    pgZip = zip.folder(key);
    pgZip.file("index.html", retSite(value + ' | ' + title, value, pgGen(pages, key), authorsStr));
  }
  zip.generateAsync({type:"base64"}).then(function (base64) {
      window.location = "data:application/zip;base64," + base64;
  });
}
