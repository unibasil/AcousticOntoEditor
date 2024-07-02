from django.contrib import admin

# Register your models here.
from .models import Attribute
from .models import AttributeType
from .models import Entity
from .models import EntityField
from .models import Relationship

admin.site.register(Attribute)
admin.site.register(AttributeType)
admin.site.register(Entity)
admin.site.register(EntityField)
admin.site.register(Relationship)