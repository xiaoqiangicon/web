<template>
    <div>
        <div class="container">
            <div class="btn" @click="pre">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="swiper swiper-container swiper-case">
                <div class="swiper-wrapper">
                    <div v-for="item in swiperList" class="swiper-slide">
                        <div v-for="itm in item" class="swiper-list">
                            <div class="sw-img" :style="{ backgroundImage: 'url(' + itm.img + ')' }">
                                <div class="mask">
                                    <div class="mask-des" :title="itm.des">{{ itm.des }}</div>

                                    <div class="mask-btn"><a :href="itm.href" target="_blank">查看详情</a></div>
                                </div>
                            </div>
                            <div>
                                {{ itm.title }}
                            </div>
                        </div>
                        <div v-for="itm in emptyNumber" class="swiper-list"></div>
                    </div>
                    <!-- <div v-for="itm in emptyNumber" class="swiper-slide"></div> -->
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
        <el-pagination
            :current-page="currentPage"
            @current-change="currentChange"
            :page-size="8"
            background
            layout=" pager, prev,next"
            :prev-text="'上一页'"
            :next-text="'下一页'"
            :total="total"
        >
        </el-pagination>
    </div>
</template>

<script>
import Swiper, { Autoplay, Grid } from "swiper";
// Swiper.use([Autoplay]);
export default {
    name: "Page",
    components: {},
    props: {
        swiperList: {
            type: Array,
            default: () => [
                [
                    {
                        img: require("../../assets/img/data.png"),
                        title: "城市",
                        href: "https://www.baidu.com",
                        des: "2022年江西省智研院自主研发的产业金融服务平台11111111111111111111111111111111111",
                    },
                    {
                        img: require("../../assets/img/application.png"),
                        title: "工厂",
                        href: "https://www.bilibili.com",
                        des: "2022年江西省智研院自主研发的产业金融服务平台",
                    },
                    {
                        img: require("../../assets/img/component.png"),
                        title: "交通",
                        href: "https://www.baidu.com",
                        des: "2022年江西省智研院自主研发的产业金融服务平台",
                    },
                    {
                        img: require("../../assets/img/data.png"),
                        title: "城市",
                        href: "https://www.baidu.com",
                        des: "2022年江西省智研院自主研发的产业金融服务平台",
                    },
                    {
                        img: require("../../assets/img/application.png"),
                        title: "工厂111",
                        href: "https://www.bilibili.com",
                        des: "2022年江西省智研院自主研发的产业金融服务平台",
                    },
                    {
                        img: require("../../assets/img/component.png"),
                        title: "交通1111",
                        href: "https://www.baidu.com",
                        des: "2022年江西省智研院自主研发的产业金融服务平台",
                    },
                    {
                        img: require("../../assets/img/application.png"),
                        title: "工厂222",
                        href: "https://www.bilibili.com",
                        des: "2022年江西省智研院自主研发的产业金融服务平台",
                    },
                    {
                        img: require("../../assets/img/component.png"),
                        title: "交通2222",
                        href: "https://www.baidu.com",
                        des: "2022年江西省智研院自主研发的产业金融服务平台",
                    },
                ],
                [
                    {
                        img: require("../../assets/img/application.png"),
                        title: "工厂333",
                        href: "https://www.bilibili.com",
                        des: "2022年江西省智研院自主研发的产业金融服务平台",
                    },
                ],
            ],
        },
    },
    data() {
        return {
            swiper: null,
            total: 9,
            currentPage: 1,
            emptyNumber: 7,
            // emptyObject:[{},{},{},{},{},{},{}]
        };
    },
    watch: {
        swiperList: {
            handler(newV, oldV) {
                this.total = newV.reduce((pre, cur) => {
                    return pre + cur.length;
                }, 0);
                this.currentPage = 1;
                if (newV.length === 0) this.emptyNumber = 8;
                else this.emptyNumber = 8 - newV[newV.length - 1].length;
                // this.emptyObject=[]
                // for(let i=0;i<this.emptyNumber;i++){
                //     this.emptyObject.push({})
                // }

                this.restart();
            },
        },
    },
    created() {},
    mounted() {
        let self = this;
        this.swiper = new Swiper(".swiper-case", {
            // direction: "vertical", // 垂直切换选项
            // loop: true, // 循环模式选项
            // modules: [Grid],
            // cssMode: true,
            slideToClickedSlide: true,
            // slidesPerView: 4,

            // // slidesPerColumnFill: 'row',
            // spaceBetween: 10,
            // slidesPerGroup: 8,
            // autoplay: true,
            autoplay: {
                delay: 10000,
                stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换
                disableOnInteraction: true,
            },

            on: {
                // click(e) {
                //     //this.clickedSlide点击的真实slide，dataset为获取slide元素的属性值
                //     self.changeDetail(e.clickedIndex % 3);
                //     self.swiper.autoplay.stop();
                //     self.swiper.autoplay.start();
                // },
                autoplay: function (e) {
                    self.currentPage = e.realIndex + 1;
                },
                slideChange: function (e) {
                    //   alert('改变了，activeIndex为');
                    self.currentPage = e.realIndex + 1;
                },
            },
            // grid: {
            //     // fill: "row",
            //     rows: 2,
            // },
        });
    },
    beforeDestroy() {},
    methods: {
        restart() {
            let self = this;
            this.swiper.destroy(false);
            this.swiper = new Swiper(".swiper-case", {
                // direction: "vertical", // 垂直切换选项
                // loop: true, // 循环模式选项
                // modules: [Grid],
                // cssMode: true,
                slideToClickedSlide: true,
                // slidesPerView: 4,
                // spaceBetween: 10,
                // slidesPerGroup: 8,
                autoplay: {
                delay: 10000,
                stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换
                disableOnInteraction: true,
            },
                on: {
                    // click(e) {
                    //     //this.clickedSlide点击的真实slide，dataset为获取slide元素的属性值
                    //     self.changeDetail(e.clickedIndex % 3);
                    //     self.swiper.autoplay.stop();
                    //     self.swiper.autoplay.start();
                    // },
                    autoplay: function (e) {
                        self.currentPage = e.realIndex + 1;
                    },
                    slideChange: function (e) {
                        //   alert('改变了，activeIndex为');
                        self.currentPage = e.realIndex + 1;
                    },
                },
                // grid: {
                //     // fill: "row",
                //     rows: 2,
                // },
            });
        },
        pre() {
            if (this.currentPage === 1) this.currentPage--;
            this.swiper.slidePrev();
            this.swiper.autoplay.stop();
            this.swiper.autoplay.start();
        },
        next() {
            if (this.currentPage !== Math.ceil(this.total / 8)) this.currentPage++;
            this.swiper.slideNext();
            this.swiper.autoplay.stop();
            this.swiper.autoplay.start();
        },

        currentChange(page) {
            this.swiper.slideTo(page - 1);
            this.swiper.autoplay.stop();
            this.swiper.autoplay.start();
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    width: 1420px;
    // height: 700px;
    align-items: center;
    .btn {
        width: 50px;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: rgb(196, 196, 196);
    }
    .swiper {
        margin-left: 61px;
        margin-right: 61px;
        height: 500px;
        width: 1200px;
        // height: 900px;
        // height: 190px;
    }
    .swiper-slide {
        // border: 1px solid rgb(34, 62, 107);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        cursor: pointer;
        // width: calc((100% - 30px) / 4);
        // height: calc((100% - 10px) / 2);
        height: 500px;
        // height: 95px;
        // margin-bottom: -10px;
        text-align: center;
        // background: #000;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .swiper-list {
            // display: flex;
            // width: 280px;
            // height: 200px;
            width: 280px;
            .sw-img {
                width: 280px;
                height: 160px;
                border: 1px solid rgb(34, 62, 107);
                margin-bottom: 15px;
                background-size: 100% 100%;
                background-repeat: no-repeat;

                &:hover {
                    .mask {
                        padding-top: 43px;
                        display: block;
                        background: rgba(0, 2, 39, 0.1);
                        .mask-des {
                            display: -webkit-box;
                            -webkit-box-orient: vertical; /* 表示盒子对象的子元素的排列方式 */
                            -webkit-line-clamp: 2; /* 限制文本的行数，表示文本第多少行省略 */
                            text-overflow: ellipsis; /*  打点展示 */
                            overflow: hidden;
                            width: 227px;
                            margin: 0 auto;
                            height: 42px;
                            text-align: center;
                            font-size: 14px;
                            color: #fff;
                        }
                        .mask-btn {
                            margin: 0 auto;
                            margin-top: 16px;
                            font-size: 10px;
                            width: 80px;
                            height: 24px;

                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border: 1px solid rgb(255, 255, 255);
                            a {
                                color: #fff;
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
            .mask {
                height: 100%;

                display: none;
                // display: flex;
                // justify-content: center;
                // align-items: center;
                // background: rgba(0, 2, 39, 0.1);
                // width: 100%;
                // height: 100%;
            }
        }
    }
    // .swiper-slide-active {
    // border: 1px solid rgb(153, 245, 255);
    // width: 50px!important;
    // .mask {
    //     background: transparent;
    // }
    // }
}
::v-deep .el-pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
    .number {
        border-radius: 5px !important;
    }
    .btn-prev {
        padding-left: 10px;
        padding-right: 10px;
    }
    .btn-next {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>
