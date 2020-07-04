# Django Introduction

## About Django

- It is a Python based free and Open source web framework, which follows the model-template-view(MTV) architectural Pattern. It is maintanined by Django Software Foundation.
- Developed by: Django Software Foundation
- Initial release date: 15 July 2005
- Written in: Python
- Original authors: Adrian Holovaty, Simon Willison

## Features

- Fast Development
- Fully Loaded with Modules
  - Authentication, Session Management, Admin Panel
- Security
  - Use CSRF
- Scalability
  - From 100 to 10 Lakh it can Scale
- Built in Server

## Django Architecture

- **MVT vs MVC**
- M ( Model ) - database logic
- V ( View ) - controller (business logic)
- T ( Template ) - dynamic HTML files(presentation logic)

## Setup

- Django Installation

```py
pip install django            # To install latest version
python -m django --version    # to check the installed version

pip install django=1.11       # To install the specific version
```

- Usage

```py
## Making First Project
django-admin startproject hello
cd hello
python manage.py startapp app1
python manage.py runserver
python manage.py runserver 3000
```

- Visit - [http://localhost:8000](http://localhost:8000)

<!-- $ curl http://localhost:8000/
$ http http://localhost:8000/ -->

## Project Folder Structure

```py
- project
  - app1
  - app2
    - modal
    - view
    - template
```

## Basic Views Examples

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
