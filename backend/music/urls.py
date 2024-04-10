from rest_framework import routers
from music.views import MusicViewSet

music_url = routers.SimpleRouter()
music_url.register(r'music', MusicViewSet)
urlpatterns = []
urlpatterns += music_url.urls
