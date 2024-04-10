import { request } from '@/api/service'
import { BUTTON_STATUS_NUMBER } from '@/config/button'
import { urlPrefix as idoltotalPrefix } from './api'


export const crudOptions = (vm) => {
  return {
	// pagination: true,
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
      // width: 150,
	  width: 140,
      view: {
        thin: true,
        text: '',
      },
      edit: {
        thin: true,
        text: '',
        disabled () {
          return !vm.hasPermissions('Update')
        }
      },
      remove: {
        thin: true,
        text: '',
        disabled () {
          return !vm.hasPermissions('Delete')
        }
      }
    },
    indexRow: { // 或者直接传true,不显示title，不居中
      title: 'ID',
      align: 'center',
      width: 0,
	  show:false,
	  disabled:true
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
	  title: '姓名',
	  key: 'idolname',
	  // sortable: true,
	  width: 80,
	  align: 'center',
	  search: {
	    disabled: false,
	    component: {
	      props: {
	        clearable: true,
			
	      },
		
		  
	    }
	  },
	  type: 'input',
	  form: {
	    rules: [ // 表单校验规则
	      { required: true, message: '显示必填项' }
	    ],
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
	  title: '粉丝数',
	  key: 'fans',
	  sortable: true,
	  width: 90,
	  align: 'center',
	  // search: {
	  //   disabled: false,
	  //   component: {
	  //     props: {
	  //       clearable: true
	  //     }
	  //   }
	  // },
	  type: 'input',
	  form: {
	    // rules: [ // 表单校验规则
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入粉丝数'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	
    {
      title: '作品数',
      key: 'works',
      sortable: true,
      width: 90,
      align: 'center',
    
      // search: {
      //   disabled: false,
      //   component: {
      //     props: {
      //       clearable: true
      //     }
      //   }
      // },
      type: 'input',
      form: {
        // rules: [ // 表单校验规则
        //   { required: true, message: '显示值必填项' }
        // ],
        component: {
          props: {
            clearable: true
          },
          placeholder: '请输入作品数'
        },
        itemProps: {
          class: { yxtInput: true }
        }
      }
    },
	{
	  title: '性别',
	  key: 'sex',
	  // sortable: true,
	  width: 60,
	  align: 'center',
	  // search: {
	  //   disabled: false,
	  //   component: {
	  //     props: {
	  //       clearable: true
	  //     }
	  //   }
	  // },
	  type: 'input',
	  form: {
	    // rules: [ // 表单校验规则
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入性别'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '职业',
	  key: 'carrer',
	  // sortable: true,
	  width: 60,
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
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入职业类别'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '国籍',
	  key: 'country',
	  // sortable: true,
	  width: 60,
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
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入国籍'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '籍贯',
	  key: 'jiguan',
	  width: 100,
	  align: 'center',
	  // sortable: true,
	  // search: {
	  //   disabled: false,
	  //   component: {
	  //     props: {
	  //       clearable: true
	  //     }
	  //   }
	  // },
	  type: 'input',
	  form: {
	    // rules: [ // 表单校验规则
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入籍贯'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '出生日期',
	  key: 'birthday',
	  width: 100,
	  align: 'center',
	  sortable: true,
	  // search: {
	  //   disabled: false,
	  //   component: {
	  //     props: {
	  //       clearable: true
	  //     }
	  //   }
	  // },
	  type: 'input',
	  form: {
	    // rules: [ // 表单校验规则
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入出生日期'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '身高',
	  key: 'height',
	  sortable: true,
	  width: 70,
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
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入身高'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '体重',
	  key: 'weight',
	  sortable: true,
	width: 70,
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
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入体重'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '公司',
	  key: 'company',
	  // sortable: true,
	width: 120,
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
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入公司'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	{
	  title: '院校',
	  key: 'school',
	  width: 130,
	  align: 'center',
	  // sortable: true,
	
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
	    //   { required: true, message: '显示值必填项' }
	    // ],
	    component: {
	      props: {
	        clearable: true
	      },
	      placeholder: '请输入院校'
	    },
	    itemProps: {
	      class: { yxtInput: true }
	    }
	  }
	},
	// {
	//   title: '爱好',
	//   key: 'hobby',
	//   width: 120,
	//   align: 'center',
	//   // sortable: true,
	
	//   // search: {
	//   //   disabled: false,
	//   //   component: {
	//   //     props: {
	//   //       clearable: true
	//   //     }
	//   //   }
	//   // },
	//   type: 'input',
	//   form: {
	//     // rules: [ // 表单校验规则
	//     //   { required: true, message: '显示值必填项' }
	//     // ],
	//     component: {
	//       props: {
	//         clearable: true
	//       },
	//       placeholder: '请输入爱好'
	//     },
	//     itemProps: {
	//       class: { yxtInput: true }
	//     }
	//   }
	// },
    ].concat(vm.commonEndColumns())
  }
}

