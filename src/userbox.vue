<template>
<div class="userbox">
<button class="boxbtn" @click="emit('userquit')"><b>退出账号</b></button>
<button class="boxbtn" ><b>账户管理</b></button>
</div>

</template>
<script setup>
const emit=defineEmits(['userquit'])
const props=defineProps(['users'])
</script>
<script>
export default {


}
</script>


<style>
.userbox{
   position: relative;
   margin-top: -5px;
   margin-right: 10px;
   display: flex;
   width: 150px;
   height: 200px;
   background-color: white;
   border-radius: 20px;
   flex-direction: column-reverse;
   justify-content: center;
}
.boxbtn{

    background-color: white;
    border-style: none;
    width: 100%;
    height: 20%;
}
.boxbtn:hover{
background-color: rgb(170, 176, 176);
}
.link{
    text-decoration: none;
     color: black;
}


</style>