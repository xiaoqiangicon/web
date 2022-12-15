import TiAbstractChartCategory from "../../TiAbstractChartCategory";
//类型
import TiChartType from "../../TiChartType";
//基础柱状图
import TiChartBaseBar from "../type/TiChartBaseBar";
//复杂柱状图
import TiChartComplexBar from "../type/TiChartComplexBar";
// //三棱锥柱状图
// import TiChartTriangleBar from "../../pictorialBar/type/TiChartTriangleBar";
//带帽子的柱状图
import TiChartHatBar from "../type/TiChartHatBar";
//双柱状图
import TiChartDoubleBar from "../type/TiChartDoubleBar";
//六柱状图
import TiChartSixBar from "../type/TiChartSixBar";
//条形图
import TiChartLineBar from "../type/TiChartLineBar";
//带背景柱状图
import TiChartBgBar from "../type/TiChartBgBar";
//长方体柱状图
import TiChartRectBar from "../type/TiChartRectBar";
/**
 * Echarts柱图类
 * @class TiChartBar
 * @param {Object}options
 */
class TiChartBar extends TiAbstractChartCategory {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts子类
     */
    createType(option) {
        switch (option.type) {
            case TiChartType.BASEBAR:
                return new TiChartBaseBar(option);
            case TiChartType.COMPLEXBAR:
                return new TiChartComplexBar(option);
            case TiChartType.HATBAR:
                return new TiChartHatBar(option);
            case TiChartType.DOUBLEBAR:
                return new TiChartDoubleBar(option);
            case TiChartType.SIXBAR:
                return new TiChartSixBar(option);
            case TiChartType.LINEBAR:
                return new TiChartLineBar(option);
            case TiChartType.BGBAR:
                return new TiChartBgBar(option);
            case TiChartType.RECTBAR:
                return new TiChartRectBar(option);
            default:
                throw new Error("没有这种类型的Echarts柱状图");
        }
    }
}
export default TiChartBar;
