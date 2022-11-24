<template>
    <div style="height: 100%" ref="chart"></div>
</template>

<script>
import { default as TiChart } from "./js/TiChart.js";
export default {
    // name: "TiChart",
    components: {},
    data() {
        return {
            chartObject: null,
        };
    },
    props: {
        config: {
            type: Object,
            default: () => {},
        },
        category: {
            type: String,
            default: "line",
        },
        type: {
            type: String,
            default: "baseLine",
        },
        eventListener: {
            type: Array,
            default: () => [],
        },
        chartId: {
            type: [String, Number],
            default: "",
        },
        chartData: {
            type: Array,
            default: () => [],
        },
        styleData:{
            type: Object,
            default: () => {}
        }
    },
    watch: {
        config: {
            handler(newVal, oldVal) {
                this.initChart();
            },
            deep: true,
        },
        chartData: {
            handler(newVal, oldVal) {
                this.changeChartData(newVal);
            },
            deep: true,
        },
        styleData: {
            handler(newVal, oldVal) {
                this.changeChartStyle(newVal);
            },
            deep: true,
        },
    },
    mounted() {
        this.initChart();
    },
    methods: {
        changeChartStyle(style){
            this.chartObject.changeChartStyle(style);
        },
        changeChartData(data) {
            this.chartObject.dynamicChart(data);
        },
        initChart() {
            if (this.chartObject) this.chartObject.renderChart(this.config);
            else
                this.chartObject = new TiChart({
                    category: this.category,
                    type: this.type,
                    dom: this.$refs.chart,
                    config: this.config,
                    eventListener: this.eventListener,
                    chartId: this.chartId,
                    chartData: this.chartData,
                    styleData:{
                    //     // color:'#fff'
                    }
                    // styleData:this.styleData
                });
        },
    },
    beforeDestroy() {
        this.chartObject.destory();
    },
};
</script>

<style ></style>
