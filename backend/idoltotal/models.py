# Create your models here.
# -*- coding:utf-8 -*-

from django.db import models
from dvadmin.utils.models import CoreModel, table_prefix

class Idoltotal(CoreModel):
    # 不用设置id
    idolname = models.CharField(max_length=200, verbose_name="偶像姓名", help_text="偶像姓名", blank=True, null=True)
    works = models.CharField(max_length=200, verbose_name="作品数量", help_text="作品数量", blank=True, null=True)
    fans = models.CharField(max_length=200, verbose_name="微博粉丝数", help_text="微博粉丝数", blank=True, null=True)
    sex = models.CharField(max_length=200, verbose_name="偶像性别", help_text="偶像性别", blank=True, null=True)
    carrer = models.CharField(max_length=200, verbose_name="偶像类别", help_text="偶像类别", blank=True, null=True)
    country = models.CharField(max_length=200, verbose_name="偶像国籍", help_text="偶像国籍", blank=True, null=True)
    jiguan = models.CharField(max_length=200, verbose_name="偶像籍贯", help_text="偶像籍贯", blank=True, null=True)
    birthday = models.CharField(max_length=200, verbose_name="偶像出生年月", help_text="偶像出生年月", blank=True, null=True)
    xingzuo = models.CharField(max_length=200, verbose_name="偶像星座", help_text="偶像星座", blank=True, null=True)
    height = models.CharField(max_length=200, verbose_name="偶像身高", help_text="偶像身高", blank=True, null=True)
    weight = models.CharField(max_length=200, verbose_name="偶像体重", help_text="偶像体重", blank=True, null=True)
    company = models.CharField(max_length=200, verbose_name="偶像公司", help_text="偶像公司", blank=True, null=True)
    school = models.CharField(max_length=200, verbose_name="偶像学校", help_text="偶像学校", blank=True, null=True)
    hobby = models.CharField(max_length=200, verbose_name="偶像爱好", help_text="偶像爱好", blank=True, null=True)
    zongjiao = models.CharField(max_length=200, verbose_name="偶像宗教", help_text="偶像宗教", blank=True, null=True)

class Meta:
        db_table = table_prefix + "idoltotal"
        verbose_name = '爱豆信息表'
        verbose_name_plural = verbose_name
        ordering = ('-create_datetime',)
