import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
/**
 * Echarts 基础折线图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartBasePictorialBar extends TiAbstractChartType {
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
                    data: ["2018", "2019", "2020"],
                },
            ],
            // yAxis: [
            //     {
            //         // name: "亿元",
            //     },
            // ],
            series: [
                {
                    name: "规上企业主营业务收入(万)",
                    type: "pictorialBar",
                    symbol:
                      "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                    data:[10,20,30]
                  },
            ],
        };
        this.initChart(options, "getBasePictorialBarOption",isFirst);
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
                label: {
                    show: this.isUndefined(style.showLabel)?style.showLabel:item.label.show,
                    position: this.isUndefined(style.labelPosition)?style.labelPosition:item.label.position,
                    color: this.isUndefined(style.labelColor)?style.labelColor:item.label.color,
                    fontSize: this.isUndefined(style.labelSize)?style.labelSize:item.label.fontSize,
                    fontWeight: this.isUndefined(style.labelWeight)?style.labelWeight:item.label.fontWeight,
                },
                itemStyle:{
                    color: this.isUndefined(style.itemStyleColor)?style.itemStyleColor[index]:item.itemStyle.color,    
                }
            };
        });
        return series
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getBasePictorialBarOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartBasePictorialBar;
