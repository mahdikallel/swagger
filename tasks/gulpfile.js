// Requis
var gulp = require('gulp');
var yaml = require('js-yaml');
var path = require ('path');
var fs  = require('fs');
 gulp.task("swagger",function () {
     console.log("convert YAML to JSON");
     var doc = yaml.safeLoad(fs.readFileSync(path.join("../api/swagger/swagger.yaml")));
     fs.writeFileSync(path.join(__dirname,"../public/swagger.json"),JSON.stringify(doc,null,""));
 });
gulp.task("watch",function () {
    console.log(__dirname);
    gulp.watch("../api/swagger/swagger.yaml",["swagger"]);
});