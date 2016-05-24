var atlasboard = require('atlasboard');
atlasboard({port: process.env.OPENSHIFT_NODEJS_PORT || 8080, install: true}, function (err) {
  if (err) {
    throw err;
  }
});
