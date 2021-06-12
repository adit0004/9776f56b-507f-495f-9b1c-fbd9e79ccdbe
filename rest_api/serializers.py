from rest_framework import serializers
from rest_api.models import Author, Book

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('id', 'first_name', 'last_name')

class BookSerializer(serializers.ModelSerializer):
    # Include author details in the book model too, not just the id
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = Book
        fields = ('id', 'name', 'isbn', 'author')