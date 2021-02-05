<template>
  <div class="container">
    <div class="box">
      <div class="title">
        <div class="context">用心聆听,用爱沟通...</div>
      </div>
      <div class="btn_group">
        <van-button class="btn_login" round block type="primary" size="large" to="/login">登&nbsp;&nbsp;陆</van-button>
        <van-button class="btn_register" round block type="info" size="large" to="/register">注&nbsp;&nbsp;册</van-button>
      </div>
      <div class="other_login">
        <div class="login_title">
          <span class="line"></span>
          <span class="text">其他登陆方式</span>
          <span class="line"></span>
        </div>
        <div class="other_login_sub">
          <div class="other_login_item">
            <img src="~/assets/images/app/weibo.png" alt="weibo">
            <span>微博</span>
          </div>
          <div class="other_login_item">
            <img src="~/assets/images/app/QQ.png" alt="qq">
            <span>QQ</span>
          </div>
          <div class="other_login_item">
            <img src="~/assets/images/app/weixin.png" alt="weixin">
            <span>微信</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import  'assets/js/normalize'
export default {
  name: "Loading"
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  background: url("~assets/images/bg.jpg") no-repeat;
  background-size: 100% 100%;
}

.title {
  width: 100%;
  height: calc(100vh / 2.5);
  /*background-color: red;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.title .context {
  color: white;
  font-size: 20px;
  letter-spacing: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', miui, 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}

.btn_group {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
}

.btn_group .btn_login {
  margin: 10px 0;
}

.login_title {
  width: 90%;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: white;
  text-align: center;
  letter-spacing: 2px;
  margin: 0 auto;
}

.login_title .line {
  display: inline-block;
  border-top: 1px solid white;
  width: 80px;
}

.login_title .text {
  color: white;
  vertical-align: -9%;
  padding: 0 10px;
}

.other_login_sub {
  width: 40%;
  margin: 0 auto;
  display: flex;
  /*border: 1px solid red;*/
  justify-content: space-between;
}

.other_login_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.other_login .other_login_item img {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}

</style>