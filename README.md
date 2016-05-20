mkdirp
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
Result:
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
Result:
* mkdirp
  * directory
    * dir
      * subdir

```js
var path = "../directory/dir/subdir";
```
Result:
* parent
  * mkdirp
  * directory
    * dir
      * subdir

```js
var path = "../../directory/dir/subdir";
```
Result:
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