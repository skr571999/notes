# Tasks

```py
# # ///////////////////////////
# # TO clear the output Screen
# from os import system, name

# def clear():
#     if name == 'nt': # for windows
#         _ = system('cls')
#     else: # for other
#         _ = system('clear')

# clear()

# # ////////////////////////
# # To Compile the Python file expelicitly
# import py_compile
# py_compile.compile("FILE_NAME")

# # //////////////////////////////////
# # Downloading a file using the URL
# # pip install wget
# import wget
# import requests
# key = "52b9d6f2501383361c40eacdf8d7dc68beb19aa584ee8aff2ef1f63cfbca1392"
# url = "https://api.github.com"
# url = "https://api.unsplash.com/photos/random/?client_id=" + key
# res = requests.get(url)
# import pprint
# photo_urls = res.json()["urls"]["regular"]
# pprint.pprint(photo_urls)
# # res = wget.download(photo_urls, "image.png")

# ////////////////////
# # To call all the members of a Object
# import time
# a= dir(time)
# for i in a:
#     if callable(eval("time."+i)):
#         try:
#             print(eval("time."+i+".__call__()"))
#         except:
#             pass
```
