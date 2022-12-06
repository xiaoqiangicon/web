import TiAbstractChartType from '../../TiAbstractChartType'
import baseMethods from '../../common'
import baseOption from "../../baseOption";
/**
 * Echarts 基础饼图
 * @class TiEchartsBaseCircle
 * @param {Object}options
 */
 class TiChartBasePie extends TiAbstractChartType {
  constructor(option) {
    super(option);
  }
  /**
   * private
   * @description 创建Echarts
   */
  createChart(isFirst) {

//  this.inputStatus.valueArr=this.inputStatus.valueArr.map(element => {
//   return Number(element)
// });
     let max=Math.max(...[50,40,30,20,10])
     let count=0;
     let num=max
     while(num>100){
      num=num/10
      count++
     }
     let total =[50,40,30,20,10].reduce((a, b) => {
        return a + b
      }, 0);
        let maxLength=String(Math.max(...[50,40,30,20,10])).length
      let percentLength=String(Math.max(...[50,40,30,20,10].map(item=>(item/total * 100).toFixed(2)))).length
      // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
      function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {

        // 计算
        let midRatio = (startRatio + endRatio) / 2;

        let startRadian = startRatio * Math.PI * 2;
        let endRadian = endRatio * Math.PI * 2;
        let midRadian = midRatio * Math.PI * 2;

        // 如果只有一个扇形，则不实现选中效果。
        if (startRatio === 0 && endRatio === 1) {
          isSelected = false;
        }

        // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
        k = typeof k !== 'undefined' ? k : 1 / 3;

        // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
        let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
        let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;

        // 计算高亮效果的放大比例（未高亮，则比例为 1）
        let hoverRate = isHovered ? 1.05 : 1;

        // 返回曲面参数方程
        return {

          u: {
            min: -Math.PI,
            max: Math.PI * 3,
            step: Math.PI / 32
          },

          v: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20
          },

          x: function (u, v) {
            // debugger
            if (u < startRadian) {
              return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
              return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
          },

          y: function (u, v) {
            if (u < startRadian) {
              return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            if (u > endRadian) {
              return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
            }
            return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
          },

          z: function (u, v) {
            if (u < -Math.PI * 0.5) {
              return Math.sin(u) > 0 ? Math.sin(u) * 0.1/Math.pow(10,count) : 0;
            }
            if (u > Math.PI * 2.5) {
              return Math.sin(u) > 0 ? Math.sin(u) * h * .1 * 0.1/Math.pow(10,count) : 0;
            }
            // return Math.sin(v) > 0 ? 1 * h * .1 : -1;
            // return Math.sin(v) > 0 ? 1 *0.6* h * .1 : 0
            return Math.sin(v) > 0 ? 1 * h * .1 *0.7 *1.8/(num/20)/Math.pow(10,count) : 0
          }
        };
      }

      // 生成模拟 3D 饼图的配置项
      function getPie3D(pieData, internalDiameterRatio) {

        let series = [];
        let sumValue = 0;
        let startValue = 0;
        let endValue = 0;
        let legendData = [];
        let k = typeof internalDiameterRatio !== 'undefined' ? (1 - internalDiameterRatio) / (1 + internalDiameterRatio) : 1 / 3;

        // 为每一个饼图数据，生成一个 series-surface 配置
        for (let i = 0; i < pieData.length; i++) {

          sumValue += pieData[i].value;

          let seriesItem = {
            name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
            type: 'surface',
            parametric: true,
            wireframe: {
              show: false
            },
            pieData: pieData[i],
            pieStatus: {
              selected: false,
              hovered: false,
              k: k
            }
          };

          if (typeof pieData[i].itemStyle != 'undefined') {

            let itemStyle = {};

            typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
            typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;

            seriesItem.itemStyle = itemStyle;
          }
          series.push(seriesItem);
        }

        // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
        // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
        for (let i = 0; i < series.length; i++) {
          endValue = startValue + series[i].pieData.value;

          series[i].pieData.startRatio = startValue / sumValue;
          series[i].pieData.endRatio = endValue / sumValue;
          series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio, false, false, k, series[i].pieData.value);

          startValue = endValue;

          legendData.push(series[i].name);
        }

        
        // 准备待返回的配置项，把准备好的 legendData、series 传入。
        let option = {
          //animation: false,
          legend: {
            data: legendData,
            orient: 'vertical',
            // right: '8%',
            right:'4%',
            icon: 'rect',
              top:'10%',
            itemWidth: baseMethods.getSize(10),
            itemHeight: baseMethods.getSize(24),
            itemGap: baseMethods.getSize(18),
            textStyle: {
              fontSize: baseMethods.getSize(20),
              color: '#fff',
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
                  color: 'inherit'
                  // color: ['rgb(255, 175, 11)', 'rgb(5, 203, 255)', 'rgb(142, 99, 255)', 'rgb(62, 227, 142)', 'rgb(84, 122, 255)']
                },
                value: {
                  fontSize: baseMethods.getSize(24),
                  // lineHeight: 12,
                  color: 'inherit',
                  padding: [0, baseMethods.getSize(18), 0, 0],
                  // fontWeight: 700
                  // color: ['rgb(255, 175, 11)', 'rgb(5, 203, 255)', 'rgb(142, 99, 255)', 'rgb(62, 227, 142)', 'rgb(84, 122, 255)']
                },
                unit: {
                  fontSize: baseMethods.getSize(24),
                  // lineHeight: 10,
                  color: 'inherit',
                  // color: ['rgb(255, 175, 11)', 'rgb(5, 203, 255)', 'rgb(142, 99, 255)', 'rgb(62, 227, 142)', 'rgb(84, 122, 255)'],
                  padding: [0, 0, 0, 0]
                }
              }
            },
            // formatter: function (name, a, b) {
            //   // debugger
            //   let obj = option.series.find(item => item.name === name)
            //   return 'Legend ' + name + obj.pieData.value + 'ddd' + (((obj.pieData.endRatio - obj.pieData.startRatio) * 100).toFixed(2));
            // },

            formatter: name => {
              // console.log(params)
              let obj = option.series.find(item => item.name === name)
              let emptyLength=maxLength-String(obj.pieData.value).length
              let arr=new Array(emptyLength*2).fill(" ")
              if(String(obj.pieData.value).indexOf(".")===-1) {arr.pop()}
              // return ' ' + name+'\t' + obj.pieData.value + '家 ' + (((obj.pieData.endRatio - obj.pieData.startRatio) * 100).toFixed(2))+'%';
              return (
                "{name| " +
                name +
                "}{value|" +
                obj.pieData.value +
                "万元" + arr.join("") +"}"+
                "{unit|" +
                (((obj.pieData.endRatio - obj.pieData.startRatio) * 100).toFixed(2)) +
                "}" +
                "{unit|%}"
              );
            },

          },
          tooltip: {
            formatter: params => {
              if (params.seriesName !== 'mouseoutSeries') {
                return `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${params.seriesName}\t${option.series[params.seriesIndex].pieData.value}万元`;
              }
            }
          },
          xAxis3D: {
            min: -1,
            max:1.5+0.1-baseMethods.getSize(0.11)
          },
          yAxis3D: {
            min: -1,
            max: 1.5+0.1-baseMethods.getSize(0.11)
          },
          zAxis3D: {
            min: -1,
            max:1.5+0.1-baseMethods.getSize(0.11)
          },
          // self.getSize(5/3) + (self.getSize(5/3)>1?0: 0.6)
          // graphic: {
          //   elements: [
          //     {
          //       type: 'image',
          //       z: 999,
          //       zlevel: 999,
          //       style: {
          //         image: '../../../img/search.png',
          //         width: 300,
          //         height: 300
          //       }
          //     }
          //   ]
          // },
          yAxis: [{
            // name: '%',
            // nameTextStyle: {
            //     color: xAxisTextColor,
            //     fontSize: a,
            // },
            // inverse:true,
            type: 'value',
            axisLabel: {
              // interval: 0,
              show: false,

            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }],
          xAxis: [{
            // position:[0,-150],
            offset: -30,
            type: 'category',
            data: ['2018年'],
            axisLabel: {
              // interval: 0,
              show: false,
              color: 'rgb(0, 255, 255)',
              fontSize: 10,
              fontWeight: 700,
              fontFamily: 'Noto Sans SC'
              // formatter: function (params) {
              //     return `${params}\n` + 'GDP'
              // },

            },
            // margin: -15,
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLine: {
              // onZero:false,
              show: false
            },
            splitArea: {
              show: false,
            },
            z: 999
          },
            // {
            //     position: 'bottom',
            //     offset: -15,
            //     type: 'category',
            //     data: ['GDP', 'GDP', 'GDP', 'GDP', 'GDP'],
            //     axisLabel: {
            //         // interval: 0,
            //         color: 'rgb(0, 255, 255)',
            //         fontSize: 15,
            //         fontWeight: 700,
            //         fontFamily: 'PangMenZhengDao'

            //     },
            //     // margin: -15,
            //     axisTick: {
            //         show: false
            //     },
            //     splitLine: {
            //         show: false
            //     },
            //     axisLine: {
            //         // onZero:false,
            //         show: false
            //     },
            //     splitArea: {
            //         show: false,
            //     },
            //     z: 3,
            // }
          ],
          grid3D: {
            // label: {
            //   show: true
            // },
            distance: 300,
            // wdith:500,
            // // height:150,
            // bottom:'90%',
            top: '-10%',
            // right:'0%',
            left: -18+'%',
            show: false,
            boxHeight: 25,
            // boxWidth: self.getSize(200),
            viewControl: {//3d效果可以放大、旋转等，请自己去查看官方配置
              alpha: 16,
              // beta: 50,
              rotateSensitivity: 0,
              zoomSensitivity: 0.8,
              panSensitivity: 0,
              autoRotate: false
            },
            //后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
            postEffect: {//配置这项会出现锯齿，请自己去查看官方配置有办法解决 
              enable: true,
              bloom: {
                enable: true,
                bloomIntensity: 0.1
              },
              // SSAO: {
              //   enable: true,
              //   quality: 'medium',
              //   radius: 2
              // }
            }
          },
          series: series
      };
      return option;
    }

    let option = getPie3D([{value:50},{value:40},{value:30},{value:20},{value:10}], 0.00);
    // 监听鼠标事件，实现饼图选中效果（单选），近似实现高亮（放大）效果。
    let selectedIndex = '';
    let hoveredIndex = '';

    // 监听点击事件，实现选中效果（单选）
    this.chartObject.on('click',params=> {
      // 从 option.series 中读取重新渲染扇形所需的参数，将是否选中取反。
      let isSelected = !option.series[params.seriesIndex].pieStatus.selected;
      let isHovered = option.series[params.seriesIndex].pieStatus.hovered;
      let k = option.series[params.seriesIndex].pieStatus.k;
      let startRatio = option.series[params.seriesIndex].pieData.startRatio;
      let endRatio = option.series[params.seriesIndex].pieData.endRatio;


      // 如果之前选中过其他扇形，将其取消选中（对 option 更新）
      if (selectedIndex !== '' && selectedIndex !== params.seriesIndex) {
        option.series[selectedIndex].parametricEquation = getParametricEquation(option.series[selectedIndex].pieData.startRatio, option.series[selectedIndex].pieData.endRatio, false, false, k, option.series[selectedIndex].pieData.value);
        option.series[selectedIndex].pieStatus.selected = false;
      }

      // 对当前点击的扇形，执行选中/取消选中操作（对 option 更新）
      option.series[params.seriesIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, option.series[selectedIndex].pieData.value);
      option.series[params.seriesIndex].pieStatus.selected = isSelected;

      // 如果本次是选中操作，记录上次选中的扇形对应的系列号 seriesIndex
      isSelected ? selectedIndex = params.seriesIndex : null;

      // 使用更新后的 option，渲染图表
      this.chartObject.setOption(option);
    });

    // 监听 mouseover，近似实现高亮（放大）效果
    this.chartObject.on('mouseover', params=> {
      // 准备重新渲染扇形所需的参数
      let isSelected;
      let isHovered;
      let startRatio;
      let endRatio;
      let k;

      // 如果触发 mouseover 的扇形当前已高亮，则不做操作
      if (hoveredIndex === params.seriesIndex) {
        return;

        // 否则进行高亮及必要的取消高亮操作
      } else {

        // 如果当前有高亮的扇形，取消其高亮状态（对 option 更新）
        if (hoveredIndex !== '') {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 false。
          isSelected = option.series[hoveredIndex].pieStatus.selected;
          isHovered = false;
          startRatio = option.series[hoveredIndex].pieData.startRatio;
          endRatio = option.series[hoveredIndex].pieData.endRatio;
          k = option.series[hoveredIndex].pieStatus.k;

          // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
          option.series[hoveredIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, option.series[hoveredIndex].pieData.value);
          option.series[hoveredIndex].pieStatus.hovered = isHovered;

          // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
          hoveredIndex = '';
        }

        // 如果触发 mouseover 的扇形不是透明圆环，将其高亮（对 option 更新）
        if (params.seriesName !== 'mouseoutSeries') {
          // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
          isSelected = option.series[params.seriesIndex].pieStatus.selected;
          isHovered = true;
          startRatio = option.series[params.seriesIndex].pieData.startRatio;
          endRatio = option.series[params.seriesIndex].pieData.endRatio;
          k = option.series[params.seriesIndex].pieStatus.k;

          // 对当前点击的扇形，执行高亮操作（对 option 更新）
          option.series[params.seriesIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, option.series[params.seriesIndex].pieData.value + 5);
          option.series[params.seriesIndex].pieStatus.hovered = isHovered;

          // 记录上次高亮的扇形对应的系列号 seriesIndex
          hoveredIndex = params.seriesIndex;
        }

        // 使用更新后的 option，渲染图表
         this.chartObject.setOption(option);
      }
    });

    // 修正取消高亮失败的 bug
    this.chartObject.on('globalout',  ()=> {


      if (hoveredIndex !== '') {
        // 从 option.series 中读取重新渲染扇形所需的参数，将是否高亮设置为 true。
        let isSelected = option.series[hoveredIndex].pieStatus.selected;
        let isHovered = false;
        let k = option.series[hoveredIndex].pieStatus.k;
        let startRatio = option.series[hoveredIndex].pieData.startRatio;
        let endRatio = option.series[hoveredIndex].pieData.endRatio;

        // 对当前点击的扇形，执行取消高亮操作（对 option 更新）
        option.series[hoveredIndex].parametricEquation = getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, option.series[hoveredIndex].pieData.value);
        option.series[hoveredIndex].pieStatus.hovered = isHovered;

        // 将此前记录的上次选中的扇形对应的系列号 seriesIndex 清空
        hoveredIndex = '';
      }

      // 使用更新后的 option，渲染图表
      this.chartObject.setOption(option);
    });


    
    this.initChart(option, "getPieOption",isFirst);
  }
  /**
   * @description 改变图表数据
   * @param {Object} config 配置
   */
  dynamicChart(data) {
    let obj = {
      series: [
        {
          data: data[0]
        }
      ]
    };
    this.option.config = baseMethods.assiginObj(this.option.config, obj);
    this.createChart();
  }
  convertSeriesData(style, optionName) {
    let option = baseOption[optionName]();
    let series = [{
          startAngle: style.startAngle ?? option.series[0].startAngle,
          radius: this.isUndefined(style.radius)?style.radius+'%':option.series[0].radius,
            label: {
                show: this.isUndefined(style.showLabel)?style.showLabel:option.series[0].label.show,
                position: this.isUndefined(style.labelPosition)?style.labelPosition:option.series[0].label.position,
                color: this.isUndefined(style.labelColor)?style.labelColor:option.series[0].label.color,
                fontSize: this.isUndefined(style.labelSize)?style.labelSize:option.series[0].label.fontSize,
                fontWeight: this.isUndefined(style.labelWeight)?style.labelWeight:option.series[0].label.fontWeight,
            },
            center:this.isUndefined(style.pieCenter)?[style.pieCenter[0]+'%',style.pieCenter[1]+'%']:option.series[0].center,
        }];

    return series
}
  changeChartStyle(style) {
    let convertStyle = this.convertStyleData(style, "getPieOption");
    this.option.styleData = baseMethods.assiginObj(this.option.styleData, convertStyle);
    this.createChart(true);
}
}

export default TiChartBasePie;