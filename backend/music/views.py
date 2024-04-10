from django.shortcuts import render

# Create your views here.


# Create your views here.

from music.models import Music
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class MusicSerializer(CustomModelSerializer):
    """
    音乐作品搜索-序列化器
    """
    class Meta:
        model = Music
        fields = "__all__"
        read_only_fields = ["id"]


class MusicCreateUpdateSerializer(CustomModelSerializer):
    """
    音乐作品搜索管理 创建/更新时的列化器
    """
    class Meta:
        model = Music
        fields = '__all__'
class MusicViewSet(CustomModelViewSet):
    """
    音乐作品搜索管理接口
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = Music.objects.all()
    serializer_class = MusicSerializer
    extra_filter_backends = []
    permission_classes = []
    search_fields = ['label']

