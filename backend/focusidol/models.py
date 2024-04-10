from django.db import models
from dvadmin.utils.models import CoreModel, table_prefix

class Focusidol(CoreModel):
    idolname = models.CharField(max_length=200,verbose_name='偶像姓名', help_text="偶像姓名",blank=True, null=True)
    sex = models.CharField(max_length=200, verbose_name="偶像性别", help_text="偶像性别", blank=True, null=True)
    carrer = models.CharField(max_length=200, verbose_name="偶像类别", help_text="偶像类别", blank=True, null=True)
    fans = models.CharField(max_length=200, verbose_name="微博粉丝数", help_text="微博粉丝数", blank=True, null=True)
    works = models.CharField(max_length=200, verbose_name="作品数量", help_text="作品数量", blank=True, null=True)

class Meta:
        db_table = table_prefix + "focusidol"
        verbose_name = '关注偶像表'
        verbose_name_plural = verbose_name
        ordering = ('-create_datetime',)
