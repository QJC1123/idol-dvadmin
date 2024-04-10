#from django.shortcuts import render
# -*- coding:utf-8 -*-

# Create your views here.
from tvwork.models import Tvwork
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class TvworkSerializer(CustomModelSerializer):
    """
    影视作品搜索-序列化器
    """
    class Meta:
        model = Tvwork
        fields = "__all__"
        read_only_fields = ["id"]


class TvworkCreateUpdateSerializer(CustomModelSerializer):
    """
    影视作品管理 创建/更新时的列化器
    """
    class Meta:
        model = Tvwork
        fields = '__all__'
class TvworkViewSet(CustomModelViewSet):
    """
    影视作品搜索管理接口
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = Tvwork.objects.all()
    serializer_class = TvworkSerializer
    extra_filter_backends = []
    permission_classes = []
    search_fields = ['label']
