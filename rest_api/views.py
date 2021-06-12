from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from rest_api.models import Author,Book
from rest_api.serializers import AuthorSerializer,BookSerializer

@api_view(['GET'])
def get_books(request):
    # GET all books
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

# GET, POST, PUT a book
@api_view(['GET', 'POST', 'PUT'])
def book(request, pk):
    # GET book details
    if request.method == 'GET':
        try:
            book = Book.objects.get(pk=pk)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = BookSerializer(book)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        pass
    elif request.method == 'PUT':
        pass

# GET all authors
@api_view(['GET'])
def get_authors(request):
    if request.method == 'GET':
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many=True)
        return Response(serializer.data)

# GET, POST, PUT an author
@api_view(['GET', 'POST', 'PUT'])
def author(request, pk):
    if request.method == 'GET':
        try:
            author = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            author = {}
        serializer = AuthorSerializer(author)
        return Response(serializer.data)
    elif request.method == 'POST':
        pass
    elif request.method == 'PUT':
        pass