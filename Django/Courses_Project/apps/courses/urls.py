from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^poop$',views.poop),
    url(r'^delete/(?P<id>\d+)$',views.delete),
    url(r'^no$',views.index),
    url(r'^destroy/(?P<id>\d+)$',views.destroy)
]
