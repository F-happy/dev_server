/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

const express = require('express');
let app = express();


app.use(require('./routers/actions'));
app.use(require('./routers/telmoney'));
app.use(require('./routers/card'));

app.listen(3000);
console.log('服务启动, 监听端口: 3000');
