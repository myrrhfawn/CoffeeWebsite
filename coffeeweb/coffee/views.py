from django.shortcuts import render
from rest_framework import generics
from .serializers import DrinkSerializer, VarietySerializer, ArticleSerializer

from django.http import HttpResponse
from .models import *



class DrinkAPIView(generics.ListAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer

class VarietyAPIView(generics.ListAPIView):
    queryset = Variety.objects.all()
    serializer_class = VarietySerializer

class HandpickedAPIView(generics.ListAPIView):
    queryset = Drink.objects.filter(is_handpicked=True)
    serializer_class = DrinkSerializer

class ArticleAPIView(generics.ListAPIView):
    queryset = Article.objects.filter(is_published=True)
    serializer_class = ArticleSerializer
