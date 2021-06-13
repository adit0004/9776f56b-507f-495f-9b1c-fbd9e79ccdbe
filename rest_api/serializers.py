from rest_framework import serializers
from rest_api.models import Author, Book

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('author_id', 'first_name', 'last_name')

class BookSerializer(serializers.ModelSerializer):
    # Include author details in the book model too, not just the id
    class Meta:
        model = Book
        fields = ('book_id', 'name', 'isbn', 'author')
    
    def to_representation(self,instance):
        response = super().to_representation(instance)
        response['author'] = AuthorSerializer(instance.author).data
        return response