<template>
  <div class="login-container">
    <div class="logo flex items-center">
      <img class="mr-4" src="../assets/logo/logo.png" alt="" />
      <span>闲闲语音</span>
    </div>
    <div class="right-box">
      <div class="title">{{ title }}</div>
      <el-form ref="loginRef" :model="loginForm" :rules="loginRules" class="login-form" label-position="top">
        <!--手机号-->
        <el-form-item prop="username">
          <div class="minTitle">
            手机号
            <span>PHONE NUMBER</span>
          </div>
          <el-input
            v-model="loginForm.username"
            class="!w-4/6 greenBorder"
            type="text"
            size="large"
            auto-complete="off"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>
        <!--数字验证码-->
        <el-form-item v-if="loginErrorNum > 3" prop="imageCode" class="mb-2">
          <!-- <el-form-item prop="imageCode" class="mb-2"> -->
          <div class="minTitle">
            数字验证
            <span>DIGITAL VERIFICATION</span>
          </div>
          <div class="greenBorder w-full flex items-center justify-between">
            <el-input
              v-model="loginForm.imageCode"
              class="!w-4/6"
              type="code"
              size="large"
              auto-complete="off"
              placeholder="请输入数字验证码"
              @keyup.enter="handleLogin"
            ></el-input>
            <img
              class="code-img cursor-pointer"
              :src="numberImage"
              alt=""
              @click="getImagNumberCode(loginForm.username)"
            />
          </div>
        </el-form-item>
        <!--获取验证码-->
        <el-form-item prop="code">
          <div class="minTitle mb-3">
            验证码
            <span>VERIFICATION CODE</span>
          </div>
          <div class="greenBorder w-full flex items-center justify-between">
            <el-input
              v-model="loginForm.code"
              class="!w-4/6"
              type="code"
              size="large"
              auto-complete="off"
              placeholder="请输入验证码"
              @keyup.enter="handleLogin"
            ></el-input>
            <el-button
              v-if="isGetCode"
              link
              class="btn-code"
              :disabled="!loginForm.username"
              @click="throttled(getMobileCode())"
            >
              获取验证码
            </el-button>
            <div v-if="!isGetCode">
              <el-button link class="btn-code">{{ timer }}s</el-button>
            </div>
          </div>
        </el-form-item>
        <div class="btn">
          <div class="flex justify-end mr-20 mb-6">
            <el-checkbox v-model="loginForm.rememberMe" class="checkbox">记住账号</el-checkbox>
          </div>

          <el-form-item style="width: 100%">
            <el-button link :loading="loading" @click.prevent="handleLogin">
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import Cookies from 'js-cookie'
import useUserStore from '@/store/modules/user'
import { getCode, getImageCode } from '@/api/login'
import { throttled } from '@/utils/common.js'
const userStore = useUserStore()
const router = useRouter()
const { proxy } = getCurrentInstance()

const title = ref('闲闲管理后台' + import.meta.env.VITE_APP_TITLE)

const loginForm = ref({
  username: 'admin',
  code: '',
  imageCode: '',
  rememberMe: true,
})

const loginRules = {
  username: [{ required: true, trigger: 'blur', message: '请输入您的手机号' }],
  code: [{ required: true, trigger: 'blur', message: '请输入您的验证码' }],
  imageCode: [{ required: true, trigger: 'blur', message: '请输入您的数字验证码' }],
}

const loading = ref(false)
const redirect = ref(undefined)
const loginErrorNum = ref(0) // 记录登陆的次数
const numberImage = ref('')
// 登陆
function handleLogin() {
  proxy.$refs.loginRef.validate((valid) => {
    if (valid) {
      loading.value = true
      // 勾选了需要记住密码设置在 cookie 中设置记住用户名和密码
      if (loginForm.value.rememberMe) {
        Cookies.set('username', loginForm.value.username, { expires: 30 })
        Cookies.set('rememberMe', loginForm.value.rememberMe, { expires: 30 })
      } else {
        // 否则移除
        Cookies.remove('username')
        Cookies.remove('rememberMe')
      }
      // 调用action的登录方法
      userStore
        .login(loginForm.value)
        .then(() => {
          router.push({ path: redirect.value || '/' })
        })
        .catch(() => {
          loading.value = false
          loginErrorNum.value += 1
        })
    }
  })
}

// 设置cookie
function getCookie() {
  const username = Cookies.get('username')
  const rememberMe = Cookies.get('rememberMe')
  loginForm.value = {
    username: username === undefined ? loginForm.value.username : username,
    code: '',
    rememberMe: rememberMe === undefined ? false : Boolean(rememberMe),
  }
}

getCookie()

const count = ref(null)
const TIME_COUNT = ref(60)
const isGetCode = ref(true)
const timer = ref()

// 获取手机验证码
function getMobileCode() {
  getCode(loginForm.value.username)
  isGetCode.value = false
  if (!count.value) {
    timer.value = TIME_COUNT.value
    count.value = setInterval(() => {
      if (timer.value > 0 && timer.value <= TIME_COUNT.value) {
        timer.value--
      } else {
        isGetCode.value = true
        clearInterval(count.value)
        count.value = null
      }
    }, 1000)
  }
}

// 获取图片验证码
const getImagNumberCode = (param) => {
  getImageCode({ mobile: param }).then((res) => {
    numberImage.value = res.data.imageBase64Code
  })
}
getImagNumberCode(loginForm.value.username)

// 监听登陆错误次数，超过3次重置错误次数
watch(
  loginErrorNum,
  (value) => {
    if (Number(value) > 3) {
      getImagNumberCode(loginForm.value.username)
    }
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/src/assets/images/loginBack.png') no-repeat;
  background-size: cover;
  background-position: 50%;

  .logo {
    position: absolute;
    top: 44px;
    left: 56px;
    img {
      width: 76px;
      height: 76px;
    }
    span {
      font-size: 29px;
      font-weight: 500;
    }
  }
  .right-box {
    position: absolute;
    right: 10%;

    .title {
      text-align: center;
      color: #000000;
      font-size: 48px;
      margin-bottom: 18px;
      font-weight: 500;
      margin-top: 44px;
    }
    .login-form {
      width: 632px;
      height: 577px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 17px;
      border: 5px solid #ffffff;
      padding: 37px 58px 53px 58px;
      box-sizing: border-box;

      :deep(.el-input__wrapper) {
        background-color: transparent;
        box-shadow: none;
        padding: 0;
        height: 40px;
      }
      :deep(.el-input__inner) {
        font-size: 18px;
        &::placeholder {
          font-size: 18px;
        }
      }
      .btn {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        :deep(.el-button) {
          margin: auto;
          width: 314px;
          height: 61px;
          background: #5bffb7;
          border-radius: 14px;
          border: 4px solid #222521;
          font-size: 32px;
          font-weight: 500;
          color: #212521;
          &:hover {
            color: #212521;
          }
        }
      }

      .minTitle {
        font-size: 20px;
        font-weight: 600;
        color: #000000;
        span {
          color: #839994;
          font-weight: normal;
          margin-left: 15px;
        }
      }

      .greenBorder {
        border-bottom: 2px solid #5bffb7;
        margin-bottom: 2px;
      }
      .btn-code {
        font-size: 20px;
        color: #000000;
        font-weight: 600;
      }

      :deep(.el-form-item) {
        margin-bottom: 37px;
      }
    }
  }
}

.code-img {
  height: 40px;
  width: 102px;
}

@media screen and (max-width: 800px) {
  .logo {
    transform: scale(0.6);
    top: 20px !important;
    left: 0 !important;
  }
  .right-box {
    transform: scale(0.6);
    right: 0 !important;
    position: relative !important;
  }
}
</style>
