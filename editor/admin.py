from django.contrib import admin

# Register your models here.
from .models import Attribute
from .models import AttributeType
from .models import Entity
from .models import EntityField
from .models import Object
from .models import ObjectAttributeType
from .models import ObjectFieldValue
from .models import Relationship


class AttributeTypeAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "desc"]


class AttributeAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "desc"]


class EntityAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "desc"]


class ObjectAdmin(admin.ModelAdmin):
    list_display = ["id", "id_entity", "name"]


admin.site.register(Attribute, AttributeAdmin)
admin.site.register(AttributeType, AttributeTypeAdmin)
admin.site.register(Entity, EntityAdmin)
admin.site.register(EntityField)
admin.site.register(Object, ObjectAdmin)
admin.site.register(ObjectAttributeType)
admin.site.register(ObjectFieldValue)
admin.site.register(Relationship)
