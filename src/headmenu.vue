<template>
<div class="headmenu">
<p id="title" >TodolistPLUS</p>
<input type="text" class="titleinput" v-model="InputValue" @keydown="comit" :disabled="textdisabled" placeholder="请添加Todo">
<button class="lgbtn" @click="login1" :disabled="disabled"> 登录</button>
<div @mouseenter="onMouseenter" @mouseleave="onMouseleave" class="usercontainer"><img  id="touxiang" :src="src" >
<userbox class="userbox" v-if="boxshow" @userquit="emit('userquit')"> </userbox>
</div>
</img>
</div>
</template>
<script setup>
import { ref,defineExpose } from 'vue';
import userbox from './userbox.vue';
const InputValue=ref("")

const emit = defineEmits(['submit','login','userquit']) 
const props=defineProps(['disabled','textdisabled','src','islogin'])
const show=ref(false);
const boxshow=ref(false);

function comit(e) {
  if (e.key === 'Enter') {
    e.preventDefault()          
    emit('submit', InputValue.value) 
    InputValue.value = ''      
  }
}
function login1(){
  emit('login',show.value)
}
function onMouseenter(){
  console.log(props.islogin);
  
    if(props.islogin)boxshow.value=true
}
function onMouseleave(){
    boxshow.value=false
}

</script>
<script>
export default {
}

</script>
<style>

.headmenu {
    line-height: 2px;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: black;
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
#title {
    margin: 2, 0, 0, 0;
    color: white;
    font-family: "Arial", sans-serif;
    font-size: 40px;
}
.titleinput{
    font-size: 20px;
left: 750px;
width: 300px;
height: 30px;
border-radius: 3%;
left: 500px;

 }
.titleinput {
 margin-left: 150px;
  color: white;
  border: 2px solid rgb(147, 29, 225);
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  max-width: 190px;
}
.lgbtn {
  height: 70%;
 padding: 15px 25px;
 border: unset;
 border-radius: 15px;
 color: #212121;
 z-index: 1;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
}

.lgbtn::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color:rgb(106, 41, 210);
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(30, 21, 83, 0.27);
 transition: all 250ms
}

.lgbtn:hover {
 color: #e8e8e8;
}

.lgbtn:hover::before {
 width: 100%;
}
#touxiang{
  border: 3px solid rgb(147, 29, 225);
  height: 50px;
  border-radius: 50%;
}
#touxiang:hover{
  cursor: pointer;
}
.usercontainer{
display: flex;
flex-direction: row;

}

</style>