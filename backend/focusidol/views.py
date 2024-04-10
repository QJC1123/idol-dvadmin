# Create your views here.

from focusidol.models import Focusidol
from dvadmin.utils.serializers import CustomModelSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class FocusidolSerializer(CustomModelSerializer):
    """
    关注偶像列表-序列化器
    """
    class Meta:
        model = Focusidol
        fields = "__all__"
        read_only_fields = ["id"]


class FocusidolCreateUpdateSerializer(CustomModelSerializer):
    """
    关注偶像列表管理 创建/更新时的列化器
    """
    class Meta:
        model = Focusidol
        fields = '__all__'
class FocusidolViewSet(CustomModelViewSet):
    """
    关注偶像列表管理接口
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = Focusidol.objects.all()
    serializer_class = FocusidolSerializer
    extra_filter_backends = []
    permission_classes = []
    search_fields = ['label']

