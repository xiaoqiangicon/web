function getSize(size) {
    let screenWidth = document.documentElement.clientWidth;
    return (size * screenWidth) / 3840;
}
export const rosePieOption = {
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
        bottom: "15%",
        right: "5%",
        containLabel: true,
    },
    legend: {
        show: true,
        icon: "rect",
        orient: "vertical",
        itemGap: getSize(18),
        itemWidth: getSize(10),
        itemHeight: getSize(24),
        textStyle: {
            color: "inherit",
            fontWeight: 700,
            fontSize: getSize(24),
        },
        right:'15%',
        top:'30%'
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
    series: [
        {
            startAngle: 90,
            radius: ["50%", "70%"],
            center: ["40%", "50%"],
            label: {
                show: false, //开启显示
                position: "outside", //在上方显示
                color: "inherit",
                fontSize: getSize(48),
                fontWeight: 700,
            },
        },
    ],
};
