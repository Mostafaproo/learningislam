var StaticServer = require("static-server");
var server = new StaticServer({
  rootPath: "dist/",
  port: 8000,
  livereload: true,
});

server.start(function () {
  console.log("server Started", server.port);
});
