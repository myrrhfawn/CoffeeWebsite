from django.db import models

# Create your models here.
class Drink(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField()
    review = models.IntegerField(default=0)
    rating = models.FloatField(default=0)
    image = models.ImageField(upload_to="photo/drinks/")
    is_available = models.BooleanField(default=True)
    is_handpicked = models.BooleanField(default=False)
    varieties = models.ManyToManyField('Variety')

    def __str__(self):
        return self.title

class Variety(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="photo/varts/")
    description = models.TextField()

    def __str__(self):
        return self.title

class Article(models.Model):
    title = models.CharField(max_length=200)
    image = image = models.ImageField(upload_to="photo/posts/")
    text = models.TextField()
    time_create = models.DateTimeField(auto_now_add=True)
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return self.title