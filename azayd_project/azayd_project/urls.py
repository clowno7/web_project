"""
URL configuration for azayd_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from main_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('index/', views.index, name='index'),
    path('', views.homepage, name='homepage'),
    path('about/', views.about_us, name='about_us'),
    path('service/', views.service, name='service'),
    path('contact/', views.contact_us, name='contact_us'),
    path('blog/', views.blog_news, name='blog_news'),
    path('careers/', views.careers, name='careers'),
    
]
