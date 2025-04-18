# from django.shortcuts import render,request

from django.shortcuts import render  # Correct import
from django.http import HttpRequest  # Optional if you need HttpRequest explicitly

# Create your views here.
# this is to render the index.html file (the landing page)
def home(request):
    return render(request,'index.html')

# this function is for rendering the contactus.html file
# we do this because when user clicks the contact us field then it is performing a request and
#  processing the request to provide appropriate responce

def contact_us(request):
    return render(request,'contactUs.html')

def about_us(request):
    return render(request,'aboutUs.html')

# def login_register(request):
#     return render(request,'login_register.html')

def logo(request):
    return render(request,'index.html')

def propertyOwner(request):
    return request(request,'propertyOwner.html')