const { createProxyMiddleware } = require("http-proxy-middleware");

/*
This acts a proxy between the react application and the flask microservice
Everytime there is a request to /api, the setupProxy prepends the flask
microservice url mentioned in line 14
*/
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // update the flask Google Cloud URL
        // prod https://flaskservice-769915942273.us-central1.run.app/
        target: "https://flaskservice-769915942273.us-central1.run.app",
      changeOrigin: true,
    })
  );
};