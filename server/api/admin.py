from django.contrib import admin

from .models import Sale, User

admin.site.register((User, Sale))
