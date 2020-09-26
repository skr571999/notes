---
title: Django Modal Fields
---

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
