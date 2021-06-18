---
title: SQL
---

## Content

- Tables
- Relationship
- Joins
- Subqueries
- Regular Expression

## Common Terms

- **Database** - is a collection of the data stored in a format that can be easily accessed.
- **DBMS**(Database management System) - is an software application that is used to manage the data in the database.

- Categories of the DBMS

  - Relational(SQL)
  - Non Relational(NoSQL)

- **Relational DBMS** - are the databases in which store the data in the format of table that are linked to each other.

  - Popular RDBMS
    - MySQL
    - SQL Server
    - Oracle
  - SQL(Structured Query Language) is the language we use to work with RDBMS.

- NoSQL Databases

## Installation

## Features

- SQL is not a case sensitive language
- A sql statement should be ended with the semicolon(`;`)
- SQL comments

```sql
-- This is a Comment
```

- Database Operations(CRUD)
  - Create(Insert)
  - Read(Sele)
  - Update
  - Delete

## Writing Query

- Creating a database

```sql
CREATE DATABASE company;
```

- Selecting a database

```sql
USE company;
```

- Deleting a database

```sql
DROP DATABASE company;
```

- Creating a table

```sql
CREATE TABLE employe(
  id INT PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(30) NOT NULL UNIQUE
);
```

- Seeing the tables of the Database

```sql
SHOW TABLES;
```

- Seeing the description of the table

```sql
DESC employe;
```

---

## SELECT Clause

- Example 1:

```sql
SELECT *
FROM employe
WHERE id > 10
ORDER BY name
LIMIT 4;
```

- performing calculation while retriving the columns of the data

```sql
SELECT name, sallery + 1000
FROM employe;
```

- Doing aliasing of the column name

```sql
SELECT name, (sallery + 1000) /10 AS "New Sallery"
FROM employe;

SELECT CustomerName, CONCAT(Address,', ',PostalCode,', ',City,', ',Country) AS Address
FROM Customers;
```

- selecting the unique rows of a column

```sql
SELECT DISTINCT name FROM employe;
SELECT COUNT(DISTINCT name) FROM employe;
SELECT COUNT(*) FROM employe;
```

## WHERE Clause

- Using the operators
  - Operators: =, >, <, >=, >=, <>, !=

```sql
SELECT *
FROM employe
WHERE sallery > 1000;
```

- Combining multiple search conditions
  - AND, OR, NOT

```sql
SELECT *
FROM employe
WHERE id > 10 AND sallery > 2000;
```

- Operator Precedence

```sql
()
* /
+ -

AND
OR
NOT

SELECT * FROM employe WHERE NOT name = "Ram"
```

- Using Arithmetic expression

```sql
SELECT *
FROM employe
WHERE (sallery + 100) > 10000;
```

- IN and NOT IN opertor

```sql
SELECT *
FROM employe
WHERE id IN (1,2,3,4);

-- Using NOT IN
SELECT *
FROM employe
WHERE id NOT IN (1,2,3,4);

SELECT * FROM Customers
WHERE Country IN (SELECT Country FROM Suppliers);
```

- BETWEEN Operator

```sql
SELECT *
FROM employe
WHERE sallery BETWEEN 1000 AND 3000;

-- The upper query is similar to
SELECT *
FROM employe
WHERE sallery >= 1000 AND sallery <= 3000;
```

- LIKE Operator
  - Search for a Pattern
  - all the operation are not case sensitive

```sql
SELECT *
FROM employe
WHERE name LIKE '%kumar';

-- matching the name with 6 character name and last character 'r'
SELECT *
FROM employe
WHERE name LIKE '_____r';
```

- IS NULL , IS NOT NULL

```sql
SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;

SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NOT NULL;
```

## ORDERED BY

```sql
SELECT * FROM Customers
ORDER BY Country;

SELECT * FROM Customers
ORDER BY Country DESC;

SELECT * FROM Customers
ORDER BY Country, CustomerName;

SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;
```

## INSERT INTO

```sql
INSERT INTO student(rollno, name) VALUES (101, 'Ram Kumar');

INSERT INTO student VALUES ('Ram Kumar', 101);
```

## UPDATE

```sql
UPDATE student SET name = "Mohit Kumar" WHERE rollno = 101;
UPDATE student SET name = "Mohit Kumar", rollno=103 WHERE rollno = 101;
```

## DELETE

```sql
DELETE FROM student WHERE name = "Ram Kumar";

DELETE FROM student;
```

## LIMIT

```sql
SELECT * FROM Customers LIMIT 3;
SELECT * FROM Customers ORDER BY name LIMIT 3;
```

## FUNCTIONS

```sql
select max(rollno)  from student;

select min(rollno)  from student;

select count(rollno)  from student;

select AVG(rollno)  from student;
```

## JOINS

```sql
SELECT * FROM student INNER JOIN course ON student.courseid = course.id ;

SELECT * FROM student LEFT JOIN course ON student.courseid = course.id ;

SELECT * FROM student RIGHT JOIN course ON student.courseid = course.id ;
```

- MYSQL

```sh
user: root
Pass: root
user: sachin
pass: sachin

- MySQL Shell
- mysqlsh
- \c root@localhost:3306
- \sql
- \source test1.sql
- mysql bin
- mysql -u root -p
- source test.sql
- exit: ctrl + D

Introduction

- How to use
- installation
- Uses of the SQL
- CRUD
- create and manage Databases
- Design and create tables
- Perform administration tasks
  § Security
  § user management
  § import / Export
- Data Types
- SERIAL
- INT
- VARCHAR(l)
- DECIMAL(M,N)
  § M - total number of Digits
  § N - digits after decimal
- BLOB
- DATE : 'YYYY-MM-DD'
- TIMESTAMP: 'YYYY-MM-DD HH:MM:SS'
- Create Table
- constrains
- NOT NULL
- UNIQUE
- PRIMARY KEY
- DEFAULT value
- AUTO_INCREMENT
- CHECK
- Inserting the Data to the table
- Selecting the Data
- SELECT \* FROM student;
- SELECT name FROM student;
- SELECT \* FROM student WHERE id = 2;
- SELECT \* FROM student WHERE marks > 60;
- SELECT \* FROM student WHERE course = 'HTML' AND marks > 50;
- SELECT \* FROM student WHERE course = 'HTML' OR marks > 50;
- Operators
- <, >, >=, <=, <>, =, AND, OR
- Functions
- AVG()
- COUNT()
- MIN()
- MAX()
- Updating the Data
- Deleting the Data
- Advanced Select Queries
- SELECT \* FROM student WHERE course IN ("HTML", "CSS", "JS");
- SELECT \* FROM student WHERE course LIKE '%S%';
- SELECT \* FROM student LIMIT 2;
- SELECT \* FROM student ORDER BY marks ASC;
- SELECT \* FROM student ORDER BY marks DESC;
- SELECT \* FROM student ORDER BY marks ASC LIMIT 2;
- SELECT course, count(\*) FROM student GROUP BY course;
- SELECT course, count(_) FROM student GROUP BY course HAVING COUNT(_) > 3;
- Foreign Keys
- Joins
```
