function getSize(size) {
    let screenWidth = document.documentElement.clientWidth;
    return (size * screenWidth) / 3840;
}
export const triangleRadarOption = {
    color: [
        "rgb(255, 162, 11)",
        "rgb(5, 222, 255)",
        "rgb(169, 99, 255)",
        "rgb(63, 229, 142)",
        "rgb(49, 117, 255)",
        "rgb(159, 159, 159)",
    ],
    grid: {
        top: "20%",
        left: "5%",
        bottom: "5%",
        right: "5%",
        containLabel: true,
    },
    legend: {
        show: true,
        icon: "rect",
        orient: "vertical",
        itemGap: getSize(20),
        itemWidth: getSize(30),
        itemHeight: getSize(20),
        left:'75%',
        top:'10%',
        textStyle: {
            color: "#333",
            fontWeight: 700,
            fontSize: getSize(24),
        },
    },
    radar: {
        center: ["30%", "50%"], // 外圆的位置
        radius: "55%",
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
        axisName:{
            color:'#ccc'
        },
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
    title: {
        show: false,
        text: "图表标题",
        subtext: "图表子标题",
        textStyle: {
            color: "#333",
            fontWeight: 700,
            fontSize: getSize(24),
        },
        subtextStyle: {
            color: "#aaa",
            fontWeight: 400,
            fontSize: getSize(24),
        },
        left: "10%",
        top: "0%",
        right: "50%",
        bottom: "10%",
    },
    xAxis: [
        {
            boundaryGap: true,
            inverse: false,
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255,0.8)",
                },
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "rgb(255, 255, 255)",
                fontSize: getSize(24),
                show: false,
                margin: getSize(16),
            },
            name: "",
            nameGap: getSize(30),
            nameTextStyle: {
                color: "rgba(255, 255, 255,0.8)",
            },
        },
    ],
    yAxis: [
        {
            boundaryGap: true,
            inverse: false,
            name: "",
            nameTextStyle: {
                color: "rgb(226, 226, 226)",
                fontSize: getSize(24),
                padding: [0, 0, 0, getSize(-50)],
            },
            nameGap: getSize(18),
            axisLabel: {
                color: "rgba(255, 255, 255)",
                fontSize: getSize(24),
                show: false,
                margin: getSize(16),
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255, 255, 255,0.8)",
                },
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "rgba(255, 255, 255,0.2)",
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            symbolSize: getSize(30),
            itemStyle:{
                color:'#ccc'
            },
            label: {
                show: false, //开启显示
                position: "top", //在上方显示
                color: "#fff",
                fontSize: getSize(24),
                fontWeight: 700,
            },
        },
    ],
};
