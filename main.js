/* If you're reading this someone probably broke something horribly because
 * there is literally no reason for someone to be this deep down in the kernel.
 * In that case, you should probably find a computer technician because the fact
 * that you're seeing this means your computer is broken probably beyond repair.
 */

function retSite(title, pagetitle, pages, authors) {
  var out = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>` + title + `</title>
    <link rel="stylesheet" href="styles/main.css">
  </head>
  <body>
    <div id="nav">
      <ul>
        `+ pages + `
      </ul>
    </div>
    <div id="main">
    <!-- INSERT INFORMATION -->
      <noscript><p style="color: red; text-decoration: underline;">You don't have a JavaScript-enabled browser, so this website may not look or function as intended for you. Please download a more modern browser such as the latest versions of Mozilla Firefox, Google Chrome, Apple Safari, or Microsoft Edge</p></noscript>
      <h1 class="mainheading">` + pagetitle + `</h1>
    </div>
    <div id="footer">
      <p>&copy; Copyright 2017. All Rights Reserved. <br>
        Website by ` + authors + `.</p>
    </div>
    <script src="scripts/main.js"></script>
  </body>
  </html>`;
  return out;
}

function index(title, pages, authors) {

  var authorsStr = '';
  for (var i = 0; i < authors.length; i++) {
    if (i == 0) authorsStr += authors[0];
    else if (i == authors.length - 1) authorsStr += ', and ' + authors[i];
    else authorsStr += ', ' + authors[i];
  }

  for (var key in pages) {
    var value = pages[key];
    var pgs += '<a href="#" class="currentPage">Home</a>';
    else pgs += '<a href="' + key + '/">' + value + '</a>';
  }
  var out = retSite(title, title, pgs, authorsStr);
  return out;

}

function refs(title, pages, authors) {

  var authorsStr = '';
  for (var i = 0; i < authors.length; i++) {
    if (i == 0) authorsStr += authors[0];
    else if (i == authors.length - 1) authorsStr += ', and ' + authors[i];
    else authorsStr += ', ' + authors[i];
  }

  for (var key in pages) {
    var value = pages[key];
    var pgs += '<a href="#" class="currentPage">Home</a>';
    else pgs += '<a href="' + key + '/">' + value + '</a>';
  }
  var out = retSite(title, 'References | ' + title, pgs, authorsStr);
  return out;

}

function css(nav, body) {
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
    color: #000;
    text-align: center;
  }

  #footer a {
    color: #000;
  }

  #nav ul {
    background-color: ` + nav + `;
    color: #fff;
    width: 100%;
    top: 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #nav ul a {
    text-decoration: none;
    color: #fff;
  }

  #nav ul a li {
    display: inline-block;
    border-right: solid #fff 1px;
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
  var out = '';
  for (var key in pages) {
    var value = pages[key];
    if (key == curPage) out += '<a href="#" class="currentPage">' + value + '</a>';
    else out += '<a href="../' + key + '/">' + value + '</a>';
  }
  return out;
}
