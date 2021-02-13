---
title: Django
---

## Learning Topics(docs)

- Django Introduction
- Django Template Engine
- Django - Saving Data to DB
- Django - Authentication and Authorization
- Django - Others

## Todo

- Django Projects - https://www.geeksforgeeks.org/python-django-news-app/ - https://www.geeksforgeeks.org/weather-app-using-django-python/
- https://github.com/codingforentrepreneurs/eCommerce
- Book Django for Beginner (2.1)
- docs.djangoproject.com ==> Project
- MDN ==> Project

## Tutorials and Books

- Blog :[https://realpython.com/tutorials/django/](https://realpython.com/tutorials/django/)
- Project Development :[https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/skeleton_website](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/skeleton_website)

- BOOK: [https://djangoforprofessionals.com](https://djangoforprofessionals.com)
- [https://docs.djangoproject.com/en/3.0/](https://docs.djangoproject.com/en/3.0/)

## Django Introduction

### About Django

- It is a Python based free and Open source web framework, which follows the model-template-view(MTV) architectural Pattern. It is maintanined by Django Software Foundation.
- Developed by: Django Software Foundation
- Initial release date: 15 July 2005
- Written in: Python
- Original authors: Adrian Holovaty, Simon Willison

### Features

- Fast Development
- Fully Loaded with Modules
  - Authentication, Session Management, Admin Panel
- Security
  - Use CSRF
- Scalability
  - From 100 to 10 Lakh it can Scale
- Built in Server

### Django Architecture

- **MVT vs MVC**
- M ( Model ) - database logic
- V ( View ) - controller (business logic)
- T ( Template ) - dynamic HTML files(presentation logic)

### Setup

- Django Installation

```py
pip install django            # To install latest version
python -m django --version    # to check the installed version

pip install django=1.11       # To install the specific version
```

- Usage

```py
# Making First Project
django-admin startproject hello
cd hello
python manage.py startapp app1
python manage.py runserver
python manage.py runserver 3000
```

- Visit - [http://localhost:8000](http://localhost:8000)

<!-- $ curl http://localhost:8000/
$ http http://localhost:8000/ -->

### Project Folder Structure

```py
- project
  - app1
  - app2
    - modal
    - view
    - template
```

### Basic Views Examples

- Views
  - A view is a callable which takes a request and returns a response.
  - Types of Views
    - Function Based Views
    - Class Based Views
- Sending Simple Message
- Making Multiple views
- App level Urls File

<!--
```py
def disable_btn_view(req):
  a = ""
  for i in req.POST:
    a = loads(i)["data"]
    print(loads(i))
    print(a)
  b = loads(""" { "result": 0 } """)
  return JsonResponse(b)

req.POST.getlist()
form.is_valid()
form.save()

# ModalForm(req.POST, req.FILES)
```
-->

<!--
Downloading CSV File

# def download_view(req):
#     response = HttpResponse(content_type='text/csv')
#     response['Content-Disposition'] = 'attachment; filename="somefilename.csv"'
#     writer = csv.writer(response)
#     writer.writerow(['Name', 'Email', 'Mobile'])
#     for i in User.objects.all():
#         writer.writerow([
#             i.u_name,
#             i.u_email,
#             i.u_mobile,
#         ])
#     return response

Defining variables in Django template

{% load static %}
{% static "images" as baseUrl %}
{{baseUrl}}/{{ data.img }}
-->

## Django Template Engine

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

### Template Tags

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

### Using Static files inside templates

```py
# settings.py
STATIC_URL = "/static/"
STATICFILES_DIRS = [os.path.join(BASE_DIR,"static")]
```

```html
{% load static %}

<link rel="stylesheet" href="{% static 'main.css' %}" />
```

### Using Redirect

### Getting data from client

- Getting Data using GET and POST methods
- Parameterised URL

### Disabling the CSRF token

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

## Saving Data to DB using Django

- To save data to the Database django used the concept of ORM (Object Relational Mapping)
- ORM - is a technique used to manipulate data of a database using the concept of OOPs.
- Steps to Interect with the Database
  - Create a Model
  - Make the Migrations
  - Migrate the Changes to the Database
  - Perform the Operations
- CRUD Operations
  - C - Create(Insertion) -- POST
  - R - Retrive - Reading(Filtering) -- GET
  - U - Updation -- PUT / PATCH / POST
  - D - Deletion -- DELETE
- CRUD Operation using
  - Shell
  - Admin panel
  - View

### Usage

- Making the Model

```py
# app1/models.py
from django.db import models

class Student(models.Model):
  name = models.CharField(max_length=25)
  rollno = models.IntegerField()
```

- Making Migrations and Migrating

```py
python manage.py makemigrations
python manage.py sqlmigrate polls 0001 # to see the sql of the migration
python manage.py migrate
```

- Open Shell - `python manage.py shell`

### Django Admin Panel

- Creating Super user - `python manage.py createsuperuser`
- Customising the Admin Panel

### Query Methods

```py
create()
save()
get(field=value)
all()
all()[Start : end : step]
  - negative indexing not supported
filter()
filter()[Start : end : step]
  __startswith
  __icontains
  __gt
  __gte
  __lt
  __lte
  __iexact
order_by("field")
order_by("field")[Start : end : step]
  values()
  values('columns')
  count()
exclude()
first()
last()
```

### File Upload

```py
# - Step 1:
# settings.py
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```

```html
<!-- - Step 2: -->
<form method="POST" enctype="multipart/form-data">
  {% csrf_token %}
  <p>
    <input type="file" name="myfile" id="" />
  </p>
  <p>
    <button type="submit">Upload</button>
  </p>
</form>
```

```py
# - Step 3: Code for app1/views.js
from django.core.files.storage import FileSystemStorage

def home_view(req):
  if req.POST:
    uploaded_file = req.FILES["myfile"]
    fs = FileSystemStorage()
    name = fs.save(uploaded_file.name, uploaded_file)
    # fileUrl = fs.url(name)
    return HttpResponse("Got the Image At : " + name)
  return render(req, "index.html")
```

- File Upload Using the Admin Panel
- Saving the Uploaded file path to the Database
  - Using the `FileField` and `ImageField`
- Create a Super User by running the Following Commands
  - Register the Model
- Saving the file path to the Database
- Sending Files Path to the Template
  - Add the following code to the `urls.py` file

```py
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

<!--
- DateTimeModalField
  date = models.DateField(auto_now=True)
  time = models.DateTimeField(auto_now=True)

  # auto_now update date when the object is updated
  # auto_now_add add the date only when the object is created

- Multiple Image Upload
  - `req.FILES.getlist("myimg")`
  - `multiple` in html input tag -->

<!-- ### Table with Custom name

```py
class User(models.Model):
  name = models.CharField(max_length=25)
  class Meta:
    db_table = "this_is_my_user"
```

### Connecting with MySQL

```py
# Setting.py
# pip install mysqlclient
DATABASES = {
  "default": {
    "ENGINE": "django.db.backends.mysql",
    "NAME": "skr",
    "USER": "root",
    "PASSWORD": "root"
  }
}
``` -->

## Authentication and Authorization in Django

- Authentication is the process of verifying the identity of a user.
- Authorization is the process of giving permission to access a page using authentication.
- Authentication is done using Cookies and Session
  - Cookies - is the storage in browser
  - Session - is the storage at server side

### Flash Messages

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

## Modal Form

- Making a form using the Model
- Sending the Form to the Template
- Saving the Data using the Model FOrm

```py
# app1/models.py
class Student(models.Model):
  name = models.CharField(max_length=20)
  rollno = models.IntegerField()

# app1/forms.py
from django import forms
from .models import Student
class StudentForm(forms.ModelForm):
  class Meta:
    model = Student
    fields = ["name", "rollno"]
```

```py
from django.shortcuts import render, redirect
from .form import StudentForm
from .models import Student

def add_student_view(req):
  form = StudentForm()
  if req.method == "POST":
    form = StudentForm(req.POST)
    if form.is_valid():
      form.save()
  return render(req, "newstudent.html", {"form": form})
```

```html
<form action="" method="post">
  {% csrf_token %} {{form.as_p}}
  <p>
    <input type="submit" value="Submit" />
  </p>
</form>
```

- File upload Using model Form

## Generic View

- All the Generic Views are Inherited form the `View` Class
- We can use Generic View in two Ways

  - Directly
  - Sub classing

- Usage
  - Write the following code in `urls.py`

```py
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('about/', TemplateView.as_view(template_name="about.html")),
]
```

- Make a template `templates/about.html` and write the following code in it.

```html
<h1>TemplateView Usage from the URLs file</h1>
```

## Download Data

- Download CSV file
- Download PDF

## Sending Mail

```py
# Sending mail using Gmail Account.
# settings.py
import getpass
passwd = getpass.getpass()
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = "GMAIL_USER_ID@gmail.com"
EMAIL_HOST_PASSWORD = passwd
```

```py
# views.py
from django.core.mail import send_mail
from django.conf import settings
```

- **Allow less secure app**

## Relationship Fields

### Foreign Key

```py
class A:
    b = ForeignKeyField(on_delete=)

class B:
    # --------
```

#### Arguments

- `on_delete`
  - CASCASE
    - when we delete the Object of the A nothing will happen
    - When we delete the Object of the B then it will delete the Object of A whose Foreign key is that Object
  - PROTECTED
    - When we delete the Object of B then it will prompt to first delete all the objects of A which are having ForeignKey this Object
  - [DOCS](https://docs.djangoproject.com/en/3.0/ref/models/fields/#django.db.models.ForeignKey.on_delete)
- `limit_choices_to`

### ManyToManyField

## Other Notes

### Setup Django In Virtual Environment

```bash
cd LocalDirectory

python -m venv venv

venv\Scripts\activate # to activate the Virtual Environment

pip install django
pip install djangorestframework

pip freeze > requirements.txt

md src

django-admin startproject server src

cd src

python manage.py startapp user
```

### Django Fixture

```python
## To get the data
python manage.py dumpdata product.Commodity
## to save the data
python manage.py loaddata product_options.json
```

### Aggregation in Django

```python

from django.db.models import Sum

ItemPrice.objects.aggregate(Sum('price'))
# returns {'price__sum': 1000} for example
```

### Connect two router in Django

```python

from user.urls import router as user_router
from product.urls import router as product_router

class DefaultRouter(routers.DefaultRouter):
    def extend(self, router):
        self.registry.extend(router.registry)

router = DefaultRouter()
router.extend(user_router)
router.extend(product_router)
```

### Python Build Create with Update in already there

```py
bi_markets = []
for item in dbMarkets:
  rows = Market.objects.filter(exchange=item.exchange, market=item.market).update(ask=item.ask, bid=item.bid)
  if rows == 0:
    bi_markets.append(item)

Market.objects.bulk_create(bi_markets)
```

### Django PostgreSQL Configuration

```py
'default': {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': "admin1234",
    'USER': 'admin',
    'PASSWORD': '123456765432',
    'HOST': '123456admin.compute-1.amazonaws.com',
    'PORT': '5432',
}
```

### Serializing Data in Django

```python
from django.core import serializers

json_data = serializers.serialize('json', data)
```
