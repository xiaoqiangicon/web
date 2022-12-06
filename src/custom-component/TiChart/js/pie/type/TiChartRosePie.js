import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
/**
 * Echarts 南丁格尔玫瑰饼图
 * @class TiEchartsBaseCircle
 * @param {Object}options
 */
class TiChartRosePie extends TiAbstractChartType {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts
     */
    createChart(isFirst) {
        let options = {
            tooltip: {
                trigger: "item",
            },
            series: [
                {
                  roseType: "radius",
                    name: "基础饼图",
                    type: "pie",
                    // radius: [60+ '%', 75 + '%'],
                    label: {
                        // show: false, //开启显示
                        // position: "outside", //在上方显示
                        // color: "inherit",
                        formatter: "{d}%",
                        // fontSize: baseMethods.getSize(24),
                        // fontWeight: 700
                    },
                    data: [10, 20, 30],
                },
            ],
        };
        this.initChart(options, "getCirclePieOption",isFirst);
    }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
        let obj = {
            series: [
                {
                    data: data[0],
                },
            ],
        };
        this.option.config = baseMethods.assiginObj(this.option.config, obj);
        this.createChart();
    }
    convertSeriesData(style, optionName) {
      let option = baseOption[optionName]();
      let series = [{
            startAngle: style.startAngle ?? option.series[0].startAngle,
            radius: this.isUndefined(style.radius)?[style.radius[0]+'%',style.radius[1]+'%']:option.series[0].radius,
              label: {
                  show: this.isUndefined(style.showLabel)?style.showLabel:option.series[0].label.show,
                  position: this.isUndefined(style.labelPosition)?style.labelPosition:option.series[0].label.position,
                  color: this.isUndefined(style.labelColor)?style.labelColor:option.series[0].label.color,
                  fontSize: this.isUndefined(style.labelSize)?style.labelSize:option.series[0].label.fontSize,
                  fontWeight: this.isUndefined(style.labelWeight)?style.labelWeight:option.series[0].label.fontWeight,
              },
              center:this.isUndefined(style.pieCenter)?[style.pieCenter[0]+'%',style.pieCenter[1]+'%']:option.series[0].center,
          }];
  
      return series
  }
    changeChartStyle(style) {
      let convertStyle = this.convertStyleData(style, "getCirclePieOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}

export default TiChartRosePie;
