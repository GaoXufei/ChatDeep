import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index_paeg',
      component: Index,
      children: [
        {
          path: '/chat',
          name: 'chat_page',
          component: Chat
        }
      ]
    }
  ]
})
