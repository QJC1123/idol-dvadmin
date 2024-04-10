# -*- coding:utf-8 -*-
from rest_framework import routers
from tvwork.views import TvworkViewSet

tvwork_url = routers.SimpleRouter()
tvwork_url.register(r'tvwork', TvworkViewSet)
urlpatterns = []
urlpatterns += tvwork_url.urls