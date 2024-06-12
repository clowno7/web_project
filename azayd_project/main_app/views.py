from django.shortcuts import render

# Create your views here.
# main_app/views.py

from django.shortcuts import render



def homepage(request):
    return render(request, 'homepage.html')

def about_us(request):
    return render(request, 'about_us.html')

def service(request):
    return render(request, 'service.html')

def contact_us(request):
    return render(request, 'contact_us.html')

def blog_news(request):
    return render(request, 'blog_news.html')

def careers(request):
    return render(request, 'careers.html')


