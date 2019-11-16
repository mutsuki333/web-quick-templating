<template lang="pug">
.about
  h1.title This is an about page 
  h3.subtitle(v-if="msg") and my name is {{msg}}
  button.button.is-primary.has-text-weight-bold(@click="press") press it
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      msg:''
    }
  },
  methods:{
    press(){
      axios.get('http://www.mocky.io/v2/5dcfa5e62f000084003f1eb3')
      .then(res=>{
        this.msg = res.data.name
      })
      
    }
  }
}
</script>

