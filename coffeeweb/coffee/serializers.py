from rest_framework import serializers
from .models import *

class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ('title', 'description', 'price',
                  'image', 'is_available', 'rating',
                  'review', 'is_handpicked', 'varieties')

class VarietySerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ('title', 'image', 'description')

