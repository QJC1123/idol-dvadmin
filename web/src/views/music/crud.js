import { request } from '@/api/service'
import { BUTTON_STATUS_NUMBER } from '@/config/button'
import { urlPrefix as musicPrefix } from './api'


export const crudOptions = (vm) => {
  return {
	// pagination: false,
    pageOptions: {
      compact: true
    },
    options: {
      tableType: 'vxe-table',
      rowKey: true, // 必须设置，true or false
      rowId: 'id',
      height: '100%', // 表格高度100%, 使用toolbar必须设置
      highlightCurrentRow: false,
    },
    rowHandle: {
      // width: 50,
	  width: 240,
	  
      view: {
        thin: true,
        text: '',
      },
      // edit: {
      //   thin: true,
      //   text: '',
      //   disabled () {
      //     return !vm.hasPermissions('Update')
      //   }
      // },
      // remove: {
      //   thin: true,
      //   text: '',
      //   disabled () {
      //     return !vm.hasPermissions('Delete')
      //   }
      // }
    },
    indexRow: { // 或者直接传true,不显示title，不居中
      title: '序号',
      align: 'center',
      width: 60,
	  
    },
    viewOptions: {
      componentType: 'form'
    },
    formOptions: {
      defaultSpan: 24, // 默认的表单 span
      width: '35%'
    },
    columns: [
	// {
 //      title: '关键词',
 //      key: 'search',
 //      show: false,
 //      disabled: true,
 //      search: {
 //        disabled: false
 //      },
 //      form: {
 //        disabled: true,
 //        component: {
 //          props: {
 //            clearable: true
 //          },
 //          placeholder: '请输入关键词'
 //        }
 //      },
 //      view: { // 查看对话框组件的单独配置
 //        disabled: true
 //      }
 //    },
    {
      title: 'ID',
      key: 'id',
      show: false,
      disabled: true,
      width: 90,
      form: {
        disabled: true
      }
    },
	{
	  title: '偶像姓名',
	  key: 'idolname',
	  // sortable: true,
	  width: 100,
	  align: 'center',
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true
	      }
	    }
	  },
	  type: 'input',
	  form: {
	    // rules: [ // 表单校验规则
	    //   { required: true, message: '显示必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入偶像姓名'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '唱片名',
	  key: 'workname',
	  // sortable: true,
	  width: 180,
	  align: 'center',
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true
	      }
	    }
	  },
	  type: 'input',
	  form: {
	    rules: [ // 表单校验规则
	      { required: true, message: '显示值必填项' }
	    ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入显示值'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '流派',
	  key: 'style',
	  // sortable: true,
	  // width: 180,
	  align: 'center',
	width:100,
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true
	      }
	    }
	  },
	  type: 'input',
	  form: {
	    rules: [ // 表单校验规则
	      { required: true, message: '显示值必填项' }
	    ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入显示值'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
    {
      title: '专辑类型',
      key: 'type',
      // sortable: true,
	  width: 100,
	  align: 'center',
      treeNode: true,
      search: {
        disabled: false,
        component: {
          props: {
            clearable: true
          }
        }
      },
      type: 'input',
      form: {
        editDisabled: true,
        rules: [ // 表单校验规则
          { required: true, message: '编码必填项' }
        ],
        component: {
          props: {
            clearable: true
          },
          placeholder: '请输入编码'
        },
        itemProps: {
          class: { yxtInput: true }
        }
      }
    },
	
	
	{
	  title: '介质',
	  key: 'jiezhi',
	  // sortable: true,
	  // width: 180,
	  width:100,
	  align: 'center',
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true
	      }
	    }
	  },
	  type: 'input',
	  form: {
	    rules: [ // 表单校验规则
	      { required: true, message: '显示值必填项' }
	    ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入显示值'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '发行时间',
	  key: 'time',
	  sortable: true,
	  width:100,
	
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true
	      }
	    }
	  },
	  type: 'input',
	  form: {
	    rules: [ // 表单校验规则
	      { required: true, message: '显示值必填项' }
	    ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入显示值'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '出版方',
	  key: 'publish',
	  // sortable: true,
	  width:100,
	
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true
	      }
	    }
	  },
	  type: 'input',
	  form: {
	    rules: [ // 表单校验规则
	      { required: true, message: '显示值必填项' }
	    ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入显示值'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '评分',
	  key: 'score',
	  sortable: true,
	width: 80,
	align: 'center',
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true
	      }
	    }
	  },
	  type: 'input',
	  form: {
	    rules: [ // 表单校验规则
	      { required: true, message: '显示值必填项' }
	    ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入显示值'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '评价人数',
	  key: 'score_people',
	  sortable: true,
	  width:100,
	
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true
	      }
	    }
	  },
	  type: 'input',
	  form: {
	    rules: [ // 表单校验规则
	      { required: true, message: '显示值必填项' }
	    ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入显示值'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '条形码',
	  key: 'txm',
	  // sortable: true,
	  width:140,
	
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true
	      }
	    }
	  },
	  type: 'input',
	  form: {
	    rules: [ // 表单校验规则
	      { required: true, message: '显示值必填项' }
	    ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入显示值'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},

    ].concat(vm.commonEndColumns())
  }
}

