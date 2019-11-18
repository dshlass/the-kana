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

// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
// module.exports = withCSS(
//   withSass({
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000
//           }
//         }
//       });

//       return config;
//     }
//   })
// );
