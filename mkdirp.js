var fs = require( "fs" );
var mkdirp = function( path, callback, results ) {
  var results = results || [];
  var p, parent;
  path = !path ? "./" : (path[0] === "/" ? `.${ path }` : path );
  p = path.split( "/" );
  parent = p.slice( 0, p.length - 1 ).join( "/" );
  fs.lstat( path, function( error, stats ) {
    if( !error ) {
      results.push( `lstat: ${ path } exists` );
      if( callback ) {
        callback( results );
      }
      else {
        return results;
      }
    }
    else {
      results.push( `lstat: ${ path  } ${ error.code }` );
      switch( error.code ) {
        case "ENOENT":
          results.push( `mkdirp: ${ parent }` );
          mkdirp( parent, function( results ) {
            fs.mkdir( path, function( error ) {
              if( !error ) {
                results.push( `mkdir: ${ path }` );
              }
              else {
                results.push( `mkdir: ${ path  } ${ error.code }` );
              }
              if( callback ) {
                callback( results );
              }
              else {
                return results;
              }
            });
          });
        break;
        default:
          if( callback ) {
            callback( results );
          }
          else {
            return results;
          }
        break;
      }
    }
  });
};
module.exports = mkdirp;