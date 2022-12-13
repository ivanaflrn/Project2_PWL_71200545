<template>
  <div class="home">
    <div class="tengah">
    <input type="text" placeholder="username anda...">
    <button v-on:click="masuk()">Masuk</button>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    
  },
  methods: {
    masuk(){
        this.$router.push('/pesan')
    }
  },
}
</script>
<style scoped>
.home{
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
}
.tengah{
  margin: auto;
}
  button{
    display: block;
    margin: auto;
    margin-top: 10px;
    background-color: blueviolet;
    width: 250px;
    height: 35px;
    color: white;
    border-radius: 4px;
  }

  input{
    width: 240px;
    height: 35px;
  }
</style>