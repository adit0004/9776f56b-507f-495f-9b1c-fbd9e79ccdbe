from django.db import models

# Create your models here.

class Author(models.Model):
    author_id = models.BigAutoField(primary_key=True)
    first_name = models.TextField()
    last_name = models.TextField()

class Book(models.Model):
    book_id = models.BigAutoField(primary_key=True)
    name = models.TextField()
    isbn = models.TextField()
    # Nullifies author on delete author
    author = models.ForeignKey(Author,on_delete=models.SET_NULL, null=True)