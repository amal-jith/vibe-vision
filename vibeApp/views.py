from django.shortcuts import render

# Create your views here.
def home(request):

    return render(request, "home.html", )

def corporate(request):
    return render(request, "corporate.html")


def socialEvents(request):
    return render(request, "social-events.html")


def weddings(request):
    return render(request, "weddings.html")

def about(request):
    return render(request, "about.html")


def gallery(request):
    return render(request, "gallery.html")
