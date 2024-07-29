# VSlider 滑块

:::demo
```vue
<template>
    <V-Slider :min="minValue" :max="maxValue" v-model="inputValue"></V-Slider>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
         const inputValue = ref(12);
         const minValue = ref(0);
         const maxValue = ref(20);
         return {
            inputValue,
            maxValue,
            minValue,
        };
    }
})
</script>
```
:::