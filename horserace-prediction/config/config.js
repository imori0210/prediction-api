
// APIサーバポート
const PORT='8081'

// mysql接続情報
const MYSQL={
  host     : '127.0.0.1',
  user     : 'docker',
  password : 'docker',
  database : 'database',
  port     : 13306,
  connectionLimit: 10,
  charset : 'utf8'
}

module.exports = Object.freeze({ 
    port: PORT,
    mysql: MYSQL
});