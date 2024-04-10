# -*- coding:utf-8 -*-
from rest_framework import routers
from zywork.views import ZyworkViewSet

zywork_url = routers.SimpleRouter()
zywork_url.register(r'zywork', ZyworkViewSet)
urlpatterns = []
urlpatterns += zywork_url.urls