import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
/**
 * Echarts 三角雷达图
 * @class TiChartBaseScatter
 * @param {Object}options
 */
class TiChartTriangleRadar extends TiAbstractChartType {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts
     */
    createChart(isFirst) {
        let data = [];
        let itemStyle = [
            "rgb(255, 162, 11)",
            "rgb(5, 222, 255)",
            "rgb(169, 99, 255)",
            "rgb(63, 229, 142)",
            "rgb(49, 117, 255)",
            "rgb(159, 159, 159)",
        ];
        let arr
        // let legendName=this.inputStatus.nameArr
        data = [10, 20, 30, 40, 50, 60].map((item, index) => {
            return {
                value: this.getValueArr(item, index),
                name:isFirst?this.option.styleData.radar.indicator[index].name:['电机电器','医药医器','食品饮料','轻纺服装','汽车汽配','其他产业'][index],
                itemStyle: {
                    color: itemStyle[index],
                },
            };
        });
        let options = {
            tooltip: {
                trigger: "item",
                formatter: function (parms) {
                    var str = parms.marker + parms.name + "\t" + parms.value[parms.dataIndex] + "家</br>";
                    // parms[2].marker +
                    // '企业' +"："
                    return str;
                },
            },
            series: [
                {
                    type: "radar",
                    symbolSize: baseMethods.getSize(0),
                    symbol: "circle",
                    areaStyle: {
                        // normal: {}
                    },
                    lineStyle: {
                        color: "rgba(208, 253, 255, 0.1)",
                        width: 2,
                    },
                    data: data,
                },
            ],
        };

        this.initChart(options, "getTriangleRadarOption", isFirst);
    }
    getValueArr(item, index) {
      let arr = new Array(6).fill(0);
      arr[index] = item;
      arr[(index + 1) % 6] = item;
      return arr;
  }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
        //    let obj= this.convertChartData(data)
        // this.option.config = baseMethods.assiginObj(this.option.config, obj);
        this.option.chartData = data;
        this.createChart();
    }
    convertChartData(data) {
      let itemStyle = [
        "rgb(255, 162, 11)",
        "rgb(5, 222, 255)",
        "rgb(169, 99, 255)",
        "rgb(63, 229, 142)",
        "rgb(49, 117, 255)",
        "rgb(159, 159, 159)",
    ];
      let covData=data.map((item, index) => {
        return {
            value: this.getValueArr(item, index),
            name:this.option.styleData.radar?.indicator[index].name ??['电机电器','医药医器','食品饮料','轻纺服装','汽车汽配','其他产业'][index],
            itemStyle: {
                color: itemStyle[index],
            },
        };
    });
        return {
            series: [
                {
                    data:covData,
                },
            ],
        };
    }
    convertSeriesData(style, optionName) {
        let option = baseOption[optionName]();
        let series = option.series.map((item, index) => {
            return {
                symbolSize: this.isUndefined(style.symbolSize) ? style.symbolSize[index] : item.symbolSize,
                label: {
                    show: this.isUndefined(style.showLabel) ? style.showLabel : item.label.show,
                    position: this.isUndefined(style.labelPosition) ? style.labelPosition : item.label.position,
                    color: this.isUndefined(style.labelColor) ? style.labelColor : item.label.color,
                    fontSize: this.isUndefined(style.labelSize) ? style.labelSize : item.label.fontSize,
                    fontWeight: this.isUndefined(style.labelWeight) ? style.labelWeight : item.label.fontWeight,
                },
                itemStyle: {
                    color: this.isUndefined(style.itemStyleColor) ? style.itemStyleColor[index] : item.itemStyle.color,
                },
            };
        });
        return series;
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getTriangleRadarOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartTriangleRadar;
