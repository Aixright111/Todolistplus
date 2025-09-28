<template>
<li :class="{liafter:props.checkval}" >
    <div class="state " :class="{state2:props.checkval}" ></div>
<div class="checkbox"><label class="container">
  <input  type="checkbox" 
   :disabled="disval"
   :checked="checkval"
   @change="$emit('update:checkval', $event.target.checked)"
  >
  <div class="checkmark"></div> </label></div>
  <h2 >{{ title }}</h2>
<button class="button" id="editbtn" @click="$emit('edit',props.id) ":disabled="disval"></button>
<button class="button" id="delbtn" @click="$emit('del',props.id)"></button>
</li>
</template>


<script setup>

import { computed,defineProps} from "vue";
const props=defineProps({
     id: [String, Number],
     checkval: Boolean,
        title:String
})

defineEmits(['update:checkval','del','edit'])
var disval=computed(()=>props.checkval)
</script>
<script>
export default {

}
</script>


<style scoped>
/* li样式 */
li{
    display: flex;
margin-top: 10px;
border-radius: 10px;
position: relative;
list-style: none;
width: 600px;
height: 40px;
background: white;
flex-direction: row;
align-items: center;
}
li:hover{
 box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
.liafter{
background: rgba(0, 0, 0, 0.4);

}
h2{
    width: 780px;
    margin: 3px 0 3px 0;
}
/* checkbox样式 */
.checkbox{

    display: inline-block;
width: 20px;
margin-right: 10px;
 }
.container input {
  display: none;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background-color: #2196F300;
  border-radius: 0.25em;
  transition: all 0.25s;
}


.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

.checkmark:after {
  content: "";
  position: absolute;
  transform: rotate(0deg);
  border: 0.1em solid black;
  left: 0;
  top: 0;
  width: 1.05em;
  height: 1.05em;
  border-radius: 0.25em;
  transition: all 0.25s, border-width 0.1s;
}

.container input:checked ~ .checkmark:after {
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border-color: #fff0 white white #fff0;
  border-width: 0 0.15em 0.15em 0;
  border-radius: 0em;
  transform: rotate(45deg);
}
/* button样式 */
.button {
  font-size: 20px;
  right: 0px;
  top:3px;
  cursor: pointer;
  background-color: rgb(255, 99, 99);
  border: 2px solid rgb(0, 0, 0);
  color: White;
  text-align: center;
  text-transform: uppercase;
  transition: all ease 0.3s;
  border-radius: 7px;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.button:hover {
  border-radius: 3px;
  background-color: rgb(255, 68, 68);
}
#delbtn::before {
  content: "Delete";
}
#editbtn::before{
content: "edit";

}
.state{margin-right: 8px;
 inset: 0;
  width: 20px;
 height: 100%;
 background-color: red;

}
.state2{
   background-color: rgb(15, 229, 15);
}


</style>