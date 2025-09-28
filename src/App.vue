<template>
<Headmenu ref="menu" @submit="onsubmit"  @login="onshow" :disabled="disabled" :textdisabled="textdisabled" :src="src"
@userquit="userquit" :islogin="islogin"
>
</Headmenu>
<div class="body">
  <Todoprogress :done="finished" :total="total" :height="height" :border-radius="borderRadius"></Todoprogress>
    <ul>
<h1>未完成</h1>
<Node v-for="item in todo"
:title="item.title"
:key="item.id"
v-model:checkval="item.done"
:id="item.id"
@edit="onedit"
@del="ondel"
>
</Node>


</ul>
<ul>
<h1>已完成</h1>
<Node v-for="item in done"
:title="item.title"
v-model:checkval="item.done"
:key="item.id"
:id="item.id"
@edit="onedit"
@del="ondel"
> </Node>

</ul>
<!-- <button @click="clearstorage">测试按钮</button> -->
<Denglu class="denglu" v-if="showvalue" @change="onclose" @loginmsg="Applogin"></Denglu>
</div>
</template>
<script setup>
import {computed, reactive, ref ,onMounted, onUnmounted} from 'vue';
import Headmenu from './headmenu.vue';  
import Node from "./node.vue"
import  Denglu from "./denglu.vue"
import Todoprogress from './todoprogress.vue';
import axios, { all } from 'axios'
const textdisabled=ref(true)
const disabled=ref(false)
const menu=ref();
const users=ref([]);
const currentuser=ref()
const showvalue=ref(false)
const boxshow=ref(false)
const islogin=ref(false)
const todolist=ref([])
const todo=computed(()=>(todolist.value||[]).filter(t=>!t.done))
const done=computed(()=>(todolist.value||[]).filter(t=>t.done))
const src=computed(()=>currentuser.value?currentuser.value.src:"/picture/touxiang5.webp")
const finished=computed(() => Array.isArray(done?.value) ? done.value.length : 0)
const total=computed(() => Array.isArray(todolist?.value)  ? todolist.value.length : 100)
const height=ref("50px")
const borderRadius=ref("20px")
//登录框显示
function onshow(value){
showvalue.value=true
}
//登录框关闭
function onclose(){
showvalue.value=false
}
//清楚本地缓存测试按钮
function clearstorage(){
localStorage.clear();
}

//获取json文件并存入本地存储初始化！！！
async function onget() {  
  try {
    // 1. 发 AJAX 请求（dev 服务器会自动代理 public 目录）
    const { data } = await axios.get('./data.json') // 文件放在 public/users.json
    return data
  } catch (e) {
    console.error('加载失败', e)
  }
}
//app挂载前导入localstorege
onMounted(async()=>{
window.addEventListener('beforeunload', savelocalstorage)
const storege=(localStorage.getItem('user'))
if(storege){
   users.value=JSON.parse(storege);
}
else{
users.value=await onget(); 
}
})
onUnmounted(()=>{
window.removeEventListener('beforeunload',savelocalstorage)

})
//app卸载前保存用户数据localstorege
function savelocalstorage(){    
if(currentuser.value){
for(let i in users.value)
{if(currentuser.value.Name==users.value[i].Name)
{
currentuser.value.todolist=todolist.value
users.value.splice(i,1,currentuser.value);
localStorage.setItem('user',JSON.stringify(users.value))}}}
}
//验证登录函数
function Applogin(user){
for(let i in users.value){
if(user.act==users.value[i].Name&&user.psw==users.value[i].Psw){
    
todolist.value=users.value[i].todolist;
showvalue.value=false
currentuser.value=users.value[i]
disabled.value=true;
textdisabled.value=false;
islogin.value=true;
console.log(src.value);}}
}
//用户退出
function userquit(){

savelocalstorage();
todolist.value=null;
currentuser.value=null;
disabled.value=false;
islogin.value=false;
textdisabled.value=true;
}
//记录Todo
function onsubmit(value){
    let newid=Date.now()
const newtodo={id:newid+1,title:value,done:false};
todolist.value.push(newtodo);
}
//弹出修改框
function onedit(id){
   const idx=todolist.value.findIndex(t=>t.id===id)
    const newtitle=prompt("NewTodo")
    if(newtitle)todolist.value[idx].title=newtitle
}
//删除
function ondel(id) {
    console.log(id);
    
    todolist.value=todolist.value.filter(t=>t.id!==id)
}
</script>
<style>
.body{
display: flex;
flex-direction: column;
align-items: center;
}
ul{
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
}
.denglu{
position: absolute;
top: 120px;
}
.userbox{
position: absolute;
top: 70px;
right: 60px;
}
</style>