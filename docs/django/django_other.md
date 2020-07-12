---
title: Django Others
---

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
