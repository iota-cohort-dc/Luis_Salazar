from __future__ import unicode_literals

from django.db import models
from ..login_app.models import Users

# Create your models here.

class Courses(models.Model):
	name = models.CharField(max_length=255)
	description = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

# class Login(models.Model):
# 	course_creator = models.ForeignKey(Users, related_name='allusers' )
# 	created_at = models.DateTimeField(auto_now_add=True)
# 	updated_at = models.DateTimeField(auto_now=True)

class LoginReg(models.Model):
	users = models.ForeignKey(Users, related_name='all_users' )
	course = models.ForeignKey(Courses, related_name='all_courses')
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)