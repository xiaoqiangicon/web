import TiSubPub from "./TiSubPub";
import * as echarts from "echarts";
import baseOption from "./baseOption";
import baseMethods from "./common";
/**
 * 抽象chart类型类
 * @class TiAbstractChartType
 * @param {Object}options
 */
class TiAbstractChartType {
    constructor(option) {
        if (new.target === TiAbstractChartType) throw new Error("抽象类不能直接实例化!");
        // this.option = JSON.parse(JSON.stringify(option));
        this.option=option
        this.chartObject = echarts.init(option.dom);
        this.resizefunction = this.createChart.bind(this);
        addEventListener("resize", this.resizefunction);
        this.beforeunloadfunction = this.cleanUp.bind(this);
        addEventListener("beforeunload", this.beforeunloadfunction);
        this.createChart();
    }
    /**
     * Abstract
     * @description 创建Echarts
     */
    createChart() {
        throw new Error("抽象方法不能调用!");
    }
    /**
     * @description 重新调整图表大小
     */
    resize() {
        this.chartObject.resize();
    }
    /**
     * @description 销毁图表
     */
    destory() {
        removeEventListener("resize", this.resizefunction);
        removeEventListener("beforeunload", this.beforeunloadfunction);
        this.destoryChartEvent();
        this.cleanUp();
    }
    /**
     * private
     * @description 清除图表实例
     */
    cleanUp() {
        if (!this.chartObject) {
            return;
        }
        this.chartObject.clear();
        this.chartObject.dispose();
        this.chartObject = null;
    }
    /**
     * @description 渲染图表
     * @param {Object} config 配置
     */
    renderChart(config) {
        this.option.config = config;
        this.createChart();
    }
    /**
     * private
     * @description 初始化图表
     * @param {Object} options
     * @param {String} optionName
     */
    initChart(options, optionName, isFirst) {
        !isFirst ? (this.option.styleData = this.convertStyleData(this.option.styleData, optionName)) : "";
        let styleOption = baseMethods.assiginObj(baseOption[optionName](), this.option.styleData);
        let finalOption = baseMethods.assiginObj(styleOption, options);
        if (JSON.stringify(this.option.config) === "{}");
        else finalOption = baseMethods.assiginObj(finalOption, this.option.config);
        if(JSON.stringify(this.option.chartData) === "[]");
        else finalOption = baseMethods.assiginObj(finalOption, this.convertChartData(this.option.chartData));
        this.chartObject.setOption(finalOption);
        this.initChartEvent();
        this.chartObject.resize();
    }
    /**
     * private
     * @description 初始化图表事件click、dblclick、mousedown、mousemove、mouseup、mouseover、mouseout、globalout、contextmenu
     */
    initChartEvent() {
        this.option.eventListener.forEach((item) => {
            this.chartObject.on(item, (params) => {
                TiSubPub.publish(item, params, this.option.chartId);
            });
        });
    }
    /**
     * private
     * @description 销毁图表事件
     */
    destoryChartEvent() {
        this.option.eventListener.forEach((item) => {
            this.chartObject.off(item);
        });
    }
    /**
     * private
     * @description 转换样式
     * @param {Object} style
     * @param {String} optionName
     */
    convertStyleData(style, optionName) {
        if(!style) return {}
        let option = baseOption[optionName]();
        return {
            color: this.isUndefined(style.color) ? style.color.split("]") : option.color,
            grid: {
                top: this.isUndefined(style.gridTop) ? style.gridTop + "%" : option.grid.top,
                left: this.isUndefined(style.gridLeft) ? style.gridLeft + "%" : option.grid.left,
                bottom: this.isUndefined(style.gridBottom) ? style.gridBottom + "%" : option.grid.bottom,
                right: this.isUndefined(style.gridRight) ? style.gridRight + "%" : option.grid.right,
                containLabel: style.containLabel ?? option.grid.containLabel,
            },
            legend: {
                show: style.showLegend ?? option.legend.show,
                icon: style.legendIcon ?? option.legend.icon,
                orient: style.legendOrient ?? option.legend.orient,
                itemGap: style.legendItemGap ?? option.legend.itemGap,
                itemWidth: style.legendItemWidth ?? option.legend.itemWidth,
                itemHeight: style.legendItemHeight ?? option.legend.itemHeight,
                textStyle: {
                    color: style.legendTextColor ?? option.legend.textStyle.color,
                    fontWeight: style.legendTextFontWeight ?? option.legend.textStyle.fontWeight,
                    fontSize: style.legendTextFontSize ?? option.legend.textStyle.fontSize,
                },
            },
            title: {
                show: style.showTitle ?? option.title.show,
                text: style.titleText ?? option.title.text,
                subtext: style.titleSubtext ?? option.title.subtext,
                textStyle: {
                    color: style.titleTextColor ?? option.title.textStyle.color,
                    fontWeight: style.titleTextFontWeight ?? option.title.textStyle.fontWeight,
                    fontSize: style.titleTextFontSize ?? option.title.textStyle.fontSize,
                },
                subtextStyle: {
                    color: style.titleSubtextColor ?? option.title.subtextStyle.color,
                    fontWeight: style.titleSubtextFontWeight ?? option.title.subtextStyle.fontWeight,
                    fontSize: style.titleSubtextFontSize ?? option.title.subtextStyle.fontSize,
                },
                left: this.isUndefined(style.titleLeft) ? style.titleLeft + "%" : option.title.left,
                top: this.isUndefined(style.titleTop) ? style.titleTop + "%" : option.title.top,
                right: this.isUndefined(style.titleRight) ? style.titleRight + "%" : option.title.right,
                bottom: this.isUndefined(style.titleBottom) ? style.titleBottom + "%" : option.title.bottom,
            },
            ...this.convertAxis(style, optionName),
            series: this.convertSeriesData(style, optionName),
        };
    }
    convertAxis(style, optionName) {
        let option = baseOption[optionName]();
        if (!["getBasePieOption","getCirclePieOption","getRosePieOption"].includes(optionName))
            return {
                xAxis: [
                    {
                        boundaryGap: style.xAxisBoundaryGap ?? option.xAxis[0].boundaryGap,
                        inverse: style.xAxisInverse ?? option.xAxis[0].inverse,
                        axisLine: {
                            lineStyle: {
                                color: style.xAxisColor ?? option.xAxis[0].axisLine.lineStyle.color,
                            },
                            show: style.showXAxis ?? option.xAxis[0].axisLine.show,
                        },
                        axisLabel: {
                            color: style.xAxisLabelColor ?? option.xAxis[0].axisLabel.color,
                            fontSize: style.xAxisLabelSize ?? option.xAxis[0].axisLabel.fontSize,
                            show: style.showXAxisLabel ?? option.xAxis[0].axisLabel.show,
                            margin: style.xAxisLabelMargin ?? option.xAxis[0].axisLabel.margin,
                        },
                        axisTick: {
                            show: style.showXAxisTick ?? option.xAxis[0].axisTick.show,
                        },
                        name: style.xAxisName ?? option.xAxis[0].name,
                        nameGap: style.xAxisNameGap ?? option.xAxis[0].nameGap,
                        nameTextStyle: {
                            color: style.xAxisNameColor ?? option.xAxis[0].nameTextStyle.color,
                        },
                    },
                ],
                yAxis: [
                    {
                        boundaryGap: style.yAxisBoundaryGap ?? option.yAxis[0].boundaryGap,
                        inverse: style.yAxisInverse ?? option.yAxis[0].inverse,
                        axisLine: {
                            lineStyle: {
                                color: style.yAxisColor ?? option.yAxis[0].axisLine.lineStyle.color,
                            },
                            show: style.showYAxis ?? option.yAxis[0].axisLine.show,
                        },
                        axisLabel: {
                            color: style.yAxisLabelColor ?? option.yAxis[0].axisLabel.color,
                            fontSize: style.yAxisLabelSize ?? option.yAxis[0].axisLabel.fontSize,
                            show: style.showYAxisLabel ?? option.yAxis[0].axisLabel.show,
                            margin: style.yAxisLabelMargin ?? option.yAxis[0].axisLabel.margin,
                        },
                        axisTick: {
                            show: style.showYAxisTick ?? option.yAxis[0].axisTick.show,
                        },
                        name: style.yAxisName ?? option.yAxis[0].name,
                        nameGap: style.yAxisNameGap ?? option.yAxis[0].nameGap,
                        nameTextStyle: {
                            color: style.yAxisNameColor ?? option.yAxis[0].nameTextStyle.color,
                        },
                    },
                ],
            };
        else return {};
    }
    isUndefined(data) {
        return !(typeof data == "undefined");
    }
}
export default TiAbstractChartType;
