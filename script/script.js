const app = new Vue({
  el:'#app',
  data:{
    mails:[],
    loading:true,
  },
  methods:{
    getEmail(){
      for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(r=>{
        console.log(r.data)
        this.mails.push(r.data.response)
        this.loading=false;

      })
      }
      
    }
  },
  mounted(){
    this.getEmail();
  }
}) 