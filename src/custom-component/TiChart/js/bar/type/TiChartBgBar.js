import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
/**
 * Echarts 基础柱状图
 * @class TiChartBaseBar
 * @param {Object}options
 */
class TiChartBgBar extends TiAbstractChartType {
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
                trigger: "axis",
                formatter: parms=> {
                    var str =
                      "年份：" +
                      parms[0].axisValue +
                      "</br>" +
                      parms[2].marker +
                      
                      parms[2].value +
                      "%</br>"
                    // parms[2].marker +
                    // '企业' +"："
                    return str;
                  },
            },
            xAxis: [
                {
                    data: ["2018", "2019", "2020"],
                },
            ],
            yAxis: [
                {
                    // name: "亿元",
                },
            ],
            series: [
                {
                    type: "pictorialBar",
                    symbol: "rect",
                    barWidth: baseMethods.getSize(120),
                    itemStyle: {
                        color: "rgba(138, 193, 255,0.2)",
                    },
                    data: [0, 0, 0],
                },
                {
                    type: "pictorialBar",
                    barWidth: baseMethods.getSize(120),
                    symbol: "rect",
                    itemStyle: {
                        color: "rgba(138, 193, 255,0.2)",
                    },
                    data: [-0, -0, -0],
                },
                {
                    name: "规上企业主营业务收入(万)",
                    type: "bar",
                    data: this.option.chartData[1]? this.option.chartData[1]:[37, 51, 63],
                },
            ],
        };
        this.chartObject.setOption(options);
        let maxY = this.chartObject.getModel().getComponent("yAxis").axis.scale._extent[1];
        let minY = this.chartObject.getModel().getComponent("yAxis").axis.scale._extent[0];
        options.series[0].data = new Array(this.option.chartData[1]?.length||3).fill(maxY);
        options.series[1].data = new Array(this.option.chartData[1]?.length||3).fill(minY);
        this.initChart(options, "getBgBarOption",isFirst);
    }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
        // let obj = {
        //     xAxis: {
        //         data: data[0],
        //     },
        //     series: [
        //         {
        //             data: data[1],
        //         },
        //     ],
        // };
        // this.option.config = baseMethods.assiginObj(this.option.config, obj);
        this.option.chartData = data;
        this.createChart();
    }
    convertChartData(data) {
        return {
            xAxis: [
                {
                    data: data[0],
                },
            ],
            series: [
                {
                    data: data[1],
                },
            ],
        };
    }
    convertSeriesData(style, optionName) {
        let option = baseOption[optionName]();
        let series = option.series.map((item, index) => {
            if(index<2) return {}
            return {
                label: {
                    show: this.isUndefined(style.showLabel) ? style.showLabel[index] : item.label.show,
                    position: this.isUndefined(style.labelPosition) ? style.labelPosition[index] : item.label.position,
                    color: this.isUndefined(style.labelColor) ? style.labelColor[index] : item.label.color,
                    fontSize: this.isUndefined(style.labelSize) ? style.labelSize[index] : item.label.fontSize,
                    fontWeight: this.isUndefined(style.labelWeight) ? style.labelWeight[index] : item.label.fontWeight,
                },
                itemStyle: {
                    borderRadius: this.isUndefined(style.borderRadius)
                        ? style.borderRadius[index]
                        : item.itemStyle.borderRadius,
                    color: this.isUndefined(style.itemStyleColor) ? style.itemStyleColor[index] : item.itemStyle.color,
                },
                barWidth:this.isUndefined(style.barWidth) ? style.barWidth[index] : item.barWidth,
            };
        });
        return series;
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getBgBarOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartBgBar;
