from django.db import models

# Create your models here.

from django.db import models
from dvadmin.utils.models import CoreModel, table_prefix

class Music(CoreModel):
    idolname = models.CharField(max_length=100,blank=True,null=True)
    workname = models.CharField(max_length=100,blank=True,null=True)
    score = models.CharField(max_length=100,blank=True,null=True)
    score_people = models.CharField(max_length=100,blank=True,null=True)
    img_url = models.CharField(max_length=100,blank=True,null=True)
    img_save = models.CharField(max_length=100,blank=True,null=True)
    work_src = models.CharField(max_length=100,blank=True,null=True)
    type = models.CharField(max_length=100,blank=True,null=True)
    jiezhi = models.CharField(max_length=100,blank=True,null=True)
    time = models.CharField(max_length=100,blank=True,null=True)
    publish = models.CharField(max_length=100,blank=True,null=True)
    style = models.CharField(max_length=100,blank=True,null=True)
    num = models.CharField(max_length=100,blank=True,null=True)
    name = models.CharField(max_length=100,blank=True,null=True)
    txm = models.CharField(max_length=100,blank=True,null=True)

    class Meta:
        db_table = table_prefix + "music"
        verbose_name = '音乐作品表'
        verbose_name_plural = verbose_name
        ordering = ('-create_datetime',)