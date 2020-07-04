# Unit 12

## Python Database Connectivity

- PDBC(Python Database Connectivity)
- Type of Storage
  - Temporary Storage
    - PVM(Python virtual machine) Memory area
  - Permanent Storage
    - File System
    - Database
- Types of Data
  - Text Data - name, marks
  - Binary Data - Images, Videos, Audio files
- Limitations of File System
  - Huge Data
  - No Query Language Support
  - Security
  - No mechanism to prevent duplicate data so, data inconsistency, etc
- Advantages of Database
  - Store Huge data
  - Query Language support
  - Security is more
  - data stored in form the tables
  - rules to prevent duplication

<!--
- Limitations of Database
  - cannot hold huge amount of the data like tera bytes
  - can store only structured data not the unstructured data
- Advanced data storage technologies
  - Hadoop
  - Big Data
-->

### Steps to communicate with the Database

```py
# pip install mysql-connector-python
import mysql.connector as db # importing the connector

# Establishing the Connection
con = db.connect(
  host="localhost",
  user="root",
  passwd="root",
  database="skr")

# Making the Cursor
cr = con.cursor()

# Execute the SQL Query
cr.execute()
cr.executemany()

# Fetch the results
cr.fetchone() # To fetch only one row
cr.fetchall() # To fetch all rows
cr.fetchmany(n) # To fetch n rows

con.commit() # the changes and rollback() the changes

# Close the connection
con.close()
```
