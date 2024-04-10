from rest_framework import routers
from focusidol.views import FocusidolViewSet

focusidol_url = routers.SimpleRouter()
focusidol_url.register(r'focusidol', FocusidolViewSet)
urlpatterns = []
urlpatterns += focusidol_url.urls
