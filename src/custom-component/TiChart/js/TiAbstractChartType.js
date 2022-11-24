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
        this.option = option;
        this.chartObject = echarts.init(option.dom);
        this.resizefunction = this.createChart.bind(this);
        addEventListener("resize", this.resizefunction);
        this.beforeunloadfunction = this.cleanUp.bind(this);
        addEventListener("beforeunload", this.beforeunloadfunction);
        this.createChart(option);
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
     */
    initChart(options, optionName) {
        let styleOption = baseMethods.assiginObj(baseOption[optionName](), this.option.styleData);
        let finalOption = baseMethods.assiginObj(styleOption, options);
        if (JSON.stringify(this.option.config) === "{}");
        else finalOption = baseMethods.assiginObj(finalOption, this.option.config);
debugger
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
}
export default TiAbstractChartType;
