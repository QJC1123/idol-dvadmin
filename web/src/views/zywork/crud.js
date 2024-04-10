import { request } from '@/api/service'
import { BUTTON_STATUS_NUMBER } from '@/config/button'
import { urlPrefix as zyworkPrefix } from './api'


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
   title: '综艺节目',
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
       placeholder: '请输入节目名称'
     },
     itemProps: {
       class: { yxtInput: true }
     }
   }
 },
		
		
		
		{
		  title: '年份',
		  key: 'workyear',
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
		      placeholder: '请输入年份'
		    },
		    itemProps: {
		      class: { yxtInput: true }
		    }
		  }
		},
		{
		  title: '是否上映',
		  key: 'sy',
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
		    rules: [ // 表单校验规则
		      { required: true, message: '显示值必填项' }
		    ],
		    component: {
		      props: {
		        clearable: true
		      },
		      placeholder: '请输入是否上映'
		    },
		    itemProps: {
		      class: { yxtInput: true }
		    }
		  }
		},
		
		
		
		// {
		//   title: '角色',
		//   key: 'idol_role',
		//   // sortable: true,
		//   // width: 180,
		//   align: 'center',
		//   search: {
		//     disabled: false,
		//     component: {
		//       props: {
		//         clearable: true
		//       }
		//     }
		//   },
		//   type: 'input',
		//   form: {
		//     rules: [ // 表单校验规则
		//       { required: true, message: '显示值必填项' }
		//     ],
		//     component: {
		//       props: {
		//         clearable: true
		//       },
		//       placeholder: '请输入显示值'
		//     },
		//     itemProps: {
		//       class: { yxtInput: true }
		//     }
		//   }
		// },
		{
		  title: '导演',
		  key: 'director',
		  width:90,
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
		    rules: [ // 表单校验规则
		      { required: true, message: '显示值必填项' }
		    ],
		    component: {
		      props: {
		        clearable: true
		      },
		      placeholder: '请输入导演姓名'
		    },
		    itemProps: {
		      class: { yxtInput: true }
		    }
		  }
		},
		{
		  title: '出镜',
		  key: 'actor',
		  width: 200,
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
		      placeholder: '请输入评分'
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
		  align: 'center',
		  width:100,
		
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
		  title: '偶像姓名',
		  key: 'idolname',
		  align: 'center',
		  // sortable: true,
		  width:90,
		
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
		      placeholder: '请输入偶像姓名'
		    },
		    itemProps: {
		      class: { yxtInput: true }
		    }
		  }
		},
		{
		  title: '角色',
		  key: 'idol_role',
		  align: 'center',
		  width:90,
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

