from __future__ import unicode_literals

from django.db import models
import bcrypt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UsersManager(models.Manager):
	def First(self,fname):
		if len(fname) <= 2:
			return(False)
		else: 
			return (True)
	def Last(self,lname):
		if len(lname) <= 2:
			return(False)
		else: 
			return (True)
	def Mail(self,mail):
		if EMAIL_REGEX.match(mail):
			return (True)
		else: 
			return (False)
	def Password(self,password):
		if len(password) <= 7:
			return(False)
		else:
			return(True)
			
	def Passwordconfirm(self,passwordconfirm,password):
		if passwordconfirm != password:
			return(False)
		else:
			return(True)


class Users(models.Model):
	
	first_name = models.CharField(max_length=255)
	last_name = models.CharField(max_length=255)
	email = models.EmailField()
	password = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	objects = UsersManager()


