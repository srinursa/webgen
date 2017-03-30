/* If you're reading this someone probably broke something horribly because
 * there is literally no reason for someone to be this deep down in the kernel.
 * In that case, you should probably find a computer technician because the fact
 * that you're seeing this means your computer is broken probably beyond repair.
 */

function retSite(title, pages, authors) {
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
      <h1 class="mainheading">` + title + `</h1>
    </div>
    <div id="footer">
      <p>&copy; Copyright 2017. All Rights Reserved. <br>
        Website by ` + authors + `.</p>
    </div>
    <script src="scripts/main.js"></script>
  </body>
  </html>`
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
  var out = retSite(title, pgs, authorsStr);

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
