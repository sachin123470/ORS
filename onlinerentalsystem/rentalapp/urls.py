from django.urls import path
from . import views

# urlpatterns =[
#     path('',views.home,name='index'),
#     path('/contact',views.contact_us,name='contactUs'),

# ]

urlpatterns = [
    path('', views.home, name='index'),
    path('contact/', views.contact_us, name='contact_us'),  # Fixed path and naming convention
    path('aboutUs/',views.about_us,name='about_us'),
    # path('login_register/',views.login_register,name='login_register')
    path('logo/',views.logo,name='logo'),
    path('propertOwner/',views.propertyOwner, name='propertyOwner')
]
