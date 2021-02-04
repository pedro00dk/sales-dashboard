from django import urls
from django.urls import include, path
from rest_framework import routers

from .views import BestSellersView, SaleView, StatsView, UserView

router = routers.DefaultRouter()
router.register('users', UserView)
router.register('best_sellers', BestSellersView)
router.register('sales', SaleView)

urlpatterns = [
    path('', include(router.urls)),
    path('stats/', StatsView.as_view()),
]
