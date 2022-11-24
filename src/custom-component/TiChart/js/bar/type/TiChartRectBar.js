import TiAbstractChartType from "../../TiAbstractChartType";
import baseMethods from "../../common";
import * as echarts from 'echarts'
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
    createChart() {
        const wid = baseMethods.getSize(24);
        const w1 = Math.sin(Math.PI / 6) * wid * 1.5; //4
        const w2 = Math.sin(Math.PI / 3) * wid * 0.8; // 6.8
        const snapHeight = (wid / 2) * 0.9;
        const CubeLeft = echarts.graphic.extendShape({
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
        const CubeRight = echarts.graphic.extendShape({
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
        const CubeTop = echarts.graphic.extendShape({
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
          // backgroundColor:'#01224d',
          tooltip: {
            trigger: "axis",
          },
          grid: {
            top: "15%",
            left: "5%",
            right: "5%",
            bottom: "10%",
            containLabel: true
          },
          xAxis: [{
            data: ["2018", "2019", "2020", "2021", "2022"]
            // data: this.inputStatus.nameArr
          }],
          yAxis: [
            {
              
            }
          ],
          series: [
            {
              type: "bar",
              label: {
                // normal: {
                show: true,
                position: "top",
                fontSize: baseMethods.getSize(26),
                fontWeight: 700,
                color: "rgb(6, 235, 126)",
                offset: [-2, -5]
                // },
              },
              tooltip: {
                show: false
              },
              itemStyle: {
                color: "transparent"
              },
              data:[225,275,365,436,377],
            //   data: this.inputStatus.valueArr
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
                        fill:[225,275,365,436,377][params.dataIndex]==0?'rgba(0,0,0,0)': new echarts.graphic.LinearGradient(
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
                        fill: [225,275,365,436,377][params.dataIndex]==0?'rgba(0,0,0,0)':new echarts.graphic.LinearGradient(
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
                        fill: [225,275,365,436,377][params.dataIndex]==0?'rgba(0,0,0,0)':new echarts.graphic.LinearGradient(
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
              data: [225,275,365,436,377]
            //   data: this.inputStatus.valueArr
            }
          ]
        };
        this.initChart(options, "getAxisOption");
    }
    /**
     * @description 改变图表数据
     * @param {Object} config 配置
     */
    dynamicChart(data) {
        let obj = {
            xAxis: {
                data: data[0],
            },
            series: [
                {
                    data: data[1],
                },
            ],
        };
        this.option.config = baseMethods.assiginObj(this.option.config, obj);
        this.createChart();
    }
    changeChartStyle(style) {
        let convertStyle = {
            color: style.color,
            xAxis: [
                {
                    boundaryGap: style.xAxisBoundaryGap,
                    inverse: style.xAxisInverse,
                    axisLine: {
                        lineStyle: {
                            color: style.xAxisColor,
                        },
                        show: style.showXAxis,
                    },
                    axisLabel: {
                        color: style.xAxisLabelColor,
                        fontSize: style.xAxisLabelSize,
                        show: style.showXAxisLabel,
                        margin: style.xAxisLabelMargin,
                    },
                    axisTick: {
                        show: style.showXAxisTick,
                    },
                    name: style.xAxisName,
                    nameGap: style.xAxisNameGap,
                    nameTextStyle: {
                        color: style.xAxisNameColor,
                    },
                },
            ],
            yAxis: [
                {
                    boundaryGap: style.yAxisBoundaryGap,
                    inverse: style.yAxisInverse,
                    axisLine: {
                        lineStyle: {
                            color: style.yAxisColor,
                        },
                        show: style.showYAxis,
                    },
                    axisLabel: {
                        color: style.yAxisLabelColor,
                        fontSize: style.yAxisLabelSize,
                        show: style.showYAxisLabel,
                        margin: style.yAxisLabelMargin,
                    },
                    axisTick: {
                        show: style.showYAxisTick,
                    },
                    name: style.yAxisName,
                    nameGap: style.yAxisNameGap,
                    nameTextStyle: {
                        color: style.yAxisNameColor,
                    },
                },
            ],
            series: [
                {},
                {},
                {
                    label: {
                        show: style.showLabel,
                        position: style.labelPosition,
                        color: style.labelColor,
                        fontSize: style.labelSize,
                        fontWeight: style.labelWeight,
                    },
                    itemStyle: {
                        borderRadius: style.borderRadius[0],
                    },
                },
            ],
        };
        this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
        this.createChart();
    }
}
export default TiChartRectBar;
