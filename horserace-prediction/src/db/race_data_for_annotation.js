const mysql = require('mysql');
const util = require('util');

const selectId = async function(con){
    con.query = util.promisify(con.query);
    let sql = "SELECT * FROM ?? WHERE ?? = ?";
    let select = ['race_data_for_annotation', 'id', 5];
    sql = await mysql.format(sql, select);
    let res = await con.query(sql);
    con.end();
    return res;
};

const selectLatestData = async function(con){
    con.query = util.promisify(con.query);
    // trackbias_XXXのデフォルト値が0
    // とりあえず芝固定。。。できない。。。。。
    let sql = "SELECT * FROM race_data_for_annotation WHERE (trackbias_course = 0 OR trackbias_racestyle = 0) ORDER BY id ASC LIMIT 1";
    // ユーザ入力のデータをSQLに使用しないため直
    // let select = ['race_data_for_annotation', 'id', 5];
    // sql = await mysql.format(sql, select);
    let res = await con.query(sql);
    con.end();
    return res;
};

module.exports = {'selectId': selectId, 'selectLatestData': selectLatestData };