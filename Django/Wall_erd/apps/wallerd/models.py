from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Users(models.Model):
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=30)
	email = models.EmailField()
	password = models.CharField(max_length=100)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Messages(models.Model):
	message = models.TextField()
	user_id = models.ForeignKey(Users)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Comments(models.Model):
	comment = models.TextField()
	message_id = models.ForeignKey(Messages)
	user_id = models.ForeignKey(Users)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

