function getSize(size) {
    let screenWidth = document.documentElement.clientWidth;
    return (size * screenWidth) / 3840;
}
export default {
    getAxisOption() {
        return {
            grid: {
                top: "20%",
                left: "5%",
                bottom: "15%",
                containLabel: true,
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
                        show: true,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: "rgb(255, 255, 255)",
                        fontSize: getSize(24),
                        show: true,
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
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getBgPictorialBarOption() {
        return {
            grid: {
                top: "20%",
                left: "5%",
                bottom: "15%",
                containLabel: true,
            },
            xAxis: [
                {
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255, 255, 255,0.8)",
                        },
                        show: true,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: "rgb(255, 255, 255)",
                        fontSize: getSize(24),
                        show: true,
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
                    label: {
                        show: false,
                    },
                },
                {
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getDoubleOption() {
        return {
            grid: {
                top: "20%",
                left: "5%",
                bottom: "15%",
                containLabel: true,
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
                        show: true,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: "rgb(255, 255, 255)",
                        fontSize: getSize(24),
                        show: true,
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
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getSixOption() {
        return {
            grid: {
                top: "20%",
                left: "5%",
                bottom: "15%",
                containLabel: true,
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
                        show: true,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: "rgb(255, 255, 255)",
                        fontSize: getSize(24),
                        show: true,
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
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getComplexBarOption() {
        return {
            grid: {
                top: "20%",
                left: "5%",
                bottom: "15%",
                containLabel: true,
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
                        show: true,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: "rgb(255, 255, 255)",
                        fontSize: getSize(24),
                        show: true,
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
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getShaftlessOption() {
        return {};
    },
    getPieOption() {
        return {
            color: [
                "rgb(255, 162, 11)",
                "rgb(5, 222, 255)",
                "rgb(169, 99, 255)",
                "rgb(63, 229, 142)",
                "rgb(49, 117, 255)",
                "rgb(159, 159, 159)",
            ],
            series: [
                {
                    startAngle: 90,
                    radius: "50%",
                    label: {
                        show: true, //开启显示
                        position: "outside", //在上方显示
                        color: "inherit",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getCirclePieOption() {
        return {
            color: [
                "rgb(255, 162, 11)",
                "rgb(5, 222, 255)",
                "rgb(169, 99, 255)",
                "rgb(63, 229, 142)",
                "rgb(49, 117, 255)",
                "rgb(159, 159, 159)",
            ],
            series: [
                {
                    startAngle: 90,
                    radius: ["50%", "70%"],
                    label: {
                        show: true, //开启显示
                        position: "outside", //在上方显示
                        color: "inherit",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
    getBgBarOption() {
        return {
            grid: {
                top: "20%",
                left: "5%",
                bottom: "15%",
                containLabel: true,
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
                        show: true,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: "rgb(255, 255, 255)",
                        fontSize: getSize(24),
                        show: true,
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
                {},
                {},
                {
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    showSymbol: true,
                    smooth: false,
                    areaStyle: {
                        color: "#ccc",
                    },
                    itemStyle: {
                        borderRadius: [getSize(10), getSize(10), getSize(10), getSize(10)],
                    },
                    label: {
                        show: true, //开启显示
                        position: "top", //在上方显示
                        color: "#fff",
                        fontSize: getSize(48),
                        fontWeight: 700,
                    },
                },
            ],
        };
    },
};
