<template>
       <div  class="winDow">
           <div id="inwinDow">
            
            <b  id="t1">Enter your password</b>
           
            <img src="/picture/touxiang5.webp" alt="" class="img">
            <p style="position: absolute; left: 120px; top:100px ; font-size: 20px;">Player account</p>
             <b style="position: absolute; left: 120px; top:140px ; font-size: 30px; " id="actName">{{ submit.act }}</b>
             <b style="position: absolute ;left: 0px; top:200px"> Account:</b>
             <input type="text" class="input" id="act" v-model="actvalue">
              <b style="position: absolute ;left: 0px; top:300px"> Password:</b>
             <input type="password" class="input" id="psw" v-model="pswvalue">
          <label class="switch"><input type="checkbox"><span class="slider"></span></label>
          <button id="denglu" @click="login"><b>Login</b></button>
        </div>
<button class="closebutton" @click="change">
  <span class="X"></span>
  <span class="Y"></span>
  <div class="close">Close</div>
</button>
       </div>



</template>

<script>
export default {
  
}
</script>
<script setup>
import { computed,ref} from 'vue';

const actvalue=ref("")
const pswvalue=ref("")
const submit=computed(()=>({
act:actvalue.value,
psw:pswvalue.value
}))

const emit=defineEmits(['change','loginmsg'])
function change(){

emit('change')


}
function login(){

emit('loginmsg',submit.value)

}
</script>


<style>
.winDow{
width: 600px;
height: 600px;
background-color: aliceblue;
border: 0 solid gray;
border-radius: 2%;
display: flex;
justify-content: center;
align-items: center;
}
.winDow:hover{

 box-shadow: 2px 2px 10px rgba(0,0,0,.15);
}
#inwinDow{
width: 450px;
height: 450px;
position: relative;
}
#t1{
font-size: 30px; 
left: 0px;
top: 0px;
position: absolute;
}
.img{
left: 0px;
top: 100px;
width: 100px;
height: 100px;
border-radius: 50%;
position: absolute;
display: inline;
}
.input {
  width: 250px;
  height: 45px;
  line-height: 30px;
  border: 4px solid transparent;
  border-radius: 10px;
  outline: none;
  background-color: #f8fafc;
  color: #0d0c22;
  transition: .5s ease;
  position: absolute;
  font-size: 20px;
}
.input.focus,.input:hover{

 box-shadow: 2px 2px 10px rgba(0,0,0,.15);
 
}
#psw{
  left: 0px;
  top:350px ;

}
#act{
  left: 0px;
  top:240px ;

}
.res{
position: absolute;
left: 0px;
top:400px;

}
/* From Uiverse.io by gharsh11032000 */ 
/* The switch - the box around the slider */
.switch {
    left: 10rem;
    top: 450px;
  font-size: 17px;
  position: absolute;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border: 2px solid #414141;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  left: 0.2em;
  bottom: 0.2em;
  background-color: white;
  border-radius: inherit;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

.switch input:checked + .slider {
  box-shadow: 0 0 20px rgba(9, 117, 241, 0.8);
  border: 2px solid #0974f1;
}

.switch input:checked + .slider:before {
  transform: translateX(1.5em);
}
#denglu {
  
  left: 0;
  top: 430px;
  display: inline-block;
  transition: all 0.2s ease-in;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  cursor: pointer;
  font-size: 20px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

#denglu:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

#denglu:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

#denglu:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #87CEEB;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

#denglu:hover {
  color: #ffffff;
  border: 1px solid #87CEEB;
}

#denglu:hover:before {
  top: -35%;
  background-color: #87CEEB;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

#denglu:hover:after {
  top: -45%;
  background-color: #87CEEB;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
.closebutton {
  position: absolute;
  right: 0;
  top: 0;
  width: 4em;
  height: 4em;
  border: none;
  background: rgba(180, 83, 107, 0.11);
  border-radius: 5px;
  transition: background 0.5s;
}

.X {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2em;
  height: 1.5px;
  background-color: rgb(255, 255, 255);
  transform: translateX(-50%) rotate(45deg);
}

.Y {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2em;
  height: 1.5px;
  background-color: #fff;
  transform: translateX(-50%) rotate(-45deg);
}

.close {
  position: absolute;
  display: flex;
  padding: 0.8rem 1.5rem;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  top: -70%;
  left: 50%;
  width: 3em;
  height: 1.7em;
  font-size: 12px;
  background-color: rgb(19, 22, 24);
  color: rgb(187, 229, 236);
  border: none;
  border-radius: 3px;
  pointer-events: none;
  opacity: 0;
}

.closebutton:hover {
  background-color: rgb(211, 21, 21);
}

.closebutton:active {
  background-color: rgb(130, 0, 0);
}

.closebutton:hover > .close {
  animation: close 0.2s forwards 0.25s;
}

@keyframes close {
  100% {
    opacity: 1;
  }
}





</style>