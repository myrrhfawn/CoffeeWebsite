# Generated by Django 4.1.2 on 2022-12-21 01:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('coffee', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Varieties',
            new_name='Variety',
        ),
    ]
