from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index,name='index'),
    url(r'^poop$',views.poop,name='create'),
    url(r'^delete/(?P<id>\d+)$',views.delete, name='delete'),
    url(r'^no$',views.index,name='index'),
    url(r'^destroy/(?P<id>\d+)$',views.destroy, name='destroy'),
    url(r'^choose$',views.choose,name='choose'),
    url(r'^addreal$',views.addreal,name='addreal'),

]
