/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// let routerRoot = './routers-h5/';
let routerRoot = './routers/';

fs.readdir(routerRoot, (err, files)=> {
    if (err) {
        console.log('not found routers');
    } else {
        files.forEach((item)=> {
            app.use(require(routerRoot + item));
        });
    }
});

app.listen(process.env.PORT || 3000);
console.log('服务启动, 监听端口: 3000');
