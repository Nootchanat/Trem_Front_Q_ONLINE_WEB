const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/apis", // Your API endpoint prefix
    createProxyMiddleware({
      target: "https://combative-buckle-moth.cyclic.app", // Your API server URL
      changeOrigin: true,
    })
  );
};
