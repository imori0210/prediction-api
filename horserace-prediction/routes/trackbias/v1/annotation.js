var express = require('express');
var router = express.Router();
const annotation = require('../../../src/trackbias/annotation')

/**
 * @swagger
 * /trackbias/v1/annotation/register:
 *   post:
 *     description: アノテーション登録
 *     produces:
 *       - application/json
 *     parameters:
 *       - date: 20200111
 *         description: yyyymmdd
 *         in: yyyymmdd
 *         required: true
 *         type: int
 *       - place: '東京'
 *         description: 競馬場
 *         in: '東京'
 *         required: true
 *         type: string
 *       - race_num: 11
 *         description: レース番号
 *         in: 11
 *         required: true
 *         type: int
 *       - bias_style: 1
 *         description: 優位だったレーススタイル
 *         in: 1
 *         required: true
 *         type: int
 *       - bias_course: 1
 *         description: 馬が通ったコース
 *         in: 1
 *         required: true
 *         type: int
 *     responses:
 *       200:
 *         description: 
 *         examples: 
 *           result:
 *             status: 'OK'
 */
router.post('/register', (req, res) => {
  console.log(req.body);
  res.json({status: 'OK'});
});

/**
 * @swagger
 * /trackbias/v1/annotation/getLatestData:
 *   post:
 *     description: 次に更新するデータ取得(bias_styleまたはbias_courseがNullのIDが最も小さいデータ)
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 
 *         examples: 
 *           result:status: 'OK'
 *           data: [{date: 20201111, race_num: 11, place: '東京', bias_style: 1, bias_course: 1}]
 */
router.post('/getLatestData', async (req, res) => {
  console.log(req.body);
  let ret = await annotation.getNextData();
  res.json({status: 'OK', data: ret[0]});
});

/**
 * @swagger
 * /trackbias/v1/annotation/getCurrentData:
 *   post:
 *     description: 最後に更新したデータ取得(bias_styleまたはbias_courseがNullでないIDが最も大きいデータ)
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 
 *         examples: 
 *           result:status: 'OK'
 *           list: [{date: 20201111, race_num: 11, place: '東京', bias_style: 1, bias_course: 1}]
 */
router.post('/getCurrentData', (req, res) => {
  console.log(req.body);
  res.json({status: 'OK'});
});

/**
 * @swagger
 * /trackbias/v1/annotation/getNextData:
 *   post:
 *     description: 次のIDのデータ取得
 *     produces:
 *       - application/json
 *     parameters:
 *       - date: id
 *         description: id
 *         in: 1
 *         required: true
 *         type: int
 *     responses:
 *       200:
 *         description: 
 *         examples: 
 *           result:status: 'OK'
 *           data: [{date: 20201111, race_num: 11, place: '東京', bias_style: 1, bias_course: 1}]
 */
router.post('/getNextData', async (req, res) => {
  console.log(req.body);
  res.json({status: 'OK'});
});


/**
 * @swagger
 * /trackbias/v1/annotation/getDataByDatePlace:
 *   post:
 *     description: ユーザの選択した日付から100件取得
 *     produces:
 *       - application/json
 *     parameters:
 *       - date: 20200111
 *         description: yyyymmdd
 *         in: yyyymmdd
 *         required: true
 *         type: int
 *       - place: '東京'
 *         description: 競馬場
 *         in: '東京'
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: ユーザが選択した日付データから100件
 *         examples: 
 *           result:
 *             status: 'OK'
 *             list: [{date: 20201111, race_num: 11, place: '東京', bias_style: 1, bias_course: 1}]
 */
router.post('/getDataByDatePlace', (req, res) => {
  console.log(req.body);
  res.json({status: 'OK'});
});











/**
 * @swagger
 * /trackbias/v1/annotation/getDataByDatePlace:
 *   post:
 *     description: ユーザの選択した日付から100件取得
 *     produces:
 *       - application/json
 *     parameters:
 *       - date: 20200111
 *         description: yyyymmdd
 *         in: yyyymmdd
 *         required: true
 *         type: int
 *       - place: '東京'
 *         description: 競馬場
 *         in: '東京'
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: ユーザが選択した日付データから100件
 *         examples: 
 *           result:
 *             status: 'OK'
 *             list: [{date: 20201111, race_num: 11, place: '東京', bias_style: 1, bias_course: 1}]
 */
router.post('/getByDatePlace', (req, res) => {
  console.log(req.body);
  res.json({status: 'OK'});
});

/**
 * @swagger
 * /trackbias/v1/annotation/getDataByDatePlace:
 *   post:
 *     description: 競馬開催日と開催場所のリストを取得
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 上に同じ
 *         examples: 
 *           result:
 *             status: 'OK'
 *             list: [{date: 20201111, place: '東京'}]
 */
router.post('/getDatePlace', (req, res) => {
  console.log(req.body);
  res.json({status: 'OK'});
});

module.exports = router;
