DROP TABLE IF EXISTS professors;
CREATE TABLE professors (
    pid INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    fname VARCHAR(20) NOT NULL,
    lname VARCHAR(20) NOT NULL,
    dob DATE NOT NULL,
    state VARCHAR(20),
    zip INTEGER,
    salary FLOAT(200,2),
    user VARCHAR(20) NOT NULL,
    pass VARCHAR(20) NOT NULL
);

ALTER TABLE professors AUTO_INCREMENT=5001;

INSERT INTO professors (fname, lname, dob, state, zip, salary, user, pass)
VALUES
    ('Harry','Johns','1987-09-21','California',90210,56000,'hjohns','pnut6'),
    ('Lloyd','Smith','1974-03-27 ','Mississippi',38601,48000,'lsmith','13ford'),
    ('Herbert','Jones','1962-08-11','Alabama',35487,39000,'hjones','river3'),
    ('William','Mays','1956-05-03','Florida',33635,52000,'wmays','lighthouse'),
    ('Marsha','Ford','1979-07-15','Georgia',30322,59000,'mford','orange7'),
    ('Phillip','Johnson','1963-02-05','North Carolina',27708,61000,'pjohnson','htj1985'),
    ('Sandra','Wallace','1985-04-24','Montana',59717,54000,'swallace','batgirl2'),
    ('Penny','Fink','1983-10-22','Illinois',60637,53000,'pfink','newton'),
    ('Floyd','Clark','1959-11-20','Florida',33146,49000,'fclark','joule54'),
    ('Ron','Adams','1980-06-12','Georgia',31207,50000,'radams','cougar');
