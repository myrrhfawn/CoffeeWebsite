from django.urls import path

from .views import *

urlpatterns = [
    path('test/', index),
    path('api/drinklist/', DrinkAPIView.as_view()),
    path('api/varietylist/', VarietyAPIView.as_view()),
]