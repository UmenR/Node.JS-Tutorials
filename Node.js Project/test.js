/**
 * Created by ummi on 4/26/2017.
 */
var path = require("path");

// The path we provided
var hello = "languages/english/greetings///hello.html";

// normalize the path
var hellon = path.normalize(hello);
console.log(hellon);

// get the path from the root directory
console.log(path.dirname(hellon));
// get the file name
console.log(path.basename(hellon));
// get the extension of the file
console.log(path.extname(hellon));