import { loginApi, logoutApi } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    name: '',
    roles: [],
    permissions: [],
    editInfoType: false,
  }),
  actions: {
    // 登录
    login(userInfo) {
      const username = userInfo.username.trim()
      const code = userInfo.code
      const imageCode = userInfo.imageCode
      return new Promise((resolve, reject) => {
        loginApi(username, code, imageCode)
          .then((res) => {
            setToken(res.data.accessToken, res.data.expiresIn / 24)
            this.token = res.data.accessToken
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 获取用户信息
    getInfo() {
      return new Promise((resolve, reject) => {
        // 假装获取用户信息成功
        this.roles = ['admin']
        this.name = 'admin'
        this.permissions = ['*:*:*']
        resolve()
        // getInfo()
        //   .then((res) => {
        //     const user = res.user
        //     if (res.roles && res.roles.length > 0) {
        //       // 验证返回的roles是否是一个非空数组
        //       this.roles = res.roles
        //       this.permissions = res.permissions
        //     } else {
        //       this.roles = ['ROLE_DEFAULT']
        //     }
        //     this.name = user.userName
        //     resolve(res)
        //   })
        //   .catch((error) => {
        //     reject(error)
        //   })
      })
    },
    // 退出系统
    logOut() {
      return new Promise((resolve, reject) => {
        logoutApi()
          .then(() => {
            this.token = ''
            this.roles = []
            this.permissions = []
            removeToken()
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // 用户编辑列表刷新监听开关
    // editType(params) {
    //   this.editInfoType = params
    // },
  },
})

export default useUserStore
