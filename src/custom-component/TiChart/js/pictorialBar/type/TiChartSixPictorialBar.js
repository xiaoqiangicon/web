import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
/**
 * Echarts 基础折线图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartSixPictorialBar extends TiAbstractChartType {
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
            // yAxis: [
            //     {
            //         // name: "亿元",
            //     },
            // ],
            series: [
                {
                    // 分隔
                    type: "pictorialBar",
                    name:'电机电器',
                    itemStyle: {
                      normal: {
                        color: "rgb(255, 162, 11)"
                      }
                    },
                    symbolRepeat: "fixed",
                    symbolMargin: 1,
                    symbol: "rect",
                    symbolClip: true,
                    symbolSize: [baseMethods.getSize(10), baseMethods.getSize(12)],
                    symbolPosition: "start",
                    // symbolOffset: [0, 0],
                    
                    data: [10,20,30],
                    z: 2,
                    // barGap:'10%',
                    // animationEasing: "elasticOut"
                  },
                  {
                    // 分隔
                    name:'医药医器',
                    type: "pictorialBar",
                    itemStyle: {
                      normal: {
                        color: "rgb(5, 222, 255)"
                      }
                    },
                    symbolRepeat: "fixed",
                    symbolMargin: 1,
                    symbol: "rect",
                    symbolClip: true,
                    symbolSize: [baseMethods.getSize(10), baseMethods.getSize(12)],
                    symbolPosition: "start",
                    // symbolOffset: [0, 0],
                    data: [10,20,30],
                    // barGap:'10%',
                    z: 2
                    // animationEasing: "elasticOut"
                  },
                  {
                    // 分隔
                    name:'食品饮料',
                    type: "pictorialBar",
                    itemStyle: {
                      normal: {
                        color: "rgb(169, 99, 255)"
                      }
                    },
                    symbolRepeat: "fixed",
                    symbolMargin: 1,
                    symbol: "rect",
                    symbolClip: true,
                    symbolSize: [baseMethods.getSize(10), baseMethods.getSize(12)],
                    symbolPosition: "start",
                    // symbolOffset: [0, 0],
                    data: [10,20,30],
                    z: 2
                    // animationEasing: "elasticOut"
                  },
                  {
                    // 分隔
                    name:'轻纺服装',
                    type: "pictorialBar",
                    itemStyle: {
                      normal: {
                        color: "rgb(63, 229, 142)"
                      }
                    },
                    symbolRepeat: "fixed",
                    symbolMargin: 1,
                    symbol: "rect",
                    symbolClip: true,
                    symbolSize: [baseMethods.getSize(10), baseMethods.getSize(12)],
                    symbolPosition: "start",
                    // symbolOffset: [0, 0],
                    data: [10,20,30],
                    z: 2
                    // animationEasing: "elasticOut"
                  },
                  {
                    // 分隔
                    name:'汽车汽配',
                    type: "pictorialBar",
                    itemStyle: {
                      normal: {
                        color: "rgb(49, 117, 255)"
                      }
                    },
                    symbolRepeat: "fixed",
                    symbolMargin: 1,
                    symbol: "rect",
                    symbolClip: true,
                    symbolSize: [baseMethods.getSize(10), baseMethods.getSize(12)],
                    symbolPosition: "start",
                    // symbolOffset: [0, 0],
                    data: [10,20,30],
                    z: 2,
                    barGap:'-60%',
                    // animationEasing: "elasticOut"
                  },
                  {
                    // 分隔
                    name:'其他产业',
                    type: "pictorialBar",
                    itemStyle: {
                      normal: {
                        color: "rgb(159, 159, 159)"
                      }
                    },
                    symbolRepeat: "fixed",
                    symbolMargin: 1,
                    symbol: "rect",
                    symbolClip: true,
                    symbolSize: [baseMethods.getSize(10), baseMethods.getSize(12)],
                    symbolPosition: "start",
                    // symbolOffset: [0, 0],
                    data: [10,20,30],
                    z: 2,
                    barGap:'-60%',
                    // animationEasing: "elasticOut"
                  },
            ],
        };
        this.initChart(options, "getAxisOption");
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
          color:style.color,
            xAxis: [
                {
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
            series:[{
              label:{
                show:style.showLabel,
                position:style.labelPosition,
                color:style.labelColor,
                fontSize:style.labelSize,
                fontWeight:style.labelWeight
              }
            }]
        };
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
       
        this.createChart();
    }
}
export default TiChartSixPictorialBar;
