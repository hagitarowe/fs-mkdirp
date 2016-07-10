// Promise
var $mkdirp = require( "./fs-mkdirp-p.js" );
var path = "./demo/dir/subdir";
$mkdirp( path ).then(function( results ) {
  var error = results.error;
  var log = results.log;
  if( !error ) {
    // do something
  }
  else {
    // error
  }
  log.forEach(function( result ) {
    console.log( result );
  });
});

// Callback
// var mkdirp = require( "./fs-mkdirp.js" );
// var callback = function( error, results ) {
//   if( !error ) {
//     // do something
//   }
//   else {
//     // error
//   }
//   results.forEach(function( result ) {
//     console.log( result );
//   });
// };
// mkdirp( path, callback );