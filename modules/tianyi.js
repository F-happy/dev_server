/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let resArray = {
        "c": 0,
        "username": Mock.mock('@csentence(5)'),
        "d": {
            "token": 'ssssssssssssss', //待领取返币
            "img_base64": `iVBORw0KGgoAAAANSUhEUgAAAHgAAAAeCAIAAABoq03CAAADX0lEQVR4nO1aPU8jMRB9jg5RICU0
RxWJgh+ABFKAComCkgYhpIhuSyqERJOWDn4HQvQUFDQ0CCS4moaKJlxzUegQmivseL1ef603Icne
PW3htWfG4+fx2N6EERFMYIzZmv4jArVxO/CvwEr0N4czY8xYrgwmJaLVeZ2ulBUYFmaiKxlTI0Jg
WJiJHldM2Sa4AhM/hNTBmOfxYm1NSpJRa7qSCQDGmBYckURLK4yx2VlRWa/HmcLjI1ZXAYAIRPj6
EvVTAeNqIyItOCKJllaI6OCAF9DrCaa0x4HlZaH79JRK1moAGBC6IMaOkMw2hFsJ7yXOjPRQUx+4
/gdoDMXJseOHLBmvgiO6H6pmiXjk6kFBRIMpnHqWoaYO43gKDfLoyCPABkC6XYjX8/MYNm25xVh/
cuJS4bi5id/bPQmESgOwPb+0LhxeGB2x1Uvc3pplpA/X18VstlqO4aRPBMqeOgAkiSdBy0C288XF
wJjYHmXsuC1vbcku1O5SrZeXjANemw8P5v1cVYncjShKTyZZ2+GmXke/X9izvLEQ3c1N3N1lJHPH
cL2+0KBfX7G0VMwlA8KDP049ZK3lV+XKCnW7omZ7O8Q32ttTX+/VJrUAUL/vN2hzsqCKkjaNzeVn
xe1fxgNn4pNNz8/+XhRO70lhVpM8Owt3X3cjelNLU4eaBChyeRjgTosXF2i3XTKBi10TUw3yMw4y
58UC/ktrvR4ajdi8oR3vlAksgPd3m3+ZTLm+bpBpt/32uTuHhx6ZTkeUNzbydKSD2tkpdtvkwklS
imVom2H09UTd6PNNGFyy+QcNh4zNcmAkSjc0efnKCx8fmJvzmFIV397QbJZiGdq3DhvL5b9SMmZl
2Y1wlmVHXP70NK2cmRFNx8cAQlkGsLAAAM1mqLwDQ/uFhTEkCRYX9UqOEJqM967wKeb3TNlRp5Pq
fn4KB1qtUGu8625XlJXFERtzkZtoDru7Q7hHlVaHasRo/OoqyKY8Y5Q50qmYrA9jjnCJuPXkvgiK
wv4+Li/9dubn0evZGn8DPy29iBOO7tVAOp7uqv4DJDBJ8F3Ev1FXkqNvQNHwmpS/GzggP6uO25EM
bCznfy3klVNAtBzSpHFthHUC3PFfaIFUI1nbdrOS8ER0of4qwDJGMAo+c38Bb8/2ZmAwGiEAAAAA
SUVORK5CYII=
`
        }
    };
    let array2 = {
        'c': 0,
        'd': {}
    };
    if (!!req.query.phone) {
        resArray = array2;
    }
    res.jsonp(resArray);
};
