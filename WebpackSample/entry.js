require("./bootswatch.less");
require("./style.scss");
var content = require("./content.js");
var _ = require("underscore");
var list = ['1', '2', '3', '4'];

_.each(list, function (item) {
    document.write(content + item + "<br />");
});