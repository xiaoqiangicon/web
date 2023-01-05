import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
/**
 * Echarts 基础折线图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartSixPictorialBar extends TiAbstractChartType {
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
            // yAxis: [
            //     {
            //         // name: "亿元",
            //     },
            // ],
            series: [
                {
                    // 分隔
                    type: "pictorialBar",
                    name: "电机电器",

                    data: [10, 20, 30],
                },
                {
                    // 分隔
                    name: "医药医器",
                    type: "pictorialBar",

                    data: [10, 20, 30],
                },
                {
                    // 分隔
                    name: "食品饮料",
                    type: "pictorialBar",

                    data: [10, 20, 30],
                },
                {
                    // 分隔
                    name: "轻纺服装",
                    type: "pictorialBar",

                    data: [10, 20, 30],
                },
                {
                    // 分隔
                    name: "汽车汽配",
                    type: "pictorialBar",

                    data: [10, 20, 30],
                    // animationEasing: "elasticOut"
                },
                {
                    // 分隔
                    name: "其他产业",
                    type: "pictorialBar",
                    data: [10, 20, 30],
                },
            ],
        };
        this.initChart(options, "getSixPictorialBarOption", isFirst);
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
            series: data[1].map((item) => {
                return {
                    data: item,
                };
            }),
        };
    }
    convertSeriesData(style, optionName) {
        let option = baseOption[optionName]();
        let series = option.series.map((item, index) => {
            return {
                itemStyle: {
                    color: this.isUndefined(style.itemStyleColor) ? style.itemStyleColor[index] : item.itemStyle.color,
                },
            };
        });
        return series;
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getSixPictorialBarOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartSixPictorialBar;
