/**
 * 抽象chart类别类
 * @class TiAbstractChartCategory
 * @param {Object}options
 */
 class TiAbstractChartCategory {
  constructor(option) {
    if (new.target === TiAbstractChartCategory)
      throw new Error("抽象类不能直接实例化!");
    return this.createType(option);
  }
  /**
   * Abstract
   * @description 创建chart类型
   */
  createType() {
    throw new Error("抽象方法不能调用!");
  }
}
export default TiAbstractChartCategory;