<template>
  <div>
    <div style="width:50%;height:200px;" :id="echarts" class="echarts"  ref="echarts"></div>
  </div>
</template>

<script>
// 引入echarts
import echarts from 'echarts'
export default {
  name: 'echart1',
  props: {
    // 接收父组件传递过来的信息
    chartData: {
      type: Array,
      default: ()=>[]
    }
  },
  data () {
    return {}
  },
  methods: {
    drawChart () {
      const vm = this
      // 基于准备好的dom，初始化echarts实例
     var myChart =echarts.init(document.getElementById(this.echarts))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: this.chartData
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  },
  computed: {
    echarts() {
      return 'echarts' + Math.random()*100000
    }
  },
    mounted: function () {
        const vm = this
        vm.$nextTick(()=> {
            vm.drawChart()
      })
  },
  created: () => {}
}
</script>

<style scoped>
</style>