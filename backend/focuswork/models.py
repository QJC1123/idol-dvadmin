# Create your models here.
# -*- coding:utf-8 -*-

from django.db import models
from dvadmin.utils.models import CoreModel, table_prefix

class Focuswork(CoreModel):
    # 不用设置id
    workname = models.CharField(max_length=200, verbose_name="关注作品名称", help_text="关注作品名称", blank=True, null=True)
    idolname = models.CharField(max_length=200, verbose_name="偶像姓名", help_text="偶像姓名", blank=True, null=True)
    worktype = models.CharField(max_length=200, verbose_name="作品类型", help_text="作品类型", blank=True, null=True)
    score = models.CharField(max_length=200, verbose_name="评分", help_text="评分", blank=True, null=True)

    class Meta:
        db_table = table_prefix + "focuswork"
        verbose_name = '关注作品表'
        verbose_name_plural = verbose_name
        ordering = ('-create_datetime',)