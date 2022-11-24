import TiAbstractChartCategory from '../../TiAbstractChartCategory'
import TiChartType from '../../TiChartType';
import TiChartTriangleRadar from '../type/TiChartTriangleRadar';

/**
 * Echarts雷达图类
 * @class TiChartScatter
 * @param {Object}options
 */
 class TiChartRadar extends TiAbstractChartCategory {
  constructor(option) {
    super(option);
  }
  /**
   * private
   * @description 创建Echarts子类
   */
  createType(option) {
    switch (option.type) {
      case TiChartType.TRIANGLERADAR:
        return new TiChartTriangleRadar(option);
      default:
        throw new Error("没有这种类型的Echarts饼图");
    }
  }
}
export default TiChartRadar;