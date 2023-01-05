import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
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
    createChart(isFirst) {
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
                    // name: "亿元"
                },
            ],
            series: [
                {
                    name: "基础散点图",
                    type: "scatter",
                    // symbolSize: baseMethods.getSize(30),
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
                    data: [10, 20, 30],
                },
            ],
        };
        this.initChart(options, "getBaseScatterOption", isFirst);
    }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
        //    let obj= this.convertChartData(data)
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
            return {
                symbolSize: this.isUndefined(style.symbolSize) ? style.symbolSize[index] : item.symbolSize,
                label: {
                    show: this.isUndefined(style.showLabel) ? style.showLabel : item.label.show,
                    position: this.isUndefined(style.labelPosition) ? style.labelPosition : item.label.position,
                    color: this.isUndefined(style.labelColor) ? style.labelColor : item.label.color,
                    fontSize: this.isUndefined(style.labelSize) ? style.labelSize : item.label.fontSize,
                    fontWeight: this.isUndefined(style.labelWeight) ? style.labelWeight : item.label.fontWeight,
                },
                itemStyle: {
                    color: this.isUndefined(style.itemStyleColor) ? style.itemStyleColor[index] : item.itemStyle.color,
                },
            };
        });
        return series;
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getBaseScatterOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartBaseScatter;
