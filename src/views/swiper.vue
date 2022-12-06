<template>
    <div class="container">
        <div class="btn" @click="pre">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div v-if="swiperList.length !== 0" class="swiper swiper-container swiper-module">
            <div class="swiper-wrapper">
                <div
                    v-for="item in swiperList"
                    class="swiper-slide"
                    :style="{ backgroundImage: 'url(' + item.img + ')' }"
                >
                    <div class="mask">
                        {{ item.title }}
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <!-- <div class="swiper-pagination"></div> -->

            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
        <div class="btn" @click="next">
            <i class="el-icon-arrow-right"></i>
        </div>
    </div>
</template>

<script>
import Swiper, { Autoplay } from "swiper";
Swiper.use([Autoplay]);
export default {
    name: "Page",
    components: {},
    data() {
        return {
            swiper: null,
            // swiperList: [
            //     // {
            //     //     img: "../assets/img/data.png",
            //     //     title: "城市",
            //     //     href: "https://www.baidu.com",
            //     // },
            //     // {
            //     //     img: require("../assets/img/application.png"),
            //     //     title: "工厂",
            //     //     href: "https://www.bilibili.com",
            //     // },
            //     // {
            //     //     img: require("../assets/img/component.png"),
            //     //     title: "交通",
            //     //     href: "https://www.baidu.com",
            //     // },
            // ],
            swiperList: [
                // {
                //     img: "",
                //     title: "城市",
                //     href: "https://www.baidu.com",
                // },
                // {
                //     img: "",
                //     title: "工厂",
                //     href: "https://www.bilibili.com",
                // },
                // {
                //     img: "",
                //     title: "交通",
                //     href: "https://www.baidu.com",
                // },
            ],
        };
    },
    created() {},
    mounted() {
        this.$axios.get("./homeConfig.json").then((res) => {
            let data = res.data;
            let a = data.templateList.map((item) => {
                return {
                    img: require("../assets/img/home/" + item.img),
                    title: item.title,
                    href: item.href,
                };
            });
            this.swiperList = a;
            this.$nextTick(() => {
                let self = this;
                this.swiper = new Swiper(".swiper-module", {
                    // direction: "vertical", // 垂直切换选项
                    loop: true, // 循环模式选项
                    slideToClickedSlide: true,
                    slidesPerView: 3,
                    spaceBetween: 10,
                    autoplay: true,
                    // cssMode: true,
                    on: {
                        click(e) {
                            //this.clickedSlide点击的真实slide，dataset为获取slide元素的属性值
                            self.changeDetail(e.clickedIndex % 3);
                            self.swiper.autoplay.stop();
                            self.swiper.autoplay.start();
                        },
                        autoplay: function (e) {
                            self.changeDetail(e.realIndex);
                        },
                        slideChange: function (e) {
                            //   alert('改变了，activeIndex为');
                            self.changeDetail(e.realIndex);
                            // self.currentPage=e.realIndex+1
                        },
                        observerUpdate: function () {
                            alert("监测到Swiper 更新了");
                        },
                    },
                    // 如果需要分页器
                    // pagination: {
                    //     el: ".swiper-pagination",
                    // },

                    // pagination: {
                    //     el: ".swiper-pagination",
                    //     clickable: true,
                    // },
                    //        autoplay: {
                    // delay: 3000,
                    // stopOnLastSlide: false,
                    // disableOnInteraction: true,
                    // },
                    // autoplay:500
                    // grid: {
                    //     fill: "column",
                    //     rows: 2,
                    // },
                    // 如果需要前进后退按钮
                    // navigation: {
                    //     nextEl: ".swiper-button-next",
                    //     prevEl: ".swiper-button-prev",
                    // },

                    // // 如果需要滚动条
                    // scrollbar: {
                    //     el: ".swiper-scrollbar",
                    // },
                });
            });
        });
    },
    beforeDestroy() {},
    methods: {
        pre() {
            this.swiper.slidePrev();
            this.swiper.autoplay.stop();
            this.swiper.autoplay.start();
            this.changeDetail(this.swiper.realIndex);
        },
        next() {
            this.swiper.slideNext();
            this.swiper.autoplay.stop();
            this.swiper.autoplay.start();
            this.changeDetail(this.swiper.realIndex);
        },
        changeDetail(index) {
            this.$emit("changeDetail", this.swiperList[index]);
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    width: 500px;
    .btn {
        width: 24px;
        height: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: rgb(196, 196, 196);
    }
    .swiper {
        margin-left: 6px;
        margin-right: 6px;
        width: 430px;
    }
    .swiper-slide {
        border: 1px solid rgb(34, 62, 107);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        cursor: pointer;
        .mask {
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 2, 39, 0.1);
            width: 100%;
            height: 100%;
        }
    }
    .swiper-slide-active {
        border: 1px solid rgb(153, 245, 255);
        // width: 50px!important;
        .mask {
            background: transparent;
        }
    }
}
</style>
