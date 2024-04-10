# Create your models here.
# -*- coding:utf-8 -*-

from django.db import models
from dvadmin.utils.models import CoreModel, table_prefix


class Zywork(CoreModel):
    # 不用设置id
    idolname = models.CharField(max_length=200, verbose_name="偶像姓名", help_text="偶像姓名", blank=True, null=True)
    workname = models.CharField(max_length=200, verbose_name="影视作品名称", help_text="影视作品名称", blank=True, null=True)
    workyear = models.CharField(max_length=200, verbose_name="年份", help_text="年份", blank=True, null=True)
    sy = models.CharField(max_length=200, verbose_name="是否已上映", help_text="是否已上映", blank=True, null=True)
    idol_role = models.CharField(max_length=200, verbose_name="饰演角色", help_text="饰演角色", blank=True, null=True)
    director = models.CharField(max_length=200, verbose_name="导演", help_text="导演", blank=True, null=True)
    actor = models.CharField(max_length=200, verbose_name="主演", help_text="主演", blank=True, null=True)
    score = models.CharField(max_length=200, verbose_name="评分", help_text="评分", blank=True, null=True)
    score_people = models.CharField(max_length=200, verbose_name="评价总人数", help_text="评价总人数", blank=True, null=True)

    class Meta:
        db_table = table_prefix + "zywork"
        verbose_name = '综艺节目表'
        verbose_name_plural = verbose_name
        ordering = ('-create_datetime',)