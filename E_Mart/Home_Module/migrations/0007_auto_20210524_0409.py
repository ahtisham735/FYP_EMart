# Generated by Django 3.1.7 on 2021-05-23 23:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Home_Module', '0006_auto_20210524_0053'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productreview',
            name='users',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Userreviews', to=settings.AUTH_USER_MODEL),
        ),
    ]
