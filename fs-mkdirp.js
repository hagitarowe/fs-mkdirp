var fs = require( "fs" );
var debug = {
  push: function( message ) {
    debug.log.push( message );
  },
  log: [],
  error: false
};
var mkdirp = function( path, callback ) {
  var p, parent;
  path = !path ? "./" : (path[0] === "/" ? `.${ path }` : path );
  path = path[path.length - 1] === "/" ? path.slice( 0, path.length - 1 ) : path;
  p = path.split( "/" );
  parent = p.slice( 0, p.length - 1 ).join( "/" );
  fs.lstat( path, function( error, stats ) {
    if( !error ) {
      debug.push( `lstat: ${ path } exists` );
      if( callback ) {
        callback( debug.error, debug.log );
      }
    }
    else {
      debug.push( `lstat: ${ path  } ${ error.code }` );
      switch( error.code ) {
        case "ENOENT":
          debug.push( `mkdirp: ${ parent }` );
          mkdirp( parent, function( error, results ) {
            fs.mkdir( path, function( error ) {
              if( !error ) {
                debug.push( `mkdir: ${ path }` );
              }
              else {
                debug.push( `mkdir: ${ path  } ${ error.code }` );
                debug.error = true;
              }
              if( callback ) {
                callback( debug.error, debug.log );
              }
            });
          });
        break;
        default:
          debug.error = true;
          if( callback ) {
            callback( debug.error, debug.log );
          }
        break;
      }
    }
  });
};
module.exports = mkdirp;