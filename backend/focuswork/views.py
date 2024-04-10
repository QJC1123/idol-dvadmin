#from django.shortcuts import render
# -*- coding:utf-8 -*-
# Create your views here.
from focuswork.models import Focuswork
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class FocusworkSerializer(CustomModelSerializer):
    """
    关注作品搜索-序列化器
    """
    class Meta:
        model = Focuswork
        fields = "__all__"
        read_only_fields = ["id"]


class FocusworkCreateUpdateSerializer(CustomModelSerializer):
    """
    关注作品管理 创建/更新时的列化器
    """
    class Meta:
        model = Focuswork
        fields = '__all__'
class FocusworkViewSet(CustomModelViewSet):
    """
    关注作品搜索管理接口
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = Focuswork.objects.all()
    serializer_class = FocusworkSerializer
    extra_filter_backends = []
    permission_classes = []
    search_fields = ['label']