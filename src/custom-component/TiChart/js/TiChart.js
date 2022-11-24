//大类宏
import TiChartCategory from "./TiChartCategory";
//折线图类
import TiChartLine from "./line/category/TiChartLine";
//柱状图类
import TiChartBar from "./bar/category/TiChartBar";
//饼图类
import TiChartPie from "./pie/category/TiChartPie";
//散点图类
import TiChartScatter from "./scatter/category/TiChartScatter";
//象形柱图类
import TiChartPictorialBar from "./pictorialBar/category/TiChartPictorialBar";
//雷达图类
import TiChartRadar from "./radar/category/TiChartRadar";
/**
 * 抽象chart类
 * @class TiAbstractChart
 * @param {Object}options
 */
class TiAbstractChart {
    constructor(option) {
        if (new.target === TiAbstractChart) throw new Error("抽象类不能直接实例化!");
    }

    /**
     * Abstract
     * @description 创建chart类别
     */
    createCategory() {
        throw new Error("抽象方法不能调用!");
    }
}
/**
 * chart类
 * @class TiChart
 * @param {Object}options
 * @param {String}[options.category = ""] - 主类 默认line
 * @param {String}[options.type=""] - 子类 默认baseLine
 * @param {Object}[options.config={}] - Echarts配置 不传为默认配置
 * @param {Object}[options.dom={}] - Echarts盒子
 * @example
 * var opt = {
 *      category: "line",
 *      type: "baseLine",
 *      config:{},
 *      dom:document.body
 *   };
 *   new TiChart(opt);
 */
class TiChart extends TiAbstractChart {
    constructor(option) {
        super(option);
        return this.createCategory(option);
    }
    /**
     * private
     * @description 创建Echarts主类
     */
    createCategory(option) {
        switch (option.category) {
            case TiChartCategory.LINE:
                return new TiChartLine(option);
            case TiChartCategory.BAR:
                return new TiChartBar(option);
            case TiChartCategory.PIE:
                return new TiChartPie(option);
            case TiChartCategory.SCATTER:
                return new TiChartScatter(option);
            case TiChartCategory.PICTORIALBAR:
                return new TiChartPictorialBar(option);
            case TiChartCategory.RADAR:
                return new TiChartRadar(option);
            default:
                throw new Error("没有这种类型的chart图");
        }
    }
}
export default TiChart;
