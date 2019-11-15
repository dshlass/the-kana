const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dshlass/dev/the-kana/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/dshlass/dev/the-kana/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/dshlass/dev/the-kana/src/pages/contact.js"))),
  "component---src-pages-hiragana-js": hot(preferDefault(require("/Users/dshlass/dev/the-kana/src/pages/hiragana.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/dshlass/dev/the-kana/src/pages/index.js"))),
  "component---src-pages-katakana-js": hot(preferDefault(require("/Users/dshlass/dev/the-kana/src/pages/katakana.js"))),
  "component---src-pages-randomize-js": hot(preferDefault(require("/Users/dshlass/dev/the-kana/src/pages/randomize.js"))),
  "component---src-pages-study-js": hot(preferDefault(require("/Users/dshlass/dev/the-kana/src/pages/study.js")))
}

