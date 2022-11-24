import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
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
    createChart() {
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
        this.initChart(options, "getCirclePieOption");
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
    changeChartStyle(style) {
        let convertStyle = {
            color: style.color.split("]"),
            series: [
                {
                    startAngle: style.startAngle,
                    radius: [style.radius[0] + "%", style.radius[1] + "%"],
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                },
            ],
        };
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart();
    }
}

export default TiChartRosePie;
