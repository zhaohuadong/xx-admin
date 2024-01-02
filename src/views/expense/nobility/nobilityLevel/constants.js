// 爵位等级管理 搜索formTag
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '爵位名称',
    prop: 'name',
  },
  {
    label: '开通价格',
    prop: 'openCoin',
    hideInSearch: true,
  },
  {
    label: '续费',
    prop: 'renewCoin',
    hideInSearch: true,
  },
  {
    label: '返利',
    prop: 'rebateCoin',
    hideInSearch: true,
  },
  {
    label: '爵位图片',
    prop: 'url',
    hideInSearch: true,
  },
  {
    label: '聊天字体颜色',
    prop: 'chatFontColor',
    hideInSearch: true,
  },
  {
    label: '进场人气',
    prop: 'givePopularity',
    hideInSearch: true,
  },
  {
    label: '升级加速',
    prop: 'experienceAccelerate',
    scopedSlots: 'experienceAccelerate',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '105' },
]

// 靓号使用记录 单选框数据
export const formCheckbox = [
  {
    label: '贵族表情',
    value: '0',
  },
  {
    label: '专属礼物',
    value: '1',
  },
  {
    label: '贵族勋章',
    value: '2',
  },
  {
    label: '贵族卡片',
    value: '3',
  },
  {
    label: '进场特效',
    value: '4',
  },
  {
    label: '专属坐骑',
    value: '5',
  },
  {
    label: '专属头像框',
    value: '6',
  },
  {
    label: '人气加成',
    value: '7',
  },
  {
    label: '升级加速',
    value: '8',
  },
  {
    label: '昵称特效',
    value: '9',
  },
  {
    label: '贵族气泡',
    value: '10',
  },
  {
    label: '榜单隐身',
    value: '11',
  },
  {
    label: '防踢',
    value: '12',
  },
  {
    label: '防禁言',
    value: '13',
  },
  {
    label: '进房隐身',
    value: '14',
  },
  {
    label: '全服礼物通知',
    value: '15',
  },
]

// 靓号使用记录 弹窗form表单
export const formData = () => ({
  name: '',
  openCoin: '',
  validDays: '',
  renewCoin: '',
  renewDays: '',
  rebateCoin: '',
  givePopularity: '',
  experienceAccelerate: '',
  rebate: '',
  popular: '',
  speed: '',
  chatFontColor: '',
  remark: '',
  giveGoods: '',
  powerIds: [],
  url: '',
  medalUrl: '',
  knighthoodLevel: '',
})
// 靓号使用记录 表单校验规则
export const formRule = {
  name: [{ required: true, message: '请填写爵位名称', trigger: 'blur' }],
  openCoin: [{ required: true, message: '请填写金币数量', trigger: 'blur' }],
  validDays: [{ required: true, message: '请填写天数', trigger: 'blur' }],
  renewCoin: [{ required: true, message: '请填写金币数量', trigger: 'blur' }],
  renewDays: [{ required: true, message: '请填写续费天数', trigger: 'blur' }],
  rebateCoin: [{ required: true, message: '请填写金币数量', trigger: 'blur' }],
  rebate: [{ required: true, message: '请填写返利数量', trigger: 'blur' }],
  giveGoods: [{ required: true, message: '请填写要赠送的商品ID', trigger: 'blur' }],
  knighthoodLevel: [{ required: true, message: '请填写爵位等级', trigger: 'blur' }],
}
