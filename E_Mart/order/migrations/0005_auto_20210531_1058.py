# Generated by Django 3.1.7 on 2021-05-31 05:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0004_auto_20210519_1957'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='is_paid',
            new_name='is_shipped',
        ),
        migrations.AddField(
            model_name='orderdetails',
            name='is_shipped',
            field=models.BooleanField(default=False, verbose_name='shppied'),
        ),
    ]
