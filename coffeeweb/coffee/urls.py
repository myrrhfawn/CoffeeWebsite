from django.urls import path

from .views import *

urlpatterns = [
    path('api/drinklist/', DrinkAPIView.as_view()),
    path('api/drinklist/handpicked/', HandpickedAPIView.as_view()),
    path('api/varietylist/', VarietyAPIView.as_view()),
    path('api/articlelist/', ArticleAPIView.as_view()),

]