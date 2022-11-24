import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
/**
 * Echarts 基础折线图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartSixLine extends TiAbstractChartType {
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
                    name: "基础折线图",
                    type: "line",
                    data: [10, 20, 30],
                },
                {
                    name: "折线图",
                    type: "line",
                    data: [30, 20, 10],
                },
                {
                    name: "基础折线图",
                    type: "line",
                    data: [60, 50, 40],
                },
                {
                    name: "折线图",
                    type: "line",
                    data: [40, 50, 60],
                },
                {
                    name: "基础折线图",
                    type: "line",
                    data: [90, 80, 70],
                },
                {
                    name: "折线图",
                    type: "line",
                    data: [70, 80, 90],
                },
            ],
        };
        this.initChart(options, "getSixOption");
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
                    inverse:style.xAxisInverse,
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
                  inverse:style.yAxisInverse,
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
                    symbol: style.symbol[0],
                    smooth: style.smooth[0],
                    symbolSize: style.symbolSize[0],
                    showSymbol: style.showSymbol[0],
                    areaStyle: {
                        color: style.areaStyleColor[0],
                    },
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                },
                {
                    symbol: style.symbol[1],
                    smooth: style.smooth[1],
                    symbolSize: style.symbolSize[1],
                    showSymbol: style.showSymbol[1],
                    areaStyle: {
                        color: style.areaStyleColor[1],
                    },
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                },
                {
                    symbol: style.symbol[2],
                    smooth: style.smooth[2],
                    symbolSize: style.symbolSize[2],
                    showSymbol: style.showSymbol[2],
                    areaStyle: {
                        color: style.areaStyleColor[2],
                    },
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                },
                {
                    symbol: style.symbol[3],
                    smooth: style.smooth[3],
                    symbolSize: style.symbolSize[3],
                    showSymbol: style.showSymbol[3],
                    areaStyle: {
                        color: style.areaStyleColor[3],
                    },
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                },
                {
                    symbol: style.symbol[4],
                    smooth: style.smooth[4],
                    symbolSize: style.symbolSize[4],
                    showSymbol: style.showSymbol[4],
                    areaStyle: {
                        color: style.areaStyleColor[4],
                    },
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                },
                {
                    symbol: style.symbol[5],
                    smooth: style.smooth[5],
                    symbolSize: style.symbolSize[5],
                    showSymbol: style.showSymbol[5],
                    areaStyle: {
                        color: style.areaStyleColor[5],
                    },
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                }
            ],
        };
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart();
    }
}
export default TiChartSixLine;
