import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import * as echarts from 'echarts'
/**
 * Echarts 基础柱状图
 * @class TiChartBaseBar
 * @param {Object}options
 */
class TiChartComplexBar extends TiAbstractChartType {
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
                    data: ["2018", "2019", "2020",'2021','2022'],
                },
            ],
            yAxis: [
                {
                    name: "亿元",
                },
            ],
            series: [
                {
                    name: "小蓝GDP",
                    type: "bar",
                    stack: "小蓝GDP",
                    // symbol: 'path://M214,1079l8-6h16l8,6-8,6H222Z',
                    barWidth: baseMethods.getSize(100),
                    // barGap: '-100%',
                    z: 10,
                    // label: {
                    //     show: true, //开启显示
                    //     position: "top", //在上方显示
                    //     // textStyle: {
                    //     //数值样式
                    //     color: "rgb(0, 255, 255)",
                    //     fontSize: baseMethods.getSize(24),
                    //     fontWeight: 400,
                    //     // },
                    //     // backgroundColor: 'rgba(40, 137, 219, 0.5)',
                    //     // formatter: function (params) {
                    //     //     return params.value + '亿元'
                    //     // },
                    //     // padding: [2.5, 4, 2.5, 4],
                    //     // borderRadius: 7.5
                    // },
                    itemStyle: {
                        // normal: {

                        //柱形图圆角，初始化效果
                        // barBorderRadius: [3.5, 3.5, 0, 0],
                        // color: function (params) {
                        //   var colorList = ['rgba(6,235,255,1)', 'rgba(43,235,192,1)', 'rgba(41,151,218,1)', 'rgba(6,118,216,1)', 'rgba(45,60,149,1)'];
                        //   return colorList[params.dataIndex]
                        // }
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: "rgba(0,255,255,0.5019607843137255)" },
                            { offset: 1, color: "rgba(0,255,255,0)" },
                        ]),
                        // },
                    },
                    data: [50.36, 60.73, 73.65, 90.46, 110.75]
                    // data: this.inputStatus.valueArr,
                },
                {
                    stack: "小蓝GDP",
                    type: "bar",
                    // symbol: 'path://M214,1079l8-6h16l8,6-8,6H222Z',
                    barWidth: baseMethods.getSize(100),
                    // barGap: '-100%',

                    z: 10,
                    itemStyle: {
                        color: "rgba(0,255,255)",
                        borderWidth: baseMethods.getSize(2),
                        borderColor: "rgba(0,255,255)",
                    },
                    data: [0, 0, 0, 0, 0],
                },
                {
                    type: "pictorialBar",
                    symbol: "circle",
                    // stack:'111',
                    // barWidth: this.baseMethods.getSize(80),
                    // symbolSize: ['800%', '1000%'],
                    symbolSize: [baseMethods.getSize(100), baseMethods.getSize(40)],
                    symbolOffset: [0, "90%"],
                    z: 2,
                    itemStyle: {
                        // normal: {
                        // color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        //     offset: 0,
                        //     color: 'rgba(87,229,255,0.09019607843137255)'
                        // },
                        // //  {
                        // //     offset: 0.5,
                        // //     color: '#0788EE'
                        // // }, {
                        // //     offset: 0.5,
                        // //     color: '#15B8F9'
                        // // },
                        // {
                        //     offset: 1,
                        //     color: 'rgba(61,225,255,0.6901960784313725)'
                        // }]),
                        // opacity: 1,
                        color: {
                            type: "radial",
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(92,255,255,0)", // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(96,255,255,0.6274509803921569)", // 100% 处的颜色
                                },
                            ],
                            global: false,
                        },
                        // }
                    },
                    data: [1, 1, 1, 1, 1],
                },
                {
                    // name: '年报上报率2',
                    type: "pictorialBar",
                    symbol: "path://M50,0 L100,0 L105,30 L45,30z",
                    // stack:'111',
                    // barWidth: 40,
                    slient: false,
                    // symbolSize: ['800%', '1000%'],
                    symbolSize: [baseMethods.getSize(810), baseMethods.getSize(80)],
                    symbolOffset: ["35%", "80%"],
                    z: 1,
                    itemStyle: {
                        // normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgba(16,255,246,0.11372549019607843)",
                            },
                            //  {
                            //     offset: 0.5,
                            //     color: '#0788EE'
                            // }, {
                            //     offset: 0.5,
                            //     color: '#15B8F9'
                            // },
                            {
                                offset: 1,
                                color: "rgba(1,255,245,0.3607843137254902)",
                            },
                        ]),
                        opacity: 1,
                        // }
                    },
                    data: [1],
                },
                {
                    // name: '年报上报率2',
                    type: "pictorialBar",
                    symbol: "path://M50,0 L100,0 L105,30 L45,30z",
                    // stack:'111',
                    // barWidth: 40,
                    slient: false,
                    // symbolSize: ['800%', '1000%'],
                    symbolSize: [baseMethods.getSize(790), baseMethods.getSize(84)],
                    symbolOffset: ["36%", "100%"],
                    z: 1,
                    itemStyle: {
                        // normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgba(16,255,246,0.11372549019607843)",
                            },
                            //  {
                            //     offset: 0.5,
                            //     color: '#0788EE'
                            // }, {
                            //     offset: 0.5,
                            //     color: '#15B8F9'
                            // },
                            {
                                offset: 1,
                                color: "rgba(1,255,245,0.3607843137254902)",
                            },
                        ]),
                        // }
                    },
                    data: [1],
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
                {
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                    itemStyle: {
                        borderRadius: style.borderRadius,
                    },
                },
            ],
        };
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart();
    }
}
export default TiChartComplexBar;
