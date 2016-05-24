var atlasboard = require('atlasboard');
atlasboard({port: process.env.ATLASBOARD_PORT || 8080, install: true}, function (err) {
  if (err) {
    throw err;
  }
});
