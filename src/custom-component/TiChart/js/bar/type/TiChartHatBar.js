import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
/**
 * Echarts 基础柱状图
 * @class TiChartBaseBar
 * @param {Object}options
 */
class TiChartHatBar extends TiAbstractChartType {
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
                    name: "数据内框",
                    type: "bar",
                    barWidth: baseMethods.getSize(24),
                    data: [11, 33, 77, 39, 55]
                    // data: this.inputStatus.valueArr,
                },
                {
                    // name:'数据内框',
                    type: "pictorialBar",
                    symbol: "path:// M 5, -5A5,5 0 1,0 5,5L24,-5M5, 5L24,5A5,5 0 1,0 24,-5z",
                    // symbol:'path:// M 100, 100m -75, 0a75,75 0 1,0 150,0a75,75 0 1,0 -150,0',
                    // "symbol": 'path://M1.88379 4.22217C1.88379 5.32837 2.31836 6.42627 3.06348 7.20874C3.80762 7.98853 4.85742 8.44434 5.91406 8.44434C6.96973 8.44434 8.01465 7.98853 8.76172 7.20581C9.50879 6.42627 9.94434 5.32568 9.94434 4.22217C9.94434 3.1189 9.50879 2.01538 8.76172 1.2356C8.01465 0.453125 6.9668 0 5.91406 0C4.86035 0 3.80762 0.453125 3.06348 1.2356C2.28027 2.0625 1.8877 3.05811 1.88379 4.22217ZM10.7471 9.85181L1.34375 9.85181C0.448242 9.85181 0 10.321 0 11.2593L0 22.5156C0 23.4539 0.448242 23.9231 1.34375 23.9231L2.68652 23.9231L2.68652 36.5925C2.68652 37.5308 3.13477 38 4.03027 38L8.06055 38C8.95605 38 9.4043 37.5308 9.4043 36.5925L9.4043 23.9204L10.7471 23.9204C11.6436 23.9204 12.0908 23.4512 12.0908 22.5129L12.0908 11.2593C12.0908 10.321 11.6436 9.85181 10.7471 9.85181Z',
                    //  'symbol':'fixed',
                    //  stack:'aa',
                    // type:'bar',
                    symbolSize: [baseMethods.getSize(32), baseMethods.getSize(6)],
                    symbolPosition: "end",
                    symbolOffset: [0, -baseMethods.getSize(6)],
                    // "symbolBoundingData":100,
                    "data": [
                      11, 33, 77, 39, 55
                    ],
                    // data: this.inputStatus.valueArr,
                    // barWidth:20,
                    // barGap: '-5%',

                    z: 10,
                    itemStyle: {
                        color: "#fff",
                        //  borderRadius:10,
                    },
                },
                {
                    name: "外框",
                    type: "bar",
                    itemStyle: {
                        // normal: {
                        // barBorderRadius: 30,
                        color: "rgba(255, 255, 255, 0.14)", //rgba设置透明度0.14
                        // }
                    },
                    barGap: "-100%",
                    label: {
                        show: false,
                        position: "top",
                        color: "#fff",
                        fontSize: baseMethods.getSize(16),
                    },
                    z: 0,
                    barWidth: baseMethods.getSize(24),
                    data: [100, 100, 100, 100, 100],
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
export default TiChartHatBar;
