var mkdirp = require( "./fs-mkdirp.js" );
mkdirp( "/demo/dir/subdir/", function( error, results ) {
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
});
