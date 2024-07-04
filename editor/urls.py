
from django.urls import path

from . import views

app_name = 'editor'
urlpatterns = [
    path("", views.index, name="index"),

    path("attribute-types/", views.get_attribute_types, name="attribute-types"),
    path("attribute-type/<int:pk>/", views.get_attribute_type, name="attribute-type"),

    path("attributes/", views.get_attributes, name="attributes"),
    path("attribute/<int:pk>/", views.get_attribute, name="attribute"),

    path("entitys/", views.get_entities, name="entities"),
    path("entity/<int:pk>/", views.get_entity, name="entity"),

    path("objects/", views.get_objects, name="objects"),
    path("object/<int:pk>/", views.get_object, name="object"),

]
