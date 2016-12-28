/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res) => {
    console.log(req.query);
    res.send({
        "c": 0,
        "d": {
            "info_level": 3, // 盘点信息等级，1注册2购买3中奖
            "reg_info": { //注册信息
                "reg_time": 1467739977,
                "reg_days": 176,
            },
            "first_purs_info": { // 第一次购买信息 info_level=2 才有数据
                "create_time": 1467739977,
                "goods_name": "盘点信息等级，1注册2购买3中奖",
            },
            "first_win_info": { // 第一次中奖信息 info_level=3 才有数据
                "create_time": 1467739977,
                "goods_name": "盘点信息等级，1注册2购买3中奖",
            },
            "wins_stat_info": { // 惊喜来源 info_level=3 才有数据
                "jd_card": 10, // 京东卡中奖数
                "apple": 10, // 苹果商品中奖数
                "phone_card": 11, // 话费卡中奖数
                "other": 20, // 其他商品中奖数
            },
            "max_win_goods": { // 最高中奖商品 info_level=3 才有数据
                "goods_name": "盘点信息等级，1注册2购买3中奖",
                "count": 11, //中奖次数
                "redirect_gid": 1420, //跳转商品GID
            },
            "win_rank": { //中奖数排名1
                "win_count": 348, // 中奖次数
                "cur_rank": 1, // 排名
            },
        }
    });
};
