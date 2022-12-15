import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
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
                // {
                //     name: "亿元",
                // },
            ],
            series: [
                {
                    name: "基础柱状图",
                    type: "bar",
                    data: [10, 20, 30],
                },
            ],
        };
        this.initChart(options, "getBaseBarOption", isFirst);
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
        let convertStyle = this.convertStyleData(style, "getBaseBarOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartBaseBar;
