<template>
  <v-chart :option="option" :autoresize="autoresize" />
</template>

<script>
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import {TitleComponent,TooltipComponent,LegendComponent,GridComponent} from 'echarts/components'
use([
  CanvasRenderer,
  BarChart, 
  LineChart, 
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

export default {
  components: {
    VChart
  },
  props: {
    option: Object,
    autoresize: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>

</style>

