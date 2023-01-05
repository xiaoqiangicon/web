import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import baseOption from "../../baseOption";
/**
 * Echarts 带有背景的象形柱图
 * @class TiChartBaseLine
 * @param {Object}options
 */
class TiChartBgDoublePictorialBar extends TiAbstractChartType {
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
            yAxis: [
                {
                    // name: "亿元",
                },
            ],
            series: [
                {
                    name: '规上企业数',
                    type: 'bar',
                    // symbol: 'path://M214,1079l8-6h16l8,6-8,6H222Z',
                    // barWidth: 70,
                    // barGap: '-100%',
                    // "z": 10,
                    itemStyle: {
        
                      color: 'rgba(138, 193, 255,0.1)'
                    },
                    data: [0, 0, 0]
                  },
                {
                    name: "规上企业主营业务收入(万)",
                    type: "pictorialBar",
                    symbol:
                      "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                    // "symbol": "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                    // data: [37, 51, 63, 80, 87],
                    data:[10,20,30]
                  },
                  {
                    barGap: "-40%",
                    name: "规上企业主营业务收入(万)",
                    type: "pictorialBar",
                    symbol:
                      "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                    // "symbol": "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",
                    // data: [37, 51, 63, 80, 87],
                    data:[10,20,30]
                  },
            ],
        };
        this.chartObject.setOption(options);
        let maxY = this.chartObject.getModel().getComponent('yAxis').axis.scale._extent[1]
        options.series[0].data = new Array(this.option.chartData[1]?.length||options.series[1].data.length).fill(maxY)
        this.initChart(options, "getBgDoublePictorialBarOption",isFirst);
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
                {},
                {
                    data: data[1][0],
                },
                {
                    data: data[1][1],
                }
            ],
        };
    }
    convertSeriesData(style, optionName) {
        let option = baseOption[optionName]();
        let series = option.series.map((item,index) => {
            if(index===0) return {
                label:{
                    show:false
                }
            }
            else
            return {
                label: {
                    show: this.isUndefined(style.showLabel)?style.showLabel[index-1]:item.label.show,
                    position: this.isUndefined(style.labelPosition)?style.labelPosition[index-1]:item.label.position,
                    color: this.isUndefined(style.labelColor)?style.labelColor[index-1]:item.label.color,
                    fontSize: this.isUndefined(style.labelSize)?style.labelSize[index-1]:item.label.fontSize,
                    fontWeight: this.isUndefined(style.labelWeight)?style.labelWeight[index-1]:item.label.fontWeight,
                },
                itemStyle:{
                    color: this.isUndefined(style.itemStyleColor)?style.itemStyleColor[index-1]:item.itemStyle.color,    
                }
            };
        });
        return series
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getBgDoublePictorialBarOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartBgDoublePictorialBar;
