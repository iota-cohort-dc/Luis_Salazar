from __future__ import unicode_literals

from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class EmailManager(models.Manager):
	def validate(self,email):
		if EMAIL_REGEX.match(email):
			email = Email.objects.create(email = email )
			return (True,email)
			print "True"
		else: 
			return (False)
			print "False"

class Email(models.Model):
	email = models.EmailField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	objects = EmailManager()
