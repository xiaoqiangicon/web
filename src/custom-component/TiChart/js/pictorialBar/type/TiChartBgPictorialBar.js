import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
/**
 * Echarts 带有背景的象形柱图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartBgPictorialBar extends TiAbstractChartType {
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
                    name: '规上企业数',
                    type: 'bar',
                    // symbol: 'path://M214,1079l8-6h16l8,6-8,6H222Z',
                    // barWidth: 70,
                    // barGap: '-100%',
                    // "z": 10,
                    itemStyle: {
        
                      color: 'rgba(138, 193, 255,0.1)'
                    },
                    data: [0, 0, 0]
                  },
                {
                    name: "规上企业主营业务收入(万)",
                    type: "pictorialBar",
                    symbol:
                      "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                    // "symbol": "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                    // data: [37, 51, 63, 80, 87],
                    data:[10,20,30]
                  },
            ],
        };
        this.initChart(options, "getBgPictorialBarOption");
        let maxY = this.chartObject.getModel().getComponent('yAxis').axis.scale._extent[1]
        options.series[0].data = new Array(options.series[1].data.length).fill(maxY)
        this.initChart(options, "getBgPictorialBarOption");
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
            series:[
                {

                },
                {
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
export default TiChartBgPictorialBar;
