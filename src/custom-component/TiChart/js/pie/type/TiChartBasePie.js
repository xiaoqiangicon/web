import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
/**
 * Echarts 基础饼图
 * @class TiEchartsBaseCircle
 * @param {Object}options
 */
class TiChartBasePie extends TiAbstractChartType {
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
                    name: "基础饼图",
                    type: "pie",
                    label: {
                        formatter: "{d}%",
                    },
                    data: [
                        { value: 10, name: "111" },
                        { value: 20, name: "222" },
                        { value: 30, name: "3333" },
                    ],
                },
            ],
        };
        this.initChart(options, "getBasePieOption", isFirst);
    }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
        // let obj = {
        //   series: [
        //     {
        //       data: data[0]
        //     }
        //   ]
        // };
        // this.option.config = baseMethods.assiginObj(this.option.config, obj);
        this.option.chartData = data;
        this.createChart();
    }
    convertChartData(data) {
        return {
            series: [
                {
                    data,
                },
            ],
        };
    }
    convertSeriesData(style, optionName) {
        let option = baseOption[optionName]();
        let series = [
            {
                startAngle: style.startAngle ?? option.series[0].startAngle,
                radius: this.isUndefined(style.radius) ? style.radius + "%" : option.series[0].radius,
                label: {
                    show: this.isUndefined(style.showLabel) ? style.showLabel : option.series[0].label.show,
                    position: this.isUndefined(style.labelPosition)
                        ? style.labelPosition
                        : option.series[0].label.position,
                    color: this.isUndefined(style.labelColor) ? style.labelColor : option.series[0].label.color,
                    fontSize: this.isUndefined(style.labelSize) ? style.labelSize : option.series[0].label.fontSize,
                    fontWeight: this.isUndefined(style.labelWeight)
                        ? style.labelWeight
                        : option.series[0].label.fontWeight,
                },
                center: this.isUndefined(style.pieCenter)
                    ? [style.pieCenter[0] + "%", style.pieCenter[1] + "%"]
                    : option.series[0].center,
            },
        ];

        return series;
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getBasePieOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}

export default TiChartBasePie;
