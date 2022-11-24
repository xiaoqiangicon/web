import TiAbstractChartType from '../../TiAbstractChartType'
import baseMethods from '../../common'
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
  createChart() {
    function getValueArr(item,index){
      let arr=new Array(6).fill(0);
      arr[index]=item
      arr[(index+1)%6]=item
      return arr

    }
      let data=[];
      let itemStyle=['rgb(255, 162, 11)','rgb(5, 222, 255)','rgb(169, 99, 255)','rgb(63, 229, 142)','rgb(49, 117, 255)',"rgb(159, 159, 159)"]
      // let legendName=this.inputStatus.nameArr
      data=[10,20,30,40,50,60].map((item,index)=>{
        return {
          value:getValueArr(item,index),
          // name:legendName[index],
          itemStyle:{
                  color:itemStyle[index]
                }
        }
      })
      let options = {
        color:['rgb(255, 162, 11)','rgb(5, 222, 255)','rgb(169, 99, 255)','rgb(63, 229, 142)','rgb(49, 117, 255)',"rgb(159, 159, 159)"],
        tooltip: {
          trigger: "item",
            formatter: function (parms) {
              var str =
              parms.marker+
                parms.name +
                "\t" +
                parms.value[parms.dataIndex] +
                "家</br>"  
                // parms[2].marker +
                // '企业' +"："
          return str;
            },
        },
        // color: ["rgb(0, 255, 255)", "#B2782C", "rgba(0, 255, 255, 1)"],
        legend: {
          data: ['1','2','3','4','5','6'],
          orient: "vertical",
          // right: '8%',
          left:'55%',
            icon: 'rect',
              top:'10%',
          itemWidth: baseMethods.getSize(10),
          itemHeight: baseMethods.getSize(24),
          itemGap: baseMethods.getSize(18),
          textStyle: {
            fontSize: baseMethods.getSize(20),
            color: "#fff",
            rich: {
              name: {
                fontSize: baseMethods.getSize(24),
                // lineHeight: 12,
                padding: [0, baseMethods.getSize(20), 0, 0],
                //     color: function (params) {
                //       debugger
                //   var colorList = ['rgba(6,235,255,1)', 'rgba(43,235,192,1)', 'rgba(41,151,218,1)', 'rgba(6,118,216,1)', 'rgba(45,60,149,1)'];
                //   return colorList[params.dataIndex]
                // }
                color: "inherit"
                // color: ['rgb(255, 175, 11)', 'rgb(5, 203, 255)', 'rgb(142, 99, 255)', 'rgb(62, 227, 142)', 'rgb(84, 122, 255)']
              },
              value: {
                fontSize: baseMethods.getSize(24),
                // lineHeight: 12,
                color: "inherit",
                padding: [0, baseMethods.getSize(40), 0, 0]
                // fontWeight: 700
                // color: ['rgb(255, 175, 11)', 'rgb(5, 203, 255)', 'rgb(142, 99, 255)', 'rgb(62, 227, 142)', 'rgb(84, 122, 255)']
              }
            }
          },

          formatter: name => {
            // console.log(params)
            // debugger
            let obj = data.find(item => item.name === name);
            // // return ' ' + name+'\t' + obj.pieData.value + '家 ' + (((obj.pieData.endRatio - obj.pieData.startRatio) * 100).toFixed(2))+'%';
            return (
              "{name| " +
              name +
              "}{value|" +
              obj.value.find(item=>item!==0)+
              "家}" 
            );
          }
        },
        radar: {
          center: ["30%", "50%"], // 外圆的位置
          radius: "80%",
          indicator: [
            {
              name: "电机电器",
              max: 120,
              index: 0
            },
            {
              name: "医药医器",
              max: 120,
              index: 1
            },
            {
              name: "食品饮料",
              max: 120,
              index: 2
            },
            {
              name: "轻纺服装",
              max: 120,
              index: 3
            },
            {
              name: "汽车汽配",
              max: 120,
              index: 4
            },
            {
              name: "其他产业",
              max: 120,
              index: 5
            }
          ],
          splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
              // 分隔区域的样式设置。
              color: [
                "rgba(197, 255, 255, 0.05)",
                "rgba(197, 255, 255, 0.05)",
                "rgba(197, 255, 255, 0.05)",
                "rgba(197, 255, 255, 0.05)",
                "rgba(197, 255, 255, 0.05)"
              ]
              // color: ['#00224A', '#00224A', '#00224A', '#00224A', '#00224A'], // 画布颜色 // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
          },
          axisLine: {
            // 指向外圈文本的分隔线样式
            lineStyle: {
              // color: 'rgba(255,255,255,0.2)',
              color: "rgba(208, 253, 255, 0.1)"
            }
          },
          splitLine: {
            lineStyle: {
              type: "solid",
              color: [
                "rgba(208, 253, 255, 0.1)",
                "rgba(208, 253, 255, 0.1)",
                "rgba(208, 253, 255, 0.1)",
                "rgba(208, 253, 255, 0.1)",
                "rgba(208, 253, 255, 0.1)"
              ],
              // color: ['#1781BA', '#1781BA'], // 分隔线颜色
              width: 1 // 分隔线线宽
            }
          }
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
                  width: 2
                },
            // data: [
            //   {
            //     // TODO:
            //     value: this.inputStatus.valueArr.,
            //     // name: "5年企业行业分布",
            //     // lineStyle: {
            //     //   color: "rgb(0, 255, 255)",
            //     //   width: 2
            //     // },
            //     // areaStyle: {
            //     //   // color: {
            //     //   //   type: "radial",
            //     //   //   x: 0.5,
            //     //   //   y: 0.5,
            //     //   //   r: 0.5,
            //     //   //   colorStops: [
            //     //   //     {
            //     //   //       offset: 0,
            //     //   //       color: "rgba(0, 255, 255, 0.14)", // 0% 处的颜色
            //     //   //     },
            //     //   //     {
            //     //   //       offset: 0.15,
            //     //   //       color: "rgba(0, 255, 255, 0.14)", // 100% 处的颜色
            //     //   //     },
            //     //   //     {
            //     //   //       offset: 0.75,
            //     //   //       color: "rgba(0, 255, 255, 0.4)", // 100% 处的颜色
            //     //   //     },
            //     //   //     {
            //     //   //       offset: 1,
            //     //   //       color: "rgba(0, 255, 255, 0.5)", // 100% 处的颜色
            //     //   //     },
            //     //   //   ],
            //     //   //   global: false, // 缺省为 false
            //     //   // },
            //     //   color: "rgba(16, 255, 255, 0.5)"
            //     // },
            //     // itemStyle: {
            //     //   // 折线拐点标志的样式。
            //     //   color: "rgb(0, 255, 255)"
            //     // }
            //   }
            // ]
            data:data
          }
        ]
      };
    
    this.initChart(options, "getShaftlessOption");
  }
  /**
   * @description 改变图表数据
   * @param {Object} config 配置
   */
  dynamicChart(data) {
    let obj = {
      xAxis: {
        data: data[0]
      },
      series: [
        {
          data: data[1]
        }
      ]
    };
    this.option.config = baseMethods.assiginObj(this.option.config, obj);
    this.createChart();
  }
}
export default TiChartTriangleRadar;