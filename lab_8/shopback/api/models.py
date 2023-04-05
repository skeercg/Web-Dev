from django.db import models
from django.core import serializers
from django.utils import timezone
import json

class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        data = {
            'id': self.id,
            'name': self.name,
        }
        return json.dumps(data)

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)

    def to_json(self):
        data = {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }
        return json.dumps(data)
