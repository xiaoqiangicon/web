function getSize(size) {
    let screenWidth = document.documentElement.clientWidth;
    return (size * screenWidth) / 3840;
}
export const lineBarOption = {
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
        show: false,
        icon: "circle",
        orient: "horizontal",
        itemGap: getSize(20),
        itemWidth: getSize(50),
        itemHeight: getSize(28),
        textStyle: {
            color: "#333",
            fontWeight: 700,
            fontSize: getSize(24),
        },
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
            name: "（%）",
            nameTextStyle: {
                color: "rgb(226, 226, 226)",
                fontSize: getSize(24),
                padding: [0, 0, 0, getSize(-50)],
            },
            nameGap: getSize(18),
            axisLabel: {
                color: "rgba(255, 255, 255)",
                fontSize: getSize(24),
                show: true,
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
            itemStyle:{
                color:'rgb(33,249,192)',
                borderRadius: [getSize(0), getSize(0), getSize(0), getSize(0)],
            },
            barWidth: getSize(30),
            label: {
                show: false, //开启显示
                position: "top", //在上方显示
                color: "rgb(0,255,255)",
                fontSize: getSize(28),
                fontWeight: 700,
            },
        },
    ],
};
