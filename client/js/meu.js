const socket = io()

socket.on('chatvue', message=>{
  app.messages.push(message)
})

let app = new Vue({
  el:'.container',
  data:{
    inicial: 'Bem Vindo ao Chat com Vuejs',
    nickname: '',
    msg: '',
    messages: [],
    entrou: false
  },
  mounted(){
    let x = window.localStorage.getItem('nickname')
    if(x){
      this.nickname = x
      this.entrou = true
    }
  },
  methods:{
    entra(){
      if(!(this.nickname == '')){
        this.entrou = true
        window.localStorage.setItem('nickname', this.nickname)
      }
    },
    enviar(){
      if(this.msg !== ''){
        let message = {
          nickname: this.nickname,
          message: this.msg
        }
        this.msg = ''
        socket.emit('chatvue', message)
      }
    }
  }
})
