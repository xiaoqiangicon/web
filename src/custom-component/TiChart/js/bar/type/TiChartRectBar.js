import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import * as echarts from 'echarts'
import baseOption from "../../baseOption";
/**
 * Echarts 基础柱状图
 * @class TiChartBaseBar
 * @param {Object}options
 */
class TiChartRectBar extends TiAbstractChartType {
    constructor(option) {
        super(option);
    }
    /**
     * private
     * @description 创建Echarts
     */
    createChart(isFirst) {
      // if(!isFirst)
      // console.log('1111111',baseOption['getRectBarOption']().series[0].barWidth)
      // else
      // console.log(this.option.styleData.series[0].barWidth)
        var wid = !isFirst?baseOption['getRectBarOption']().series[0].barWidth:this.option.styleData.series[0].barWidth;
        // const wid=30
        var w1 = Math.sin(Math.PI / 6) * wid * 1.5; //4
        var w2 = Math.sin(Math.PI / 3) * wid * 0.8; // 6.8
        var snapHeight = (wid / 2) * 0.9;
        var CubeLeft = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          buildPath: function(ctx, shape) {
            // 会canvas的应该都能看得懂，shape是从custom传入的
            const xAxisPoint = shape.xAxisPoint;
            const c0 = [shape.x, shape.y];
            const c1 = [shape.x - w2 - 5, shape.y - 5];
            const c2 = [shape.x - w2 - 5, xAxisPoint[1] - 5 + 5];
            const c3 = [shape.x, xAxisPoint[1] + 5];
            ctx
              .moveTo(c0[0], c0[1])
              .lineTo(c1[0], c1[1])
              .lineTo(c2[0], c2[1])
              .lineTo(c3[0], c3[1])
              .closePath();
          }
        });
        // 绘制右侧面
        var CubeRight = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          buildPath: function(ctx, shape) {
            const xAxisPoint = shape.xAxisPoint;
            const c1 = [shape.x, shape.y];
            const c2 = [shape.x, xAxisPoint[1] + 5];
            const c3 = [shape.x + w1, xAxisPoint[1] - w2 + snapHeight + 5];
            const c4 = [shape.x + w1, shape.y - w2 + snapHeight];
            ctx
              .moveTo(c1[0], c1[1])
              .lineTo(c2[0], c2[1])
              .lineTo(c3[0], c3[1])
              .lineTo(c4[0], c4[1])
              .closePath();
          }
        });
        // 绘制顶面
        var CubeTop = echarts.graphic.extendShape({
          shape: {
            x: 0,
            y: 0
          },
          buildPath: function(ctx, shape) {
            //
            const c1 = [shape.x, shape.y];
            const c2 = [shape.x + w1, shape.y - w2 + snapHeight]; //右点
            const c3 = [shape.x - w2 + w1 - 5, shape.y - w2 + snapHeight - 5];
            const c4 = [shape.x - w2 - 5, shape.y - 5];
            ctx
              .moveTo(c1[0], c1[1])
              .lineTo(c2[0], c2[1])
              .lineTo(c3[0], c3[1])
              .lineTo(c4[0], c4[1])
              .closePath();
          }
        });
        // 注册三个面图形
        echarts.graphic.registerShape("CubeLeft", CubeLeft);
        echarts.graphic.registerShape("CubeRight", CubeRight);
        echarts.graphic.registerShape("CubeTop", CubeTop);
  
        var options = {
          xAxis: [{
            data: ["2018", "2019", "2020", "2021", "2022"]
          }],
          yAxis: [
            {
              
            }
          ],
          series: [
            {
              type: "bar",
              label: {
                offset: [-2, -5]
                // },
              },
              tooltip: {
                show: false
              },
              itemStyle: {
                color: "transparent"
              },
              data:this.option.chartData[1]?this.option.chartData[1]:[225,275,365,436,377],
            },
            {
              type: "custom",
              renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                location[0] = location[0] + wid * 0;
                const xlocation = api.coord([api.value(0), 0]);
                xlocation[0] = xlocation[0] + wid * 0;
                return {
                  type: "group",
                  children: [
                    {
                      type: "CubeLeft",
                      shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: xlocation
                      },
                      style: {
                        fill:(this.option.chartData[1]?(this.option.chartData[1][params.dataIndex]==0):([225,275,365,436,377][params.dataIndex]==0))?'rgba(0,0,0,0)': new echarts.graphic.LinearGradient(
                          0,
                          0,
                          0,
                          1,
                          [
                            {
                              offset: 0,
                              color: "rgba(43,255,143,1)"
                            },
                            {
                              offset: 1,
                              color: "rgba(27,255,168,1)"
                            }
                          ]
                        )
                      }
                    },
                    {
                      type: "CubeRight",
                      shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: xlocation
                      },
                      style: {
                        fill: (this.option.chartData[1]?(this.option.chartData[1][params.dataIndex]==0):([225,275,365,436,377][params.dataIndex]==0))?'rgba(0,0,0,0)':new echarts.graphic.LinearGradient(
                          0,
                          0,
                          0,
                          1,
                          [
                            {
                              offset: 0,
                              color: "rgba(43,255,143,1)"
                            },
                            {
                              offset: 1,
                              color: "rgba(27,255,168,1)"
                            }
                          ]
                        )
                      }
                    },
                    {
                      type: "CubeTop",
                      shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: xlocation
                      },
                      style: {
                        fill: (this.option.chartData[1]?(this.option.chartData[1][params.dataIndex]==0):([225,275,365,436,377][params.dataIndex]==0))?'rgba(0,0,0,0)':new echarts.graphic.LinearGradient(
                          0,
                          0,
                          0,
                          1,
                          [
                            {
                              offset: 0,
                              color: "rgba(43,255,143,1)"
                            },
                            {
                              offset: 1,
                              color: "rgba(27,255,168,1)"
                            }
                          ]
                        )
                      }
                    }
                  ]
                };
              },
              color: "rgba(27,255,168,1)",
              data: this.option.chartData[1]?this.option.chartData[1]:[225,275,365,436,377]
            //   data: this.inputStatus.valueArr
            }
          ]
        };
        this.chartObject.dispose();
        this.chartObject = echarts.init(this.option.dom);
        this.initChart(options, "getRectBarOption",isFirst);
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

                },
                {}
            ],
        };
    }
    convertSeriesData(style, optionName) {
        let option = baseOption[optionName]();
        let series = option.series.map((item, index) => {
          if(index===0)
            return {
                label: {
                    show: this.isUndefined(style.showLabel) ? style.showLabel[index] : item.label.show,
                    position: this.isUndefined(style.labelPosition) ? style.labelPosition[index] : item.label.position,
                    color: this.isUndefined(style.labelColor) ? style.labelColor[index] : item.label.color,
                    fontSize: this.isUndefined(style.labelSize) ? style.labelSize[index] : item.label.fontSize,
                    fontWeight: this.isUndefined(style.labelWeight) ? style.labelWeight[index] : item.label.fontWeight,
                },
                // itemStyle: {
                //     borderRadius: this.isUndefined(style.borderRadius)
                //         ? style.borderRadius[index]
                //         : item.itemStyle.borderRadius,
                //     color: this.isUndefined(style.itemStyleColor) ? style.itemStyleColor[index] : item.itemStyle.color,
                // },
                barWidth: this.isUndefined(style.barWidth) ? style.barWidth[index] : item.barWidth,
            };
            
        });
        return series;
    }
    changeChartStyle(style) {
        let convertStyle = this.convertStyleData(style, "getRectBarOption");
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart(true);
    }
}
export default TiChartRectBar;
