// 列表项
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
    width: '200',
  },
  {
    label: '礼包名称',
    prop: 'title',
  },
  {
    label: '礼包内容',
    prop: 'contentList',
  },
  {
    label: '添加时间',
    prop: 'createTime',
  },
  {
    label: '状态',
    prop: 'disabled',
    type: 'tag',
    enum: [
      {
        label: '启用',
        value: 0,
        type: 'success',
      },
      {
        label: '禁用',
        value: 1,
        type: 'warning',
      },
    ],
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '155' },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({
  title: '',
  disabled: 0,
  data: [],
  gold: [
    {
      type: 1,
      number: null,
      sourceId: null,
    },
  ],
  peeled: {
    type: 2,
    number: null,
    sourceId: null,
  },
  gift: [
    {
      type: 3,
      number: null,
      sourceId: null,
    },
  ],
  headFrame: [
    {
      type: 4,
      number: null,
      sourceId: null,
    },
  ],
  car: [
    {
      type: 5,
      number: null,
      sourceId: null,
    },
  ],
  light: [
    {
      type: 6,
      number: null,
      sourceId: null,
    },
  ],
  chat: [
    {
      type: 7,
      number: null,
      sourceId: null,
    },
  ],
  // text: [
  //   {
  //     type: 8,
  //     number: null,
  //     sourceId: 0,
  //   },
  // ],
  nicknameEffect: [
    {
      type: 10,
      number: null,
      sourceId: null,
    },
  ],
  nicknamePendant: [
    {
      type: 8,
      number: null,
      sourceId: null,
    },
  ],
  march: [
    {
      type: 9,
      number: null,
      sourceId: null,
    },
  ],
})

// 固定表单
export const formDataCopy = () => ({
  title: '',
  disabled: 0,
  data: [],
  gold: [],
  peeled: {
    // type: 2,
    // number: null,
    // sourceId: null,
  },
  gift: [],
  headFrame: [],
  car: [],
  light: [],
  chat: [],

  nicknameEffect: [],
  nicknamePendant: [],
  march: [],
})
// 校验规则
export const formRule = {
  title: [
    {
      required: true,
      message: '请输入文字',
      trigger: 'blur',
    },
  ],
  inputNumber: [
    {
      required: true,
      message: '请输入数字',
      trigger: 'blur',
    },
  ],
  select: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  disabled: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  userCodes: [
    {
      required: true,
      message: '请输入',
      trigger: 'blur',
    },
  ],
}

// 用户礼包表单
export const sendFormData = () => ({
  userCodes: '',
})
