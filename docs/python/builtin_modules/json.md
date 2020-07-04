# json

```py
# ///////// json
import json
a = {"name": "John", "age": 31, "Salary": 25000}
b = json.dumps(a) # python to JSON done
print(b)
print(type(b))
c = json.loads(b) # JSON to python object
print(type(c))
print(c)

# - Writing and Reading the JSON Data to the File
import json
num = [1, 2, 3, 4, 5]
filename = "new.json"
with open(filename, "w") as f:
    json.dump(num, f)

with open(filename) as f:
    data = json.load(f)

print(data)
```
