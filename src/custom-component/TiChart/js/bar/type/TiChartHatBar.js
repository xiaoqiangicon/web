import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
/**
 * Echarts 基础柱状图
 * @class TiChartBaseBar
 * @param {Object}options
 */
class TiChartHatBar extends TiAbstractChartType {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts
     */
    createChart(isFirst) {
        let options = {
            tooltip: {
                trigger: "axis",
                formatter: parms=> {
                    var str =
                      "年份：" +
                      parms[0].axisValue +
                      "</br>" +
                      parms[2].marker +
                    
                      parms[2].value +
                      "%</br>" 
                      // parms[2].marker +
                      // '企业' +"："
                return str;
                  },
            },
            xAxis: [
                {
                    data: ["2018", "2019", "2020"],
                },
            ],
            yAxis: [
                {
                    // name: "亿元",
                },
            ],
            series: [
               
                {
                    // name:'数据内框',
                    type: "pictorialBar",
                    symbol: "path:// M 5, -5A5,5 0 1,0 5,5L24,-5M5, 5L24,5A5,5 0 1,0 24,-5z",
                    symbolSize: [baseMethods.getSize(32), baseMethods.getSize(6)],
                    symbolPosition: "end",
                    symbolOffset: [0, -baseMethods.getSize(6)],
                    // "symbolBoundingData":100,
                    "data": this.option.chartData[1]?this.option.chartData[1]:[11, 33, 77, 39, 55],
                    // data: this.inputStatus.valueArr,
                    // barWidth:20,
                    // barGap: '-5%',

                    z: 10,
                    itemStyle: {
                        color: "#fff",
                        //  borderRadius:10,
                    },
                },
                {
                    // name: "外框",
                    type: "bar",
                    itemStyle: {
                        // normal: {
                        // barBorderRadius: 30,
                        color: "rgba(255, 255, 255, 0.14)", //rgba设置透明度0.14
                        // }
                    },
                    barGap: "-100%",
                    z: 0,
                    barWidth: baseMethods.getSize(24),
                    data: [0, 0, 0, 0, 0],
                },
                {
                    name: "数据内框",
                    type: "bar",
                    // barWidth: baseMethods.getSize(24),
                    data: this.option.chartData[1]?this.option.chartData[1]:[11, 33, 77, 39, 55]
                    // data: this.inputStatus.valueArr,
                },
            ],
        };
        this.chartObject.setOption(options);
        let maxY = this.chartObject.getModel().getComponent('yAxis').axis.scale._extent[1]
        options.series[1].data=new Array(this.option.chartData[1]?.length||3).fill(maxY)
        this.initChart(options, "getHatBarOption",isFirst);
    }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
        // let obj = {
        //     xAxis: {
        //         data: data[0],
        //     },
        //     series: [
        //         {
        //             data: data[1],
        //         },
        //     ],
        // };
        // this.option.config = baseMethods.assiginObj(this.option.config, obj);
        this.option.chartData = data;
        this.createChart();
    }
    convertChartData(data) {
        return {
            xAxis: [
                {
                    data: data[0],
                },
            ],
            series: [
                {
                    data: data[1],
                },
            ],
        };
    }
    convertSeriesData(style, optionName) {
        let option = baseOption[optionName]();
        let series = option.series.map((item, index) => {
            if(index<2) return {}
            return {
                label: {
                    show: this.isUndefined(style.showLabel) ? style.showLabel[index] : item.label.show,
                    position: this.isUndefined(style.labelPosition) ? style.labelPosition[index] : item.label.position,
                    color: this.isUndefined(style.labelColor) ? style.labelColor[index] : item.label.color,
                    fontSize: this.isUndefined(style.labelSize) ? style.labelSize[index] : item.label.fontSize,
                    fontWeight: this.isUndefined(style.labelWeight) ? style.labelWeight[index] : item.label.fontWeight,
                },
                itemStyle: {
                    borderRadius: this.isUndefined(style.borderRadius)
                        ? style.borderRadius[index]
                        : item.itemStyle.borderRadius,
                    color: this.isUndefined(style.itemStyleColor) ? style.itemStyleColor[index] : item.itemStyle.color,
                },
                barWidth:this.isUndefined(style.barWidth) ? style.barWidth[index] : item.barWidth,
            };
        });
        return series;
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getHatBarOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartHatBar;
