from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User

# Create your models here.


class Poll(models.Model):
    open = models.BooleanField(default=True)
    name = models.CharField(max_length=100)
    info = models.CharField(max_length=200)
    creation_date = models.DateTimeField(editable=False)
    slug = models.SlugField(unique=True)
    embed_url = models.CharField(blank=True, max_length=500)

    class Meta:
        get_latest_by = 'creation_date'
        ordering = ('creation_date',)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        self.creation_date = datetime.now()
        super(Poll, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class Choice(models.Model):
    poll = models.ForeignKey(Poll)
    name = models.CharField(max_length=100)
    votes = models.IntegerField(default=0)
    url = models.CharField(blank=True, max_length=500)

    def __str__(self):
        return self.name


class Voter(models.Model):
    user = models.ForeignKey(User)
    poll = models.ForeignKey(Poll)

    def __str__(self):
        return self.user.username