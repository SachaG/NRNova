Package.describe({
  name: "nrfight"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'http',
    'static-html',

    'nova:core@0.26.5-nova',
    'nova:posts@0.26.5-nova',
    'nova:users@0.26.5-nova',
    'nova:comments@0.26.5-nova',
  ]);

  api.addFiles("lib/head.html", "client");

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

  api.addAssets(["videos.json"], ["server"]);  
});
