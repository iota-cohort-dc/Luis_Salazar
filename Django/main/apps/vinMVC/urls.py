from django.conf.urls import url
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index),
    url(r'^users$',views.show),
    url(r'^new_user$',views.create)
]
