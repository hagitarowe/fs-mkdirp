var fs = require( "fs" );
var mkdirp = function( path, callback, results ) {
  var results = results || [];
  var p, parent;
  p = path.split( "/" );
  parent = p.slice( 0, p.length - 1 ).join( "/" );
  fs.lstat( path, function( error, stats ) {
    if( !error ) {
      // path exists
      console.log( `lstat: ${ path } exists` );
      if( callback ) {
        callback( results );
      }
    }
    else {
      // path does not exist
      console.log( `lstat: ${ path } does not exist` );
      console.log( `mkdirp: ${ parent }` );
      mkdirp( parent, function( results ) {
        fs.mkdir( path, function( error ) {
          if( !error ) {
            console.log( `mkdirp: ${ path }` );
          }
          else {
            console.log( `ERROR: ${ error }` );
          }
          return results;
        });
      });
    }
  });
};
module.exports = mkdirp;