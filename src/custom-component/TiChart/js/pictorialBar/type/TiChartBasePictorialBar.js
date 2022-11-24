import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
/**
 * Echarts 基础折线图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartBasePictorialBar extends TiAbstractChartType {
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
                    name: "规上企业主营业务收入(万)",
                    type: "pictorialBar",
                    // barWidth: "60%",
                    // stack: "总量",
                    // label: {
                    //   show: true,
                    //   position: "top",
                    //   // textStyle: {
                    //     color: "#fff",
                    //     fontSize: this.getSize(26),
                    //     fontWeight:700
                    //   // },
                    //   // formatter: function (params) {
                    //   //   return params.value + '家'
                    //   // },
                    // },
                    // itemStyle: {
                    //   // normal: {
                    //     color: {
                    //       type: "linear",
                    //       x: 0,
                    //       y: 0,
                    //       x2: 0,
                    //       y2: 1,
                    //       colorStops: [
                    //         {
                    //           offset: 0,
                    //           color: "rgba(255,237,59,1)",
                    //         },
                    //         {
                    //           offset: 1,
                    //           color: "rgba(255,52,52,0.17647058823529413)",
                    //         },
                    //       ],
                    //       globalCoord: false,
                    //     },
                    //   // },
                    // },
                    symbol:
                      "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                    // "symbol": "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                    // data: [37, 51, 63, 80, 87],
                    data:[10,20,30]
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
export default TiChartBasePictorialBar;
