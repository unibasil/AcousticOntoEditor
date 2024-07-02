from django.db import models
# Create your models here.


# Сущности
class Entity(models.Model):
    def _str_(self):
        return self.name
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    desc = models.TextField(null=True, blank=True)


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

