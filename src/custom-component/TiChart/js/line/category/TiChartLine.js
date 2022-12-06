//抽象图标类
import TiAbstractChartCategory from "../../TiAbstractChartCategory";
//小类
import TiChartType from "../../TiChartType";
//基础折线图
import TiChartBaseLine from "../type/TiChartBaseLine";
//双折线图
import TiChartDoubleLine from "../type/TiChartDoubleLine";
//六折线图
import TiChartSixLine from "../type/TiChartSixLine";
/**
 * Echarts折线图类
 * @class TiChartLine
 * @param {Object}options
 */
class TiChartLine extends TiAbstractChartCategory {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts子类
     */
    createType(option) {
        switch (option.type) {
            case TiChartType.BASELINE:
                return new TiChartBaseLine(option);
            case TiChartType.DOUBLELINE:
                return new TiChartDoubleLine(option);
            case TiChartType.SIXELINE:
                return new TiChartSixLine(option);
            default:
                throw new Error("没有这种类型的Echarts图");
        }
    }

    
}
export default TiChartLine;
