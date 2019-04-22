CREATE TABLE students (
    `sid` INT,
    `fname` VARCHAR(8) CHARACTER SET utf8,
    `lname` VARCHAR(8) CHARACTER SET utf8,
    `dob` DATETIME,
    `state` VARCHAR(9) CHARACTER SET utf8,
    `zip` INT,
    `user` VARCHAR(9) CHARACTER SET utf8,
    `pass` VARCHAR(9) CHARACTER SET utf8
);
INSERT INTO students VALUES
    (1,'Jonathan','Ross','1990-03-01 00:00:00','Florida',33635,'bross','apple1'),
    (2,'Daniel','Williams','1986-09-21 00:00:00','New York',10014,'dwilliams','4321'),
    (3,'Henry','Newman','1993-06-12 00:00:00','Georgia',31207,'hnewman','pickle'),
    (4,'Sally','Smith','1992-07-02 00:00:00','Florida',32306,'ssmith','pear2'),
    (5,'Jane','Jones','1995-05-28 00:00:00','Nebraska',68588,'jjones','bluesky'),
    (6,'William','Roberts','1987-03-05 00:00:00','Florida',32611,'wroberts','grass15'),
    (7,'Mary','Wallace','1990-02-17 00:00:00','Florida',33620,'mwallace','99redball'),
    (8,'Robert','Jones','1994-04-11 00:00:00','Tennessee',37996,'rjones','bball94'),
    (9,'Paul','Clark','1996-11-25 00:00:00','Georgia',30332,'pclark','hawks'),
    (10,'Jennifer','Adams','1991-10-04 00:00:00','Georgia',31207,'jadams','gobulls');
