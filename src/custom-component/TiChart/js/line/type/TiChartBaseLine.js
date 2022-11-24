import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
/**
 * Echarts 基础折线图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartBaseLine extends TiAbstractChartType {
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
    convertStyleData(style){
      return {
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
                symbol: style.symbol,
                smooth: style.smooth,
                symbolSize: style.symbolSize,
                showSymbol: style.showSymbol,
                areaStyle: {
                    color: style.areaStyleColor,
                },
                label: {
                    show: style.showLabel,
                    position: style.labelPosition,
                    color: style.labelColor,
                    fontSize: style.labelSize,
                    fontWeight: style.labelWeight,
                },
            },
        ],
    };
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
                    symbol: style.symbol,
                    smooth: style.smooth,
                    symbolSize: style.symbolSize,
                    showSymbol: style.showSymbol,
                    areaStyle: {
                        color: style.areaStyleColor,
                    },
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                },
            ],
        };
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart();
    }
}
export default TiChartBaseLine;
