# Generated by Django 3.1.7 on 2021-05-26 00:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home_Module', '0007_auto_20210524_0409'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productreview',
            name='rate',
            field=models.IntegerField(default=1),
        ),
    ]
