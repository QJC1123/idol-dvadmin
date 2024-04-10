# -*- coding:utf-8 -*-
from rest_framework import routers
from focuswork.views import FocusworkViewSet

focuswork_url = routers.SimpleRouter()
focuswork_url.register(r'focuswork', FocusworkViewSet)
urlpatterns = []
urlpatterns += focuswork_url.urls