const raceDataForAnnotation = require('../db/race_data_for_annotation')
const con = require('../db/common')

const getLatestData = async function () {
    return await raceDataForAnnotation.selectLatestData(con.connection());
}

module.exports = {'getNextData': getLatestData };