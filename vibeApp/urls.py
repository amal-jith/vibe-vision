from django.urls import path
from . import views


app_name = "vibeApp"


urlpatterns = [
    path('', views.home, name='home'),
    path('corporate-events', views.corporate, name='corporate'),
    path('social-events', views.socialEvents, name='social'),
    path('weddings', views.weddings, name='weddings'),
    path('about-us', views.about, name='about'),
    path('gallery', views.gallery, name='gallery'),
]
