# Generated by Django 4.1.2 on 2022-12-30 00:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coffee', '0004_rename_varts_drink_varieties_drink_rating_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='drink',
            name='is_handpicked',
            field=models.BooleanField(default=False),
        ),
    ]
