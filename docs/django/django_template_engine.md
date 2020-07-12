---
title: Django Template Engine
---

- Template Engine are used to generate dynamic HTML pages. Django has a builtin template engine called - Django template language(DTL)
- Using the default Folder inside app
- Using the custom `templates` Folder

```py
TEMPLATES = [
  {
    "DIRS": [os.path.join(BASE_DIR, "templates")],
   }
]
```

- Injecting(Sending) data from view to template

<!-- - Class Based TemplateView

```py
# views.py
from django.views.generic import TemplateView
class HomePageView(TemplateView):
  template_name = 'home.html'

# urls.py
urlpatterns = [
  path('about/', AboutPageView.as_view())
]
``` -->

## Template Tags

- `if-else-endif`
- `for-endfor`
- `include`
- `extends`
- Comments

<!--
{{ forloop.counter }} # starting index 1
{{ forloop.counter0 }} # start index 0
-->

```html
{% comment %}
<p>Multi Line Comments</p>
{% endcomment %} {# Single Line Comment #}
```

- Linking Multiple Pages

<!--
- Using URL
- using `name`
```html
{% url 'APP_NAME:NAME_IN_URL.py' %}
```
-->

## Using Static files inside templates

```py
# settings.py
STATIC_URL = "/static/"
STATICFILES_DIRS = [os.path.join(BASE_DIR,"static")]
```

```html
{% load static %}

<link rel="stylesheet" href="{% static 'main.css' %}" />
```

## Using Redirect

## Getting data from client

- Getting Data using GET and POST methods
- Parameterised URL

## Disableing the CSRF token

- Method Level

```py
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def my_view(request):
  #body
```

- Class Level

```py
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorators

@method_decorator(csrf_exempt, name="dispatch")
class EmployeeListCBV(View):
  #body
# here 'dispatch' will disable csrf_token for all type of the request
# if we want to disable for a particular method then replace 'dispatch' by that like 'post'
```

- Project Level
  - remove the csrf_token MIDDLEWARE from the settings.py
