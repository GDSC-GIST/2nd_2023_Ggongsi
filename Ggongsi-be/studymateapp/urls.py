from django.urls import path
from . import views

urlpatterns = [
    path('user/<int:studentID>', views.storeAnswer),
    path('findplace/<int:studentID>', views.findPlace),
    path('findmate/<int:studentID>', views.findMate),
    #path('snippets/<int:pk>/', views.snippet_detail),
    path('test/<int:studentID>', views.isIDexist)
]