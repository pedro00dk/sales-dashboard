from django import urls
from django.urls import include, path
from rest_framework import routers

from .views import SaleView, UserView

router = routers.DefaultRouter()
router.register('users', UserView)
router.register('sales', SaleView)

urlpatterns = [
    path('', include(router.urls))
]
