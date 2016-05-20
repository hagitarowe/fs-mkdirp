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
```js
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
```
* mkdirp
  * directory
    * dir
      * subdir

### path
string
```js
var path = "directory/dir/subdir";
var path = "directory/dir/subdir/";
var path = "/directory/dir/subdir";
var path = "./directory/dir/subdir";
```
* mkdirp
  * directory
    * dir
      * subdir

```js
var path = "../directory/dir/subdir";
```
* parent
  * mkdirp
  * directory
    * dir
      * subdir

```js
var path = "../../directory/dir/subdir";
```
* parent
  * parent
    * mkdirp
  * directory
    * dir
      * subdir

### callback
function
```js
var callback = function( error, results ) {
  // bool error
  // array results
};
```