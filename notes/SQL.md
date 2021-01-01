# SQL - Structured Query Language

- SQL keywords are NOT case sensitive
- Semicolon is the standard way to separate each SQL statement in database systems that allow more than one SQL statement to be executed in the same call to the server.
- `--` single line comment
- `/*   */` multi line comment

# Programming With Mosh

## Timing

0:00:00 Introduction
0:01:02 What is SQL?
0:04:24 Cheat Sheet
0:04:50 Installing MySQL on Mac
0:09:48 Installing MySQL on Windows
0:15:08 Creating the Databases for this Course 
0:23:40 The SELECT Statement
0:29:30 The SELECT Clause
0:38:18 The WHERE Clause
0:43:35 The AND, OR, and NOT Operators 
0:51:38 The IN Operator
0:54:41 The BETWEEN Operator
0:56:53 The LIKE Operator
1:02:31 The REGEXP Operator
1:11:51 The IS NULL Operator
1:14:18 The ORDER BY Operator
1:21:23 The LIMIT Operator
1:24:50 Inner Joins
1:33:16 Joining Across Databases
1:36:03 Self Joins
1:40:17 Joining Multiple Tables
1:47:03 Compound Join Conditions
1:50:44 Implicit Join Syntax
1:53:04 Outer Joins
1:59:31 Outer Join Between Multiple Tables 
2:05:50 Self Outer Joins
2:08:02 The USING Clause
2:13:25 Natural Joins
2:14:46 Cross Joins
2:18:01 Unions
2:26:29 Column Attributes
2:29:54 Inserting a Single Row 
2:35:40 Inserting Multiple Rows 
2:38:58 Inserting Hierarchical Rows 
2:44:51 Creating a Copy of a Table 
2:53:38 Updating a Single Row 
2:57:33 Updating Multiple Rows 
3:00:47 Using Subqueries in Updates 
3:06:24 Deleting Rows
3:07:48 Restoring Course Databases

Data Base - is a collection of data in a format that can easily be accessed

DBMS - is a software used to manage the databases

Send Query
User --> DBMS --> DB
Receive the Output
User <-- DBMS <-- DB

Types of DBMS

- Relational- data is stored in tables
	- SQL is used to work with Relational DBs
	- RDBMS - MySQL, SQL Server, Oracle
- NoSQL- 

## Simple Select Query

USE sql_store;

SELECT *
FROM customers
WHERE customer_id = 1
ORDER BY first_name;


## SELECT - Clause Discussion

SELECT last_name, first_name, points
FROM customers

- Using Arithmetic Operators

SELECT 
	last_name, 
	first_name, 
	points
	points * 10 + 100 AS discount_factor
FROM customers


SELECT DISTINCT state
FROM customers

SELECT 
    name,
    unit_price AS 'Unit Proce',
    unit_price * 1.1 AS 'New Price'
FROM
    products;


## WHERE - Clause

- Compaision Operators
	- != (not equal)
	- <> (not equal)
	- = (equal)

- date 
	- 'YYYY-MM-DD'

- AND, OR, NOT

SELECT * FROM customers
WHERE birth_date > '1990-01-01';


SELECT 
    *
FROM
    order_items
WHERE
    order_id = 6
        AND (quantity * unit_price) > 30;


SELECT 
    *
FROM
    products
WHERE
	quantity_in_stock IN (49, 38, 72)


SELECT 
    *
FROM
    customers
WHERE
	birth_date BETWEEN '1990-01-01' AND '2000-01-01';

SELECT 
    *
FROM
    customers
WHERE
	last_name LIKE 'b%';
    
-- - % any number of characters
-- _ single character


## INNER JOIN

SELECT 
    order_id, name, quantity, oi.unit_price
FROM
    order_items oi
        JOIN
    products p ON oi.product_id = p.product_id;


- Joining table from two DBs

SELECT 
    order_id, name, quantity, oi.unit_price
FROM
    order_items oi
        JOIN
    sql_inventory.products p ON oi.product_id = p.product_id;


## SELF JOIN

USE sql_hr;

SELECT 
    e.employee_id, 
    e.first_name, 
    m.first_name AS manager_name 
FROM
    employees e
JOIN
    employees m
ON e.reports_to = m.employee_id


## Joining Multiple Tables

USE sql_store;

SELECT 
    o.order_id,
    c.first_name,
    c.last_name,
    o.order_date,
    os.name AS Status
FROM orders o
JOIN customers c
	ON o.customer_id = c.customer_id
JOIN order_statuses os
	ON o.status = os.order_status_id;


## Types of JOIN

- INNER - when we use JOIN
- OUTER
	- 2 types of outer join
		- LEFT - when we use LEFT JOIN or LEFT OUTER JOIN
		- RIGHT - when we use RIGHT JOIN or RIGHT OUTER JOIN



# Giraffe Academy - FreecodeCamp

⭐️ Contents ⭐
⌨️ (0:00) Introduction
⌨️ (2:36) What is a Database?
⌨️ (23:10) Tables & Keys
⌨️ (43:31) SQL Basics
⌨️ (52:26) MySQL Windows Installation
⌨️ (1:01:59) MySQL Mac Installation
⌨️ (1:15:49) Creating Tables
⌨️ (1:31:05) Inserting Data
⌨️ (1:38:17) Constraints 
⌨️ (1:48:11) Update & Delete
⌨️ (1:56:11) Basic Queries
⌨️ (2:08:37) Company Database Intro
⌨️ (2:14:05) Creating Company Database
⌨️ (2:30:27 ) More Basic Queries
⌨️ (2:26:24) Functions
⌨️ (2:45:13) Wildcards
⌨️ (2:53:53) Union
⌨️ (3:01:36) Joins
⌨️ (3:11:49) Nested Queries
⌨️ (3:21:52) On Delete
⌨️ (3:30:05) Triggers
⌨️ (3:42:12) ER Diagrams Intro
⌨️ (3:55:53) Designing an ER Diagram
⌨️ (4:08:34) Converting ER Diagrams to Schemas