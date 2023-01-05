import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import * as echarts from "echarts";
import baseOption from "../../baseOption";
/**
 * Echarts 基础柱状图
 * @class TiChartBaseBar
 * @param {Object}options
 */
class TiChartTriangleBar extends TiAbstractChartType {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts
     */
    createChart(isFirst) {
        let dataArr=this.option.chartData[1]?this.option.chartData[1]:[4,3,1]
        let totalRank=20
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
                    name: "线损率",
                    type: "pictorialBar",
                    symbol: "path://M35,0L35,70L0,70z M35,0L35,70L70,70z",
                    // symbol:'path://M0,0 L35,0 L0,35z',
                    // data: [totalRank-15, totalRank-8, totalRank-5],
                    data: dataArr.map((item) => {
                        return {
                            value: totalRank - item,
                            itemStyle: {
                                color:
                                    item === 0
                                        ? "rgba(0,0,0,0)"
                                        : new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                              {
                                                  offset: 0,
                                                  color: "rgba(39,172,255,1)",
                                              },
                                              {
                                                  offset: 0.5,
                                                  color: "rgba(39,172,255,1)",
                                              },
                                              {
                                                  offset: 0.5,
                                                  color: "rgba(0,129,210,1)",
                                              },
                                              {
                                                  offset: 1,
                                                  color: "rgba(0,129,210,1)",
                                              },
                                          ]),
                                opacity: 1,
                            },
                            label: {
                                position: item === 0 ? [baseMethods.getSize(28), baseMethods.getSize(140)] : "top",
                            },
                        };
                    }),
                    // barWidth: baseMethods.getSize(135),
                    symbolSize: [baseMethods.getSize(135), "100%"],
                    //  barCategoryGap: '-30%', //柱子之间间距
                    symbolOffset: [0, -baseMethods.getSize(30)],
                    // label: {
                    //     show: true,
                    //     //   position:['center',-baseMethods.getSize(32)],
                    //     position: "top",
                    //     fontSize: baseMethods.getSize(26),
                    //     color: "#fff",
                    //     fontWeight: 700,
                    //     formatter: function (params) {
                    //         return "第" + (totalRank - params.value) + "名";
                    //     },
                    // },
                    z: 99,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: "rgba(39,172,255,1)",
                            },
                            {
                                offset: 0.5,
                                color: "rgba(39,172,255,1)",
                            },
                            {
                                offset: 0.5,
                                color: "rgba(0,129,210,1)",
                            },
                            {
                                offset: 1,
                                color: "rgba(0,129,210,1)",
                            },
                        ]),
                        opacity: 1,
                    },
                },
                {
                    // name: '年报上报率2',
                    type: "pictorialBar",
                    symbol: "diamond",
                    // barWidth: baseMethods.getSize(135),
                    symbolSize: [baseMethods.getSize(135), baseMethods.getSize(60)],
                    symbolOffset: [0, 0],
                    z: 99,
                    itemStyle: {
                        // normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: "rgba(39,172,255,1)",
                            },
                            {
                                offset: 0.5,
                                color: "rgba(39,172,255,1)",
                            },
                            {
                                offset: 0.5,
                                color: "rgba(0,129,210,1)",
                            },
                            {
                                offset: 1,
                                color: "rgba(0,129,210,1)",
                            },
                        ]),
                        opacity: 1,
                        // }
                    },
                    data: dataArr.map((item) => {
                        return {
                            value: 1,
                            itemStyle: {
                                color:
                                    item === 0
                                        ? "rgba(0,0,0,0)"
                                        : new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                              {
                                                  offset: 0,
                                                  color: "rgba(39,172,255,1)",
                                              },
                                              {
                                                  offset: 0.5,
                                                  color: "rgba(39,172,255,1)",
                                              },
                                              {
                                                  offset: 0.5,
                                                  color: "rgba(0,129,210,1)",
                                              },
                                              {
                                                  offset: 1,
                                                  color: "rgba(0,129,210,1)",
                                              },
                                          ]),
                                opacity: 1,
                            },
                        };
                    }),
                },
                {
                    // name: '年报上报率2',
                    type: "pictorialBar",
                    symbol: "circle",
                    // stack:'111',
                    // barWidth: baseMethods.getSize(80),
                    // symbolSize: ['800%', '1000%'],
                    symbolSize: [baseMethods.getSize(780), baseMethods.getSize(180)],
                    symbolOffset: ["32%", "43%"],
                    // z: 99,
                    itemStyle: {
                        // normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgba(87,229,255,0.09019607843137255)",
                            },
                            //  {
                            //     offset: 0.5,
                            //     color: '#0788EE'
                            // }, {
                            //     offset: 0.5,
                            //     color: '#15B8F9'
                            // },
                            {
                                offset: 1,
                                color: "rgba(61,225,255,0.6901960784313725)",
                            },
                        ]),
                        // opacity: 1,
                        // }
                    },
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "rgba(87,229,255,0.09019607843137255)",
                                },
                                //  {
                                //     offset: 0.5,
                                //     color: '#0788EE'
                                // }, {
                                //     offset: 0.5,
                                //     color: '#15B8F9'
                                // },
                                {
                                    offset: 1,
                                    color: "rgba(61,225,255,0.6901960784313725)",
                                },
                            ]),
                        },
                    },
                    data: [1],
                },
            ],
        };
        this.initChart(options, "getTrianglePictorialBarOption",isFirst);
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
                   
                },
                {},
                {}
            ],
        };
    }
    convertSeriesData(style, optionName) {
        let option = baseOption[optionName]();
        let series = option.series.map((item,index) => {
            return {
                // label: {
                //     show: this.isUndefined(style.showLabel)?style.showLabel:item.label.show,
                //     position: this.isUndefined(style.labelPosition)?style.labelPosition:item.label.position,
                //     color: this.isUndefined(style.labelColor)?style.labelColor:item.label.color,
                //     fontSize: this.isUndefined(style.labelSize)?style.labelSize:item.label.fontSize,
                //     fontWeight: this.isUndefined(style.labelWeight)?style.labelWeight:item.label.fontWeight,
                // },
                // itemStyle:{
                //     color: this.isUndefined(style.itemStyleColor)?style.itemStyleColor[index]:item.itemStyle.color,    
                // }
            };
        });
        return series
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getTrianglePictorialBarOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartTriangleBar;
