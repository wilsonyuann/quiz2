$ mssql -s abc -p pass123

> USE master;

> CREATE DATABASE bootcamp;

> use bootcmap;

> CREATE TABLE Participant (
...  id int NOT NULL IDENTITY PRIMARY KEY,
...  username varchar(50) NOT NULL,
...  email varchar(50) NOT NULL,
...  phone varchar(10) NOT NULL,
...  course varchar(100) NOT NULL,
...);