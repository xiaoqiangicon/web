import TiAbstractChartType from '../../TiAbstractChartType'
import baseMethods from '../../common'
/**
 * Echarts 基础柱状图
 * @class TiChartBaseBar
 * @param {Object}options
 */
 class TiChartBaseBar extends TiAbstractChartType {
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
        trigger: "axis"
      },
      xAxis: [
        {
          data: ["2018", "2019", "2020"]
        }
      ],
      yAxis: [
        {
          name: "亿元"
        }
      ],
      series: [
        {
          name: "基础柱状图",
          type: "bar",
          barWidth: baseMethods.getSize(30),
          // label: {
          //   show: true, //开启显示
          //   position: "top", //在上方显示
          //   color: "#fff",
          //   fontSize: baseMethods.getSize(24),
          //   fontWeight: 700
          // },
          // itemStyle: {
          //   color: "#fff"
          // },
          data: [10, 20, 30]
        }
      ]
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
        data: data[0]
      },
      series: [
        {
          data: data[1]
        }
      ]
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
                label: {
                    show: style.showLabel,
                    position: style.labelPosition,
                    color: style.labelColor,
                    fontSize: style.labelSize,
                    fontWeight: style.labelWeight,
                },
                itemStyle:{
                  borderRadius:style.borderRadius[0]
                }
            },
        ],
    };
    this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
    this.createChart();
}
}
export default TiChartBaseBar;