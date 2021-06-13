from django.urls import path
from rest_api import views

urlpatterns = [
    path('books/', views.get_books),
    path('book/<int:pk>/', views.book),
    path('book/', views.post_book),
    path('authors/', views.get_authors),
    path('author/<int:pk>/', views.author),
    path('author/', views.post_author),
]