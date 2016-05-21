var mkdirp = require( "./fs-mkdirp.js" );
var path = "./demo/dir/subdir";
var callback = function( error, results ) {
  if( !error ) {
    results.forEach(function( result ) {
      console.log( result );
    });
  }
  else {
    results.forEach(function( result ) {
      console.log( result );
    });
  }
};
mkdirp( path, callback );