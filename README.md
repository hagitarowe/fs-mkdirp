fs-mkdirp
====================
node fs mkdir -p

Demo
---------------------
```bash
npm start
```
Result:
* mkdirp
  * demo
    * dir
      * subdir

Usage
---------------------
var $mkdirp = require( "./fs-mkdirp-p" );

## Promise
```js
$mkdirp( "./directory/dir/subdir" ).then(function( results ) {
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
```
Result:
* mkdirp
  * directory
    * dir
      * subdir

var mkdirp = require( "./fs-mkdirp" );

## Callback
```js
mkdirp( "./directory/dir/subdir", function( error, results ) {
  if( !error ) {
    // do something
  }
  else {
    // error
  }
  results.forEach(function( result ) {
    console.log( result );
  });
});
```
Result:
* mkdirp
  * directory
    * dir
      * subdir

### path
string
```js
var path;
path = "directory/dir/subdir";
path = "directory/dir/subdir/";
path = "/directory/dir/subdir";
path = "./directory/dir/subdir";
mkdirp( path );
```
Result:
* mkdirp
  * directory
    * dir
      * subdir

```js
var path = "../directory/dir/subdir";
mkdirp( path );
```
Result:
* parent
  * mkdirp
  * directory
    * dir
      * subdir

### callback
function
```js
var mkdirp = require( "./fs-mkdirp.js" );
var path = "../../directory/dir/subdir";
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
```
Result:
* parent
  * parent
    * mkdirp
  * directory
    * dir
      * subdir