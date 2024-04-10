#from django.shortcuts import render
# -*- coding:utf-8 -*-

# Create your views here.
from zywork.models import Zywork
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class ZyworkSerializer(CustomModelSerializer):
    """
    综艺节目搜索-序列化器
    """
    class Meta:
        model = Zywork
        fields = "__all__"
        read_only_fields = ["id"]


class ZyworkCreateUpdateSerializer(CustomModelSerializer):
    """
    综艺节目管理 创建/更新时的列化器
    """
    class Meta:
        model = Zywork
        fields = '__all__'
class ZyworkViewSet(CustomModelViewSet):
    """
    综艺节目搜索管理接口
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = Zywork.objects.all()
    serializer_class = ZyworkSerializer
    extra_filter_backends = []
    permission_classes = []
    search_fields = ['label']
