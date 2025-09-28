<template>
  <div class="task-progress" :style="{ height, borderRadius }">
    <!-- 确定性进度 -->
    <div
      v-if="!indeterminate"
      class="task-progress__bar"
      :style="barStyle"
    >
      <slot :percent="displayPercent">
        <span class="task-progress__text">{{ displayPercent }}%</span>
      </slot>
    </div>

    <!-- 无限加载动画
    <div v-else class="task-progress__indeterminate">
      <div class="task-progress__indeterminate-rod"></div>
    </div> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /* 已完成数 */
  done:   { type: Number, default: 0 },
  /* 总数；如果<=0 则进入 indeterminate 模式 */
  total:  { type: Number, default: 0 },
  /* 直接给百分比，优先级高于 done/total */
  percent:{ type: Number, default: null },
  /* 高度 */
  height: { type: String, default: '8px' },
  /* 圆角 */
  borderRadius: { type: String, default: '4px' },
  /* 动画时长 */
  duration: { type: String, default: '.3s' },
  /* 自定义颜色；不传入则按百分比自动 */
  color:  { type: String, default: '' }
})

/* 计算百分比 */
const displayPercent = computed(() => {
  if (props.percent !== null) return Math.min(100, Math.max(0, props.percent))
  if (!props.total) return 0
  return Math.round((props.done / props.total) * 100)
})

/* 是否未知总量 */
const indeterminate = computed(() => props.total <= 0 && props.percent === null)

/* 条宽度 & 背景色 */
const barStyle = computed(() => {
  const percent = displayPercent.value
  return {
    width: percent + '%',
    background: props.color || autoColor(percent),
    transition: `width ${props.duration} ease`
  }
})

/* 自动颜色：绿→黄→红 */
function autoColor(p) {
  if (p < 30) return '#ff4d4f'
  if (p < 70) return '#faad14'
  return '#52c41a'
}
</script>

<style scoped>
.task-progress{

  margin-top: 70px;
  width: 50%;
  background: #f0f0f0;
  overflow: hidden;
  position: relative;
}
.task-progress:hover{
    cursor: pointer;
     box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
.task-progress__bar{
  
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 8px;
  white-space: nowrap;
  color: #fff;
  font-size: 12px;
  min-width: 20px; /* 保证 0% 也能看到一点 */
}
.task-progress__text{
  font-size: 30px;
  margin-left: auto;
  color: black;

  font-weight:bolder;
  transform: scale(.9);
}
/* 无限加载 */
.task-progress__indeterminate{
  height: 100%;
  position: relative;
}
.task-progress__indeterminate-rod{
  position: absolute;
  height: 100%;
  width: 30%;
  background: rgb(147, 29, 225);
  border-radius: inherit;
  animation: slide 1.5s ease-in-out infinite;
}
@keyframes slide {
  0%   { left: -30%; }
  100% { left: 100%; }
}

</style>