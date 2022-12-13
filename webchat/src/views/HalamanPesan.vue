<template>
    <div class="pesan">
    <div class="kiri">
        <div class="head">
            <span>Pesan Terakhir</span>
            <span @click="exit()" style="cursor: pointer;">Exit</span>
        </div>
        <div class="bawah">
            <h1>Kirim Pesan Ke:</h1>
            <input v-model="tujuan" type="text" placeholder="username teman...">
        </div>
    </div>
    <div class="kanan">
        <div class="header">
            <h2>@{{tujuan}}</h2>
        </div>
        <div class="chatbox">
        </div>
        <div class="chatroom">
            <input v-model="pesan" type="text" placeholder="ketik pesan...">
            <button @click="kirim()" >Kirim</button>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import { getFirestore, collection, addDoc, onSnapshot, getDocs, query, where } from "firebase/firestore";
  import firebase from '@/firebase_init';
 
  const db = getFirestore(firebase);
  
  export default {
    name: 'HalamanPesan',
    components: {
      
    },
    data() {
        return {
            pesan:'',
            tujuan:''
        }
    },
    methods: {
        exit(){
            this.$router.push('/');
        },
        async kirim(){
            const data = await addDoc(collection(db, "messages"), {
                to: this.tujuan,
                msg: this.pesan
            });
            console.log("terinput ID: ", data.id);
        }
    },
  }
  </script>
  <style>
  .header{
    background-color: rgb(74, 74, 204);
    text-align: left;
    color: white;
    padding: 7px 30px;
  }
  .chatroom{
    position: absolute;
    bottom: 10px;
  }
  .chatroom input{
    margin-left: 20px;
    width: 700px;
  }
  .chatroom button{
    margin-left: 10px;
    width: 200px;
    height: 48px;
    border-radius: 10px;
    background-color: blue;
    color: white;

  }
  .head{
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  .pesan{
    display: flex;
    height: 100%;
  }
  .kanan{
    width: 70%;
    height: 100%;
  }
  .kiri{
    background-color: blue;
    padding: 20px;
    color: white;
    width: 30%;
  }
  
  .bawah{
    position: absolute;
    bottom: 20px;
    left: 20px;
    text-align: left;
  }
  .bawah h1{
    font-size: 20px;
  }

  input{
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 
    0px;
  }
  </style>