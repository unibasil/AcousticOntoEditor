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
    my_range = ["Classes", "Objects", "Attributes", "Attribute Types", "Relationships",]
    context = {
        "attributes": Attribute.objects.order_by('name').all(),
        "attributetypes": AttributeType.objects.order_by('name').all(),
        "entities": Entity.objects.order_by('name').all(),
        "entityfields": EntityField.objects.all(),
        "relationships": Relationship.objects.all(),
        "objects": Object.objects.order_by('name').all(),
        "objectfields": ObjectFieldValue.objects.all(),
        "objectattributetype": ObjectAttributeType.objects.all(),
        "myRange": my_range,
    }
    return render(request, 'editor/index.html', context=context)


def test(request):
    return render(request, 'editor/test.html')

# ---------------
# Типы атрибутов
# ---------------
def get_attribute_type(request, pk):
    json = serializers.serialize('json', [get_object_or_404(AttributeType, pk=pk), ])
    return HttpResponse(content=json, content_type="application/json")


def get_attribute_types(request):
    json = serializers.serialize('json', AttributeType.objects.order_by('name').all())
    return HttpResponse(content=json, content_type="application/json")


# ---------
# Атрибуты
# ---------
def get_attribute(request, pk):
    json = serializers.serialize('json', [get_object_or_404(Attribute, pk=pk), ])
    return HttpResponse(content=json, content_type="application/json")


def get_attributes(request):
    json = serializers.serialize('json', Attribute.objects.order_by('name').all())
    return HttpResponse(content=json, content_type="application/json")


# ---------
# Сущности
# ---------
def get_entity(request, pk):
    obj = get_object_or_404(Entity, pk=pk)
    json = serializers.serialize('json', [obj, ])
    return HttpResponse(content=json, content_type="application/json")


def get_entities(request):
    json = serializers.serialize('json', Entity.objects.order_by('name').all())
    return HttpResponse(content=json, content_type="application/json")


# --------------
# Поля сущностей
# --------------
def get_entity_field(request, pk):
    obj = get_object_or_404(EntityField, pk=pk)
    json = serializers.serialize('json', [obj, ])
    return HttpResponse(content=json, content_type="application/json")


def get_entity_fields(request):
    json = serializers.serialize('json', EntityField.objects.all())
    return HttpResponse(content=json, content_type="application/json")


# ----------
# Экземпляры
# ----------
def get_object(request, pk):
    obj = get_object_or_404(Object, pk=pk)
    json = serializers.serialize('json', [obj, ])
    return HttpResponse(content=json, content_type="application/json")


def get_objects(request):
    json = serializers.serialize('json', Object.objects.order_by('name').all())
    return HttpResponse(content=json, content_type="application/json")


# --------------------------
# Значения полей экземпляров
# --------------------------
def get_object_field_value(request, pk):
    obj = get_object_or_404(ObjectFieldValue, pk=pk)
    json = serializers.serialize('json', [obj, ])
    return HttpResponse(content=json, content_type="application/json")


def get_object_field_values(request):
    json = serializers.serialize('json', ObjectFieldValue.objects.all())
    return HttpResponse(content=json, content_type="application/json")
