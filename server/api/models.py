from django.db import models


class User(models.Model):
    username = models.CharField(max_length=256, primary_key=True)
    name = models.CharField(max_length=256)
    phone = models.CharField(max_length=32)
    totalSales = models.FloatField()


class Sale(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.CharField(max_length=256)
    volume = models.IntegerField()
    unit_price = models.FloatField()
    date = models.DateField()
