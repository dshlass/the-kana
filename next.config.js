const withSass = require("@zeit/next-sass");
module.exports = withSass({
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
});

const sitemap = require("nextjs-sitemap-generator");
sitemap({
  baseUrl: "https://the-kana.com",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "static/"
});
