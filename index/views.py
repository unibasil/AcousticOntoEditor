from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.urls import base
from owlready2 import *

print(base)

def load_owl(filename):
    pass

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")