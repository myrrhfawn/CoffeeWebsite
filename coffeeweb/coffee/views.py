from django.shortcuts import render
from rest_framework import generics
from .serializers import DrinkSerializer, VarietySerializer

from django.http import HttpResponse
from .models import *



class DrinkAPIView(generics.ListAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer

class VarietyAPIView(generics.ListAPIView):
    queryset = Variety.objects.all()
    serializer_class = VarietySerializer


