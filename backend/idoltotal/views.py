#from django.shortcuts import render
# -*- coding:utf-8 -*-

# Create your views here.
from idoltotal.models import Idoltotal
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class IdoltotalSerializer(CustomModelSerializer):
    """
    爱豆信息表-序列化器
    """
    class Meta:
        model = Idoltotal
        fields = "__all__"
        read_only_fields = ["id"]


class IdoltotalCreateUpdateSerializer(CustomModelSerializer):
    """
    爱豆信息表管理 创建/更新时的列化器
    """
    class Meta:
        model = Idoltotal
        fields = '__all__'
class IdoltotalViewSet(CustomModelViewSet):
    """
    爱豆信息表管理接口
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = Idoltotal.objects.all()
    serializer_class = IdoltotalSerializer
    extra_filter_backends = []
    permission_classes = []
    search_fields = ['label']



