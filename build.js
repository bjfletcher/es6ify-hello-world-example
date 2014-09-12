'use strict';

var path       = require('path')
  , fs         = require('fs')
  , browserify = require('browserify')
  , es6ify     = require('es6ify')
  , jsRoot     = path.join(__dirname, 'public')
  , bundlePath = path.join(jsRoot, 'main.js')
  ;

es6ify.traceurOverrides = { blockBinding: true };

browserify({ debug: true })
  .add(es6ify.runtime)
  .transform(es6ify)
  .require(require.resolve('./src/main.js'), { entry: true })
  .bundle()
  .on('error', function (err) { console.error(err); })
  .pipe(fs.createWriteStream(bundlePath));

console.log('Please open the index.html webpage in the public folder.');
