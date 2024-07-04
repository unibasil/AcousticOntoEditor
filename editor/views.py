from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render, redirect
from django.core import serializers
from django.views import generic

# Create your views here.

from .models import (Attribute,
                     AttributeType,
                     Entity,
                     EntityField,
                     Relationship,
                     Object,
                     ObjectFieldValue,
                     ObjectAttributeType)


def index(request):
    # if not request.user.is_authenticated:
    #     return redirect(f"{settings.LOGIN_URL}?next={request.path}")
    context = {
        "attributes": Attribute.objects.all(),
        "attributetypes": AttributeType.objects.all(),
        "entities": Entity.objects.all(),
        "entityfields": EntityField.objects.all(),
        "relationships": Relationship.objects.all(),
        "objects": Object.objects.all(),
        "objectfields": ObjectFieldValue.objects.all(),
        "objectattributetype": ObjectAttributeType.objects.all(),
    }
    return render(request, 'editor/context.html', context=context)


# ---------------
# Типы атрибутов
# ---------------
def get_attribute_type(request, pk):
    json = serializers.serialize('json', [get_object_or_404(AttributeType, pk=pk), ])
    return HttpResponse(content=json, content_type="application/json")


def get_attribute_types(request):
    json = serializers.serialize('json', AttributeType.objects.all())
    return HttpResponse(content=json, content_type="application/json")


# ---------
# Атрибуты
# ---------
def get_attribute(request, pk):
    json = serializers.serialize('json', [get_object_or_404(Attribute, pk=pk), ])
    return HttpResponse(content=json, content_type="application/json")


def get_attributes(request):
    json = serializers.serialize('json', Attribute.objects.all())
    return HttpResponse(content=json, content_type="application/json")


# ---------
# Сущности
# ---------
def get_entity(request, pk):
    obj = get_object_or_404(Entity, pk=pk)
    json = serializers.serialize('json', [obj, ])
    return HttpResponse(content=json, content_type="application/json")


def get_entities(request):
    json = serializers.serialize('json', Entity.objects.all())
    return HttpResponse(content=json, content_type="application/json")


# ---------
# Сущности
# ---------
def get_object(request, pk):
    json = serializers.serialize('json', [get_object_or_404(Object, pk=pk), ])
    return HttpResponse(content=json, content_type="application/json")


def get_objects(request):
    json = serializers.serialize('json', Object.objects.all())
    return HttpResponse(content=json, content_type="application/json")
