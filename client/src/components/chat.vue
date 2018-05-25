<template>
  <div class="chat_container" v-loading="isLoading" element-loading-text="服务器连接中..." element-loading-background="rgba(0, 0, 0, 0.8)">
    <canvas id="sakura"></canvas>
    <div class="btnbg"></div>
    <div class="chat">
      <div class="show">
        <ul>
          <li v-for="msgInfo in message" :key="msgInfo.name">
            <strong><span v-text="msgInfo.name"></span><i v-text="msgInfo.time"></i></strong>
            <p v-text="msgInfo.msg"></p>
          </li>
        </ul>
      </div>
      <div class="enter">
        <div class="Input">
          <textarea placeholder="Typing..."></textarea>
        </div>
        <div class="Submit">
          <input type="submit" value="Submit">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data(){
    return {
      isLoading: true,
      message: [
        { name: 'Tim', time: 1527046084, msg: 'wow~~~ 厉害呢' }
      ],
      notification: 'xxx加入'
    }
  },
  created(){
    
  },
  mounted(){
    this.init()
    
  },
  methods: {
    // 初始化
    init(){
      const Chat = this.$io('http://127.0.0.1:7002/chat')
      // 服务器连接成功
      Chat.on('connect', () => {
        // 预加载动画关闭
        this.isLoading = false
        // 输入用户名
        // ...
        this.Login(Chat, 'Tim')
      })
    },
    // 通知简单消息
    notificationMessage(msg){
      this.$message({
        message: msg.message,
        type: msg.type
      })
    },

    Login(socket, author){
      socket.emit('login', { name: author })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../style/chat";
</style>
