
from django.urls import path

from . import views

app_name = 'editor'
urlpatterns = [
    path("", views.index, name="index"),
    path("test", views.test, name="test"),

    path("attribute-types/", views.get_attribute_types, name="attribute-types"),
    path("attribute-type/<int:pk>/", views.get_attribute_type, name="attribute-type"),

    path("attributes/", views.get_attributes, name="attributes"),
    path("attribute/<int:pk>/", views.get_attribute, name="attribute"),

    path("entities/", views.get_entities, name="entities"),
    path("entity/<int:pk>/", views.get_entity, name="entity"),

    path("entity-fields/", views.get_entity_fields, name="entity-fields"),
    path("entity-field/<int:pk>/", views.get_entity_field, name="entity-field"),

    path("objects/", views.get_objects, name="objects"),
    path("object/<int:pk>/", views.get_object, name="object"),

    path("object-field-values/", views.get_object_field_values, name="object-field-values"),
    path("object-field-value/<int:pk>/", views.get_object_field_value, name="object-field-value"),

]
