# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-14 00:34
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='poll',
            options={'get_latest_by': 'creation_date', 'ordering': ('creation_date',)},
        ),
    ]
