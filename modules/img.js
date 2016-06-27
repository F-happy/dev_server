/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

var formidable = require("formidable");
var form = new formidable.IncomingForm();

module.exports = (req, res)=>{
    console.log(req.body);
    debugger;
    form.parse(req, function(error, fields, files) {
        for (var key in files) {
            var file = files[key];
            console.log(file);
        }
    });
    // res.send('hello');
};
