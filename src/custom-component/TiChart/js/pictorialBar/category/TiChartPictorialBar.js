import TiAbstractChartCategory from "../../TiAbstractChartCategory";
import TiChartType from "../../TiChartType";
import TiChartBasePictorialBar from "../type/TiChartBasePictorialBar";
import TiChartBgPictorialBar from "../type/TiChartBgPictorialBar";
import TiChartCrossPictorialBar from "../type/TiChartCrossPictorialBar";
//带有背景的双象形柱图
import TiChartBgDoublePictorialBar from "../type/TiChartBgDoublePictorialBar";
//六象形柱图
import TiChartSixPictorialBar from "../type/TiChartSixPictorialBar";
/**
 * Echarts象形柱图类
 * @class TiChartLine
 * @param {Object}options
 */
class TiChartPictorialBar extends TiAbstractChartCategory {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts子类
     */
    createType(option) {
        switch (option.type) {
            case TiChartType.BASEPICTORIALBAR:
                return new TiChartBasePictorialBar(option);
            case TiChartType.BGPICTORIALBAR:
                return new TiChartBgPictorialBar(option);
            case TiChartType.CROSSPICTORIALBAR:
                return new TiChartCrossPictorialBar(option);
            case TiChartType.BGDOUBLEPICTORIALBAR:
                return new TiChartBgDoublePictorialBar(option);
            case TiChartType.SIXPICTORIALBAR:
                return new TiChartSixPictorialBar(option);
            default:
                throw new Error("没有这种类型的Echarts图");
        }
    }
}
export default TiChartPictorialBar;
