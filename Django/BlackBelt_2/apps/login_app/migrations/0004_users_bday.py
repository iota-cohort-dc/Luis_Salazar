# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-29 18:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login_app', '0003_users_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='bday',
            field=models.DateField(default=1),
            preserve_default=False,
        ),
    ]
