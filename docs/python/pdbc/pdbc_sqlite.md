# PDBC Sqlite

```py
import sqlite3 as db

con = db.connect("saturday.db")
cr = con.cursor()

cr.execute(
    """
    CREATE TABLE student (
            name text,
            id integer
        )
    """
)


cr.execute("INSERT INTO student VALUES ('Piyush', 7)")


cr.execute("SELECT * FROM student")
print(cr.fetchall())


con.commit()
con.close()
```

## Sqlite Query

```sql
CREATE TABLE student (
    id integer,
    name text
);
```

<!--
# sqlite-demo

## Download

- Precompiled Binaries for Windows
- [https://sqlite.org/download.html](https://sqlite.org/download.html)

## Usage

```sql
- sqlite3
- .mode column
- .headers on
- .width 15 20
- .exit
- .tables
- .mode line
- .schema
- .schema student
- select type, name, Tbl_name, sql from sqlite_master order by type;
- .show
- .nullvalue 'NULL'
- .prompt 'sqlite3>  ' - change the prompt
- .dump - to output complete database to the screen
- .output ./FILE_LOCATION - to change the location to output the data
- .output stdout - to change back the location of the output to the console
- sqlite3 test.db - to open sqlite data base with the data saving location to test.db
- .read FILE_LOCATION - to read the query from a file
- .mode insert
- .mode html
- .mode list
- .mode tabs
- .mode tcl
- .mode line
- .mode csv
- .separator , - NOT complete
- .mode csv
- .output FILE_LOCATION
- .output stdout
```

## sqlite3 Viewer

- [http://inloop.github.io/sqlite-viewer/](http://inloop.github.io/sqlite-viewer/)

## Usage Python

- Accesssing using key i.e dictonary

```py
    connection.row_factory = sqlite3.Row
    row = curcsor.fetchone()
    print(row.keys{})
```
-->
