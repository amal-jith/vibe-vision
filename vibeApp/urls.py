from django.urls import path
from . import views


app_name = "vibeApp"


urlpatterns = [
    path('', views.home, name='home'),
]
