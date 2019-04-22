CREATE TABLE professors (
    `pid` INT,
    `fname` VARCHAR(7) CHARACTER SET utf8,
    `lname` VARCHAR(7) CHARACTER SET utf8,
    `dob` DATETIME,
    `state` VARCHAR(14) CHARACTER SET utf8,
    `zip` INT,
    `salary` INT,
    `user` VARCHAR(8) CHARACTER SET utf8,
    `pass` VARCHAR(10) CHARACTER SET utf8
);
INSERT INTO professors VALUES
    (1001,'Harry','Johns','1987-09-21 00:00:00','California',90210,56000,'hjohns','pnut6'),
    (1002,'Lloyd','Smith','1974-03-27 00:00:00','Mississippi',38601,48000,'lsmith','13ford'),
    (1003,'Herbert','Jones','1962-08-11 00:00:00','Alabama',35487,39000,'hjones','river3'),
    (1004,'William','Mays','1956-05-03 00:00:00','Florida',33635,52000,'wmays','lighthouse'),
    (1005,'Marsha','Ford','1979-07-15 00:00:00','Georgia',30322,59000,'mford','orange7'),
    (1006,'Phillip','Johnson','1963-02-05 00:00:00','North Carolina',27708,61000,'pjohnson','htj1985'),
    (1007,'Sandra','Wallace','1985-04-24 00:00:00','Montana',59717,54000,'swallace','batgirl2'),
    (1008,'Penny','Fink','1983-10-22 00:00:00','Illinois',60637,53000,'pfink','newton'),
    (1009,'Floyd','Clark','1959-11-20 00:00:00','Florida',33146,49000,'fclark','joule54'),
    (1010,'Ron','Adams','1980-06-12 00:00:00','Georgia',31207,50000,'radams','cougar');
