from django.db.models.aggregates import Sum
from django.shortcuts import render
from rest_framework import views, viewsets
from rest_framework.response import Response

from .models import Sale, User
from .serializers import SaleSerializer, UserSerializer


class UserView(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer


class SaleView(viewsets.ModelViewSet):
    queryset=Sale.objects.all()
    serializer_class=SaleSerializer


class BestSellersView(viewsets.ModelViewSet):
    queryset=User.objects.order_by('-total_sales')[:5]
    serializer_class=UserSerializer


class StatsView(views.APIView):
    def get(self, request, format=None):
        total_users = User.objects.count()
        total_sales = User.objects.aggregate(Sum('total_sales'))['total_sales__sum']
        total_products = Sale.objects.aggregate(Sum('volume'))['volume__sum']
        stats = { 'totalUsers': total_users, 'totalSales': total_sales, 'totalProducts': total_products }
        return Response(data=stats)
