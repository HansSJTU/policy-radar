// vinext reads this file the way Next.js does.
const config = {
  // By default, metadata (`<title>`, description, canonical, hreflang) is
  // streamed into `<body>` for every visitor not on a short bot list, and
  // Googlebot and the build-time prerender are not on it. Search engines
  // ignore a canonical or hreflang outside `<head>`, so render metadata in
  // `<head>` for everyone. Pages are prerendered, so this costs nothing.
  htmlLimitedBots: /.*/,
};

export default config;
