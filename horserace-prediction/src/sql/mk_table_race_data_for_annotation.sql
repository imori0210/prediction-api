CREATE TABLE `race_data_for_annotation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place` varchar(8) NOT NULL,
  `date` int(11) NOT NULL,
  `race_num` int(11) NOT NULL,
  `course` varchar(8) NOT NULL,
  `first` int(2) NOT NULL,
  `second` int(2) NOT NULL,
  `trackbias_course` int(1),
  `trackbias_racestyle` int(1),
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_place_date_race_num` (`place`,`date`,`race_num`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


## データインポート
LOAD DATA LOCAL INFILE "/home/ubuntu/environment/api/horserace-prediction/src/sql/race_data_for_annotation.csv"
INTO TABLE race_data_for_annotation
FIELDS TERMINATED BY ',';