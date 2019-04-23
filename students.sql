DROP TABLE IF EXISTS students;
CREATE TABLE students (
    sid INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    fname VARCHAR(20) NOT NULL,
    lname VARCHAR(20) NOT NULL,
    dob DATE NOT NULL,
    state VARCHAR(20),
    zip INTEGER,
    user VARCHAR(20) NOT NULL,
    pass VARCHAR(20) NOT NULL
);
INSERT INTO students (fname, lname, dob, state, zip, user, pass)
VALUES
    ('Jonathan','Ross','1990-03-01','Florida',33635,'bross','apple1'),
    ('Daniel','Williams','1986-09-21','New York',10014,'dwilliams','4321'),
    ('Henry','Newman','1993-06-12','Georgia',31207,'hnewman','pickle'),
    ('Sally','Smith','1992-07-02','Florida',32306,'ssmith','pear2'),
    ('Jane','Jones','1995-05-28','Nebraska',68588,'jjones','bluesky'),
    ('William','Roberts','1987-03-05','Florida',32611,'wroberts','grass15'),
    ('Mary','Wallace','1990-02-17','Florida',33620,'mwallace','99redball'),
    ('Robert','Jones','1994-04-11','Tennessee',37996,'rjones','bball94'),
    ('Paul','Clark','1996-11-25','Georgia',30332,'pclark','hawks'),
    ('Jennifer','Adams','1991-10-04','Georgia',31207,'jadams','gobulls');

