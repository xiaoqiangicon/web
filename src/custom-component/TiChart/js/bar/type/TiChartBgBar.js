import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
/**
 * Echarts 基础柱状图
 * @class TiChartBaseBar
 * @param {Object}options
 */
class TiChartBgBar extends TiAbstractChartType {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts
     */
    createChart() {
        let options = {
            tooltip: {
                trigger: "axis",
            },
            xAxis: [
                {
                    data: ["2018", "2019", "2020"],
                },
            ],
            yAxis: [
                {
                    name: "亿元",
                },
            ],
            series: [
                {
                    name: "规上企业数",
                    type: "pictorialBar",
                    symbol: "rect",
                    barWidth: baseMethods.getSize(120),
                    // barGap:"-100%",
                    // "z": 10,
                    // symbolOffset:['-10%',0],
                    itemStyle: {
                        color: "rgba(138, 193, 255,0.1)",
                    },
                    data: [100, 100, 100],
                },
                {
                    name: "规上企业数",
                    type: "pictorialBar",
                    // symbol: 'path://M214,1079l8-6h16l8,6-8,6H222Z',
                    barWidth: baseMethods.getSize(120),
                    // barGap:"-100%",
                    // "z": 10,
                    symbol: "rect",
                    // symbolOffset:['-10%',0],
                    itemStyle: {
                        color: "rgba(138, 193, 255,0.1)",
                    },
                    data: [-100, -100, -100],
                },
                {
                    name: "规上企业主营业务收入(万)",
                    type: "bar",
                    // barGap:"-100%",
                    // symbol: 'rect',
                    barWidth: baseMethods.getSize(70),
                    // barWidth: "60%",
                    // stack: "总量",
                    // symbolOffset:['10%',0],
                    // label: {
                    //   show: true,
                    //   position: 'bottom',
                    //   // textStyle: {
                    //     color: "rgb(255, 203, 0)",
                    //     fontSize: baseMethods.getSize(26),
                    //     fontWeight:700
                    //   // },
                    //   // formatter: function (params) {
                    //   //   return params.value + '家'
                    //   // },
                    // },
                    // itemStyle: {
                    //   // normal: {
                    //     color: 'rgb(255, 203, 0)'
                    //   // },
                    // },
                    data: [37, 51, 63],
                    // data:data
                },
            ],
        };
        this.chartObject.setOption(options);
        let maxY = this.chartObject.getModel().getComponent("yAxis").axis.scale._extent[1];
        let minY = this.chartObject.getModel().getComponent("yAxis").axis.scale._extent[0];
        options.series[0].data = new Array(3).fill(maxY);
        options.series[1].data = new Array(3).fill(minY);
        this.initChart(options, "getBgBarOption");
    }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
        let obj = {
            xAxis: {
                data: data[0],
            },
            series: [
                {
                    data: data[1],
                },
            ],
        };
        this.option.config = baseMethods.assiginObj(this.option.config, obj);
        this.createChart();
    }
    changeChartStyle(style) {
        let convertStyle = {
            color: style.color,
            xAxis: [
                {
                    boundaryGap: style.xAxisBoundaryGap,
                    inverse: style.xAxisInverse,
                    axisLine: {
                        lineStyle: {
                            color: style.xAxisColor,
                        },
                        show: style.showXAxis,
                    },
                    axisLabel: {
                        color: style.xAxisLabelColor,
                        fontSize: style.xAxisLabelSize,
                        show: style.showXAxisLabel,
                        margin: style.xAxisLabelMargin,
                    },
                    axisTick: {
                        show: style.showXAxisTick,
                    },
                    name: style.xAxisName,
                    nameGap: style.xAxisNameGap,
                    nameTextStyle: {
                        color: style.xAxisNameColor,
                    },
                },
            ],
            yAxis: [
                {
                    boundaryGap: style.yAxisBoundaryGap,
                    inverse: style.yAxisInverse,
                    axisLine: {
                        lineStyle: {
                            color: style.yAxisColor,
                        },
                        show: style.showYAxis,
                    },
                    axisLabel: {
                        color: style.yAxisLabelColor,
                        fontSize: style.yAxisLabelSize,
                        show: style.showYAxisLabel,
                        margin: style.yAxisLabelMargin,
                    },
                    axisTick: {
                        show: style.showYAxisTick,
                    },
                    name: style.yAxisName,
                    nameGap: style.yAxisNameGap,
                    nameTextStyle: {
                        color: style.yAxisNameColor,
                    },
                },
            ],
            series: [
                {},
                {},
                {
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                    itemStyle: {
                        borderRadius: style.borderRadius[0],
                    },
                },
            ],
        };
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart();
    }
}
export default TiChartBgBar;
