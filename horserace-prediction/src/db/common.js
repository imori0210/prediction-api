const mysql = require('mysql');
const config = require('../../config/config');

// mysqlの接続情報
const getConnection = function(){
    const con = mysql.createPool(
        config.mysql
    );
    return con
} 

module.exports = {'connection': getConnection };

// 接続できない時にエラーを表示する
// con.connect((err) => {
//     if (err) {
//         console.log('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('success');
// });