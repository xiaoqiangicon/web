import TiAbstractChartCategory from '../../TiAbstractChartCategory'
import TiChartType from '../../TiChartType';
import TiChartBaseScatter from '../type/TiChartBaseScatter'

/**
 * Echarts散点图类
 * @class TiChartScatter
 * @param {Object}options
 */
 class TiChartScatter extends TiAbstractChartCategory {
  constructor(option) {
    super(option);
  }
  /**
   * private
   * @description 创建Echarts子类
   */
  createType(option) {
    switch (option.type) {
      case TiChartType.BASESCATTER:
        return new TiChartBaseScatter(option);
      default:
        throw new Error("没有这种类型的Echarts饼图");
    }
  }
}
export default TiChartScatter;