from django.db import models
from django.utils.functional import cached_property

entities = []
attributes = []
attribute_types = []
relationships = []
objects = []
entity_fields = []
object_field_values = []


# Create your models here.
# Сущности
class Entity(models.Model):
    def _str_(self):
        return self.name
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    desc = models.TextField(blank=True, default='')


# Отнощения между сущностями
class Relationship(models.Model):
    id = models.AutoField(primary_key=True)
    id_child = models.ForeignKey(Entity, on_delete=models.SET_NULL, null=True, related_name='+')
    id_parent = models.ForeignKey(Entity, on_delete=models.SET_NULL, null=True, related_name='+')


# Типы атрибутов
class AttributeType(models.Model):
    def _str_(self):
        return self.name
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    desc = models.TextField()


# Атрибуты
class Attribute(models.Model):
    def _str_(self):
        return self.name
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    id_type = models.ForeignKey(AttributeType, on_delete=models.CASCADE)
    desc = models.TextField()


# Поля сущностей
class EntityField(models.Model):
    id = models.AutoField(primary_key=True)
    id_entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
    id_attribute = models.ForeignKey(Attribute, on_delete=models.CASCADE)


# Типы объектных атрибутов (привязка сущности к атрибуту пипа "Объект", который может выступать в роли поля в сушности)
class ObjectAttributeType(models.Model):
    id = models.AutoField(primary_key=True)
    id_attribute = models.ForeignKey(Attribute, on_delete=models.CASCADE)
    id_entity = models.ForeignKey(Entity, on_delete=models.CASCADE)


# Экземпляры сущностей (объекты)
class Object(models.Model):
    id = models.AutoField(primary_key=True)
    id_entity = models.ForeignKey(Entity, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)


# Значение поля экземпляра
class ObjectFieldValue(models.Model):
    id = models.AutoField(primary_key=True)
    id_object = models.ForeignKey(Object, on_delete=models.CASCADE)
    id_field = models.ForeignKey(EntityField, on_delete=models.CASCADE)
    value = models.TextField()
