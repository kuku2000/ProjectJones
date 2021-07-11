from django.http import HttpResponse
from django.shortcuts import render

name = 'Yo'


def index(request):
    return render(request, 'C:/Users/Kushagra Kandpal/ProjectJones/JonesWebsite/stat/index.html', {
        'name': name
    })
