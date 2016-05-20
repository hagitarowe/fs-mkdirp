mkdirp
====================
node fs mkdir -p

Demo
---------------------
npm start
Creates a directory with the path "./demo/dir/subir".

Usage
---------------------

### mkdirp( path, callback );
~~~~
mkdirp( "./directory/dir/subdir", function( error, results ) {
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
~~~~

### path
string
~~~~
var path = "directory/dir/subdir";
var path = "directory/dir/subdir/";
var path = "/directory/dir/subdir";
var path = "./directory/dir/subdir";
~~~~
mkdirp
|_directory
  |_dir
    |_subdir

~~~~
var path = "../directory/dir/subdir";
~~~~
parent
|_mkdirp
|_directory
  |_dir
    |_subdir

~~~~
var path = "../../directory/dir/subdir";
~~~~
parent
|_parent
| |_mkdirp
|_directory
  |_dir
    |_subdir

### callback
function
~~~~
var callback = function( error, results ) {
  // bool error
  // array results
};
~~~~