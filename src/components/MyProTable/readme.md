# MyProTable 使用文档

## MyProTable 属性

> 支持 **el-table** 的所有属性，并扩展了以下属性

|     属性名     |      类型      | 必传 |                       描述                       |
| :------------: | :------------: | :--: | :----------------------------------------------: |
|    columns     |     Column     |  是  |    根据此字段渲染搜索表单及表格，详见 Column     |
|   requestApi   |    Function    |  是  |                获取表格数据的接口                |
|   initParam    |     Object     |  否  |               表格请求的初始化参数               |
|  dataCallback  |    Function    |  否  | 后台返回数据的回调函数，可对后台返回数据进行处理 |
|   deleteApi    |    Function    |  否  |              删除单条表格数据的接口              |
| deleteBatchApi |    Function    |  否  |                批量删除数据的接口                |
|  selectionKey  |     String     |  否  |          表格项唯一字段名，默认值 'id'           |
|  isShowSearch  |    Boolean     |  否  |            是否展示搜索栏，默认 true             |
|  otherHeight   | String,Number  |  否  |   其他会影响表格 height 字段的组件高度，待优化   |
|    noHeight    | String,Boolean |  否  |    不需要表格自适应高度，允许外部窗口有滚动条    |

## MyProTable 事件

> 支持 **el-table** 的所有事件

## MyProTable 方法

|     方法名      |                              描述                               |
| :-------------: | :-------------------------------------------------------------: |
|      table      | `el-table` 实例，可以通过`table.方法名`来调用 `el-table` 的方法 |
|    tableData    |                      当前页面所展示的数据                       |
|   searchParam   |                      搜索参数，不包含分页                       |
|    pageData     |                            分页数据                             |
|  getTableList   |               重新请求表格数据（不改变原有参数）                |
|  changeCurrent  |                  修改分页值并重新请求表格数据                   |
|      reset      |            重置表格查询参数，相当于点击重置搜索按钮             |
|   isSelected    |                        表格是否选中数据                         |
|  selectedList   |                       表格选中的数据列表                        |
| selectedListIds |                     表格选中的数据列表的 id                     |

## MyProTable 插槽

|          插槽名          |                        描述                        |
| :----------------------: | :------------------------------------------------: |
|          other           |                其他自定义搜索表单项                |
|       rightAction        |          除了查询重置外，自定义搜索栏按钮          |
|            -             |        默认插槽，支持直接写 el-table-column        |
|       tableHeader        | 自定义表格头部区域的插槽，一般情况该区域放操作按钮 |
|          append          |            插入至表格最后一行之后的内容            |
|      `column.prop`       |                 单元格的作用域插槽                 |
| `column.prop` + "Header" |                  表头的作用域插槽                  |

## Column

> 支持 **el-table-column** 的所有属性，并扩展了以下属性

|    属性名    |      类型      |                      属性描述                      |
| :----------: | :------------: | :------------------------------------------------: |
|     type     |     String     |                   特殊表格项类型                   |
| hideInSearch |    Boolean     |                   不展示在搜索栏                   |
| hideInTable  |    Boolean     |                   不展示在表格里                   |
|     enum     | Array/Function | select/radio/tag/selectTime 选项，支持传入异步请求 |
|   content    |     Array      |                      多级表头                      |
|   copyable   |    Boolean     |                  是否可复制表格项                  |
| defaultValue |  String/Array  |                     搜索默认值                     |
|  selectTime  |     Array      |             type==='selectTime'时使用              |
|  inputType   |     String     |            input 搜索框类型，默认 text             |
