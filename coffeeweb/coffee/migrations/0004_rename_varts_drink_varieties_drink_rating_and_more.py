# Generated by Django 4.1.2 on 2022-12-30 00:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coffee', '0003_variety_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='drink',
            old_name='varts',
            new_name='varieties',
        ),
        migrations.AddField(
            model_name='drink',
            name='rating',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='drink',
            name='review',
            field=models.IntegerField(default=0),
        ),
    ]
