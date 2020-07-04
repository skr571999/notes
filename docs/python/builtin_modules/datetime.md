# datetime

```py
# /////// datetime
import datetime

print(datetime.datetime.now())
print(datetime.date.today())
print(datetime.date(2019, 12, 27))
print(datetime.date.fromtimestamp(1326212121))
print(datetime.date.today().month)
print(datetime.date.today().day)
print(datetime.date.today().year)
```

<!--
- datetime : module
	- date
	  class date(year, month, day)
		- year
		- month
		- day
		- max
		- min
		- weekday()
		- today()
		- replace()
		- isocalendar()
			- Return a 3-tuple containing ISO year, week number, and weekday
		- date.isoformat()
			- string in ISO 8601 format, YYYY-MM-DD.
		- date.isoweekday()
			- Return the day of the week represented by the date.
    			- Monday == 1 ... Sunday == 7
	- time
	   class time(hour, minute, second, microsecond) * all arguments are optional
		    hour : 0-23
	 	    minute : 0-59
		    second : 0-59
		     microsecond : 0..999999
		- hour
		- isoformat()
			Return string in ISO 8601 format, [HH[:MM[:SS[.mmm[uuu]]]]][+HH:MM].
		- min
		- max
		- microsecond
		- minute
		- replace()
		- second
	- datetime
	  class(year, month, day, *hour, *minute, *second, *microsecond)
		- date()
		- day
		- hour
		- isocalendar()
		- isoformat()
		- isoweekday()
		- max
		- min
		- microsecond
		- minute
		- month
		- replace
		- second
		- now()
		- time()
		- today()
		- now() vs today()
		- weekday()
		- year
		- strftime(format)

	- formats
	%a	Weekday, short version	Wed
	%A	Weekday, full version	Wednesday
	%w	Weekday as a number 0-6, 0 is Sunday	3
	%d	Day of month 01-31	31
	https://www.w3schools.com/python/python_datetime.asp
-->
