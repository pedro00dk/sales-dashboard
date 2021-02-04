from django.db import models


class User(models.Model):
    username = models.CharField(max_length=256, primary_key=True)
    name = models.CharField(max_length=256)
    phone = models.CharField(max_length=32)
    total_sales = models.FloatField()

    def __str__(self):
        return f'{type(self).__name__} ({self.username}, {self.total_sales})'


class Sale(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.CharField(max_length=256)
    volume = models.IntegerField()
    unit_price = models.FloatField()
    date = models.DateField()

    def __str__(self):
        return f'{type(self).__name__} [{self.user.username}] ({self.product}, {self.date})'

    def save(self, *args, **kwargs):
        self.user.total_sales += self.unit_price * self.volume
        super(Sale, self).save(*args, **kwargs)
        self.user.save()
