from django.db.models import fields
from rest_framework import serializers

from .models import Sale, User


class UserSerializer(serializers.HyperlinkedModelSerializer):

    totalSales = serializers.SerializerMethodField('get_total_sales')
    def get_total_sales(self, model):
        return model.total_sales

    class Meta:
        model = User
        fields = ('url', 'username', 'name', 'phone', 'totalSales')


class SaleSerializer(serializers.ModelSerializer):

    unitPrice = serializers.SerializerMethodField('get_unit_price')
    def get_unit_price(self, model):
        return model.unit_price

    class Meta:
        model = Sale
        fields = ('url', 'id', 'user', 'product', 'volume', 'unitPrice', 'date')