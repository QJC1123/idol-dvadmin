# -*- coding:utf-8 -*-

from rest_framework import routers
from idoltotal.views import IdoltotalViewSet

idoltotal_url = routers.SimpleRouter()
idoltotal_url.register(r'idoltotal', IdoltotalViewSet)
urlpatterns = []
urlpatterns += idoltotal_url.urls
