import TiAbstractChartCategory from "../../TiAbstractChartCategory";
import TiChartType from "../../TiChartType";
//基础饼图
import TiChartBasePie from "../type/TiChartBasePie";
//环形饼图
import TiChartCirclePie from "../type/TiChartCirclePie";
//3D饼图
import TiChart3Dpie from "../type/TiChart3DPie";
//南丁格尔玫瑰饼图
import TiChartRosePie from "../type/TiChartRosePie";
/**
 * Echarts饼图类
 * @class TiChartPie
 * @param {Object}options
 */
class TiChartPie extends TiAbstractChartCategory {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts子类
     */
    createType(option) {
        switch (option.type) {
            case TiChartType.BASEPIE:
                return new TiChartBasePie(option);
            case TiChartType.CIRCLEPIE:
                return new TiChartCirclePie(option);
            case TiChartType.THREEDPIE:
                return new TiChart3Dpie(option);
            case TiChartType.ROSEPIE:
                return new TiChartRosePie(option);

            default:
                throw new Error("没有这种类型的Echarts饼图");
        }
    }
}
export default TiChartPie;
