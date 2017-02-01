Package.describe({
  name: "nrfight"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'http',
    'static-html',

    'fourseven:scss',

    'nova:core',
    'nova:posts',
    'nova:users',
    'nova:comments',
  ]);

  // api.addFiles("lib/head.html", "client");

  api.addFiles("lib/stylesheets/main.scss", "client");

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

  api.addAssets(["videos.json"], ["server"]);  

});
