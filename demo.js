var mkdirp = require( "./mkdirp.js" );
mkdirp( "demo/dir/subdir", function( results ) {
  console.log( results );
}, []);
