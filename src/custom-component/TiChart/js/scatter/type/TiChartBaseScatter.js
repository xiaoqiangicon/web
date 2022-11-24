import TiAbstractChartType from '../../TiAbstractChartType'
import baseMethods from '../../common'
/**
 * Echarts 基础散点图
 * @class TiChartBaseScatter
 * @param {Object}options
 */
 class TiChartBaseScatter extends TiAbstractChartType {
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
          name: "基础散点图",
          type: "scatter",
          symbolSize: baseMethods.getSize(30),
          label: {
            show: true, //开启显示
            position: "top", //在上方显示
            color: "#fff",
            fontSize: baseMethods.getSize(24),
            fontWeight: 700
          },
          itemStyle: {
            color: "#fff"
          },
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
}
export default TiChartBaseScatter;