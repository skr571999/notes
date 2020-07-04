# Authentication and Authorization

- Authentication is the process of verifying the identity of a user.
- Authorization is the process of giving permission to access a page using authentication.
- Authentication is done using Cookies and Session
  - Cookies - is the storage in browser
  - Session - is the storage at server side

## Flash Messages

```py
# views.py
from django.shortcuts import render
from django.contrib import messages

def home_view(req):
  messages.info(req, "This is a Info Message")
  return render(req ,'index.html')
```

```html
<div>
  {% if messages %} {% for i in messages %}
  <p>{{i}}</p>
  <p>{{i.tags}}</p>
  <p>{{i.level}}</p>
  {% endfor %} {% endif %}
</div>
```

<!-- - Message Levels
  - DEBUG  - 10
  - INFO  - 20
  - SUCCESS - 25
  - WARNING - 30
  - ERROR  - 40 -->

<!-- MESSAGE In Class View -->
<!-- DOCS: https://docs.djangoproject.com/en/2.2/ref/contrib/messages/ -->
