# Saving Data to DB in Django

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

## Usage

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

## Django Admin Panel

- Creating Super user - `python manage.py createsuperuser`
- Customising the Admin Panel

## Query Methods

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

## File Upload

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
