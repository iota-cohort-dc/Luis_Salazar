from __future__ import unicode_literals

from django.db import models
from ..login_app.models import Users


# Create your models here.
class Books(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    # isRecent = models.BooleanField(default=False)

class Authors(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    books = models.ManyToManyField(Books, related_name="authors")

class Reviews(models.Model):
    content = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    rating = models.IntegerField(default=0)
    user = models.ForeignKey(Users, related_name="posted_reviews")
    book = models.ForeignKey(Books, related_name="book_reviews")

# 14) "teams": Team.objects.annotate(num_players=Count('all_players')).filter(num_players__gte='12'),
