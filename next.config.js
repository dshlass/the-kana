const withSass = require("@zeit/next-sass");
const sitemap = require("nextjs-sitemap-generator");
sitemap({
  baseUrl: "https://the-kana.com",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "public/static/"
});

module.exports = withSass({
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/hiragana": { page: "/hiragana" },
      "/katakana": { page: "/katakana" },
      "/hiragana/gojuon": { page: "/hiragana/gojuon" },
      "/hiragana/dakuon": { page: "/hiragana/dakuon" },
      "/hiragana/handakuon": { page: "/hiragana/handakuon" },
      "/hiragana/yoon": { page: "/hiragana/yoon" },
      "/katakana/gojuon": { page: "/katakana/gojuon" },
      "/katakana/dakuon": { page: "/katakana/dakuon" },
      "/katakana/handakuon": { page: "/katakana/handakuon" },
      "/katakana/yoon": { page: "/katakana/yoon" }
    };
  }
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
