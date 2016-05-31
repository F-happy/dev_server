/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

const express = require('express');
const fs = require('fs');
let app = express();

fs.readdir('./routers', (err, files)=> {
    if (err) {
        console.log('not found routers');
    } else {
        files.forEach((item)=> {
            app.use(require('./routers/' + item));
        });
    }
});

app.listen(3000);
console.log('服务启动, 监听端口: 3000');
