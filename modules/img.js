/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

const Canvas = require('canvas');

module.exports = (req, res) => {
    let params = req.params[0];
    let imageConfig = {
        backgroundColor: 'fff',
        width: 100,
        height: 100
    };
    if (params) {
        params.split('/').forEach((v) => {
            if (v.includes('x')) {
                imageConfig.width = parseInt(v.split('x')[0]);
                imageConfig.height = parseInt(v.split('x')[1]);
            } else {
                imageConfig.backgroundColor = v;
            }
        });
        let canvas = new Canvas(imageConfig.width, imageConfig.height),
            ctx    = canvas.getContext('2d');
        ctx.fillStyle = `#${imageConfig.backgroundColor}`;
        ctx.fillRect(0, 0, imageConfig.width, imageConfig.height);
        ctx.drawImage(drawTextTool(`${imageConfig.width}x${imageConfig.height}`, imageConfig.width, imageConfig.height), 0, 0);
        canvas.toBuffer(function (err, buf) {
            if (err) {
                res.end(buf);
            } else {
                res.writeHead(200, {
                    'Content-Type': 'image/png',
                    'Content-Length': buf.length
                });
                res.end(buf);
            }
        });
    }
    // console.log(imageConfig);
};

function drawTextTool(text, width, height) {
    let textCanvas  = new Canvas(width, height),
        textContext = textCanvas.getContext('2d');
    textContext.font = '50px serif';
    textContext.fillStyle = '#fff';
    textContext.fillText(text, (width - 180) / 2, height / 2);
    return textCanvas;
}
