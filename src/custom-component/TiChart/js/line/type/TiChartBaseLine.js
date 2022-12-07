import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";

/**
 * Echarts 基础折线图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartBaseLine extends TiAbstractChartType {
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
            },
            xAxis: [
                {
                    data: ["2017","2018", "2019", "2020","2021"],
                },
            ],
            // yAxis: [
            //     {
            //         // name: "亿元",
            //     },
            // ],
            series: [
                {
                    name: "基础折线图",
                    type: "line",
                    data: [218, 336, 347,440,364],
                   
                },
            ],
        };
        this.initChart(options, "getBaseLineOption",isFirst);
    }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
    //    let obj= this.convertChartData(data)
        // this.option.config = baseMethods.assiginObj(this.option.config, obj);
        this.option.chartData=data
        this.createChart();
    }
    convertChartData(data){
        return  {
            xAxis: [{
                data: data[0],
            }],
            series: [
                {
                    data: data[1],
                },
            ],
        };
    }
    convertSeriesData(style, optionName) {
        let option = baseOption[optionName]();
        let series = option.series.map((item,index) => {
            return {
                symbol: this.isUndefined(style.symbol)?style.symbol[index]:item.symbol,
                smooth: this.isUndefined(style.smooth)?style.smooth[index]:item.smooth,
                symbolSize: this.isUndefined(style.symbolSize)?style.symbolSize[index]:item.symbolSize,
                showSymbol: this.isUndefined(style.showSymbol)?style.showSymbol[index]:item.showSymbol,
                areaStyle: {
                    color: this.isUndefined(style.areaStyleColor)?style.areaStyleColor[index]:item.areaStyle.color,
                },
                label: {
                    show: this.isUndefined(style.showLabel)?style.showLabel[index]:item.label.show,
                    position: this.isUndefined(style.labelPosition)?style.labelPosition[index]:item.label.position,
                    color: this.isUndefined(style.labelColor)?style.labelColor[index]:item.label.color,
                    fontSize: this.isUndefined(style.labelSize)?style.labelSize[index]:item.label.fontSize,
                    fontWeight: this.isUndefined(style.labelWeight)?style.labelWeight[index]:item.label.fontWeight,
                },
                itemStyle:{
                    color: this.isUndefined(style.itemStyleColor)?style.itemStyleColor[index]:item.itemStyle.color,    
                }
            };
        });
        return series
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getBaseLineOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartBaseLine;
